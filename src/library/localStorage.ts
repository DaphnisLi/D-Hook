// 对 localStorage 进行封装
// 1、过期时间

export interface KeyValue {
  readonly value: string
  readonly expireDate: number // 过期时间, 单位: ms
  readonly initialTime: number
}

/**
 * 兼容原生 localStorage
 * @param keyName
 */
const compatibleWindowLocalStorage = (keyName: string) => {
  const store = window.localStorage
  const value = JSON.parse(store.getItem(keyName)!)

  if (typeof value !== 'object') {
    setLocalStorage(keyName, value)
  }
}

export const getLocalStorage = (keyName: string) => {
  const store = window.localStorage
  if (store.getItem(keyName) === null) return null

  compatibleWindowLocalStorage(keyName)

  const keyValue: KeyValue = JSON.parse(store.getItem(keyName)!)

  if (keyValue.expireDate && (Date.now() - keyValue.initialTime > keyValue.expireDate)) {
    store.removeItem(keyName)
    return null
  } else {
    return keyValue.value
  }
}

// 每一次 set, initialTime 都要更新一次
export const setLocalStorage = (keyName: string, keyValue: Partial<Omit<KeyValue, 'initialTime'>> | string) => {
  const store = window.localStorage

  store.setItem(keyName, JSON.stringify({
    initialTime: Date.now(),
    expireDate: 0,
    ...(typeof keyValue === 'string' ? { value: keyValue } : keyValue),
  }))
}

