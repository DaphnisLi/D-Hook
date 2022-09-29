// 封装基础请求 https://axios-http.com/zh/

import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'

export interface CommonError extends Error {
  code?: number // 业务自定义返回码
  message: string // 错误信息
  status?: number // HTTP 状态码
  rawResponse?: AxiosResponse // 原始响应, 如果返回的 HTTP 状态码 >= 400, 则没有这个对象
  rawError?: AxiosError // 原始 axios 错误对象, 如果返回的 HTTP 状态码 < 400，则没有这个对象
}

/**
 * tryCatch return Promise<[T, Error]>
 * @param {Promise<T>} promise
 */
export const tryCatch = async <T, E = Error>(promise: Promise<T> | T): Promise<[T, null] | [null, E]> => {
  try {
    const res = await promise
    return [res, null]
  } catch (err) {
    return [null, err as E]
  }
}

const http = axios.create({
  baseURL: '', // 请求的域名, 可以通过不同的环境, 对不同的后端服务器发起请求
  timeout: 30000, // 请求超时时间, 3s, 超时会中断请求
})

// 修改一些默认的配置, 比如设置请求头。
http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest' // ajax 请求, 要返回 json

/**
 * 处理请求
 */
http.interceptors.request.use(
  (req: AxiosRequestConfig) => {
    // 请求开始时间
    (req as any).headers['X-Request-Start-Time'] = (new Date()).getTime().toString()
    return req
  },
)

/**
 * 处理响应
 * 1、处理返回码 200, 但是后端自定义报错的请求, 比如参数传错了
 * 2、处理返回码非 200
 * 3、将响应的错误格式化为 CommonError
 */
http.interceptors.response.use(
  // 返回码 200
  (res: AxiosResponse) => {
    // ? 业务获取响应数据前, 可以做一些数据上报的工作

    const code = res.data.code // 业务自定义返回码
    const message = res.data.message

    // 报错
    if (code !== 0) { // 这假设 0 是正确的响应
      // 不知道为啥会报错, 奇怪, 分明传的是 Error
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        code,
        message,
        status: 200,
        rawResponse: res,
        rawError: null,
      } as unknown as CommonError)
    }
    // 正常的返回数据
    return res
  },
  // 返回码 500 等, 接口请求异常
  (err: AxiosError) => {
    // ? 可以做一些异常上报的操作

    const status = err?.response?.status
    const statusText = err?.response?.statusText

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      code: status,
      message: typeof statusText === 'string' ? statusText?.slice(0, 30) : statusText,
      status,
      rawResponse: null,
      rawError: err,
    } as unknown as CommonError)
  },
)

/**
 * @param {string} interfaceName 接口名
 * @param {any} params 请求参数
 * @param {AxiosRequestConfig} config axios 配置, 在这里会修改默认配置, 优先级最高
 * @return {[T, CommonError]} 返回一个数组, 第一个为请求的结果，第二个为错误对象
 * case
 * const api = (params) => requestApi('api', params)
 *
 * 使用场景
 * 1、const [res, err] = await api(params)
 * 2、useService(api, params)
 */
export const requestApi = <T extends any>(interfaceName: string, params?: any, config?: AxiosRequestConfig): Promise<[null, CommonError] | [T, null]> => http.post(interfaceName, params, config).then(res => res.data.data)
