import { useEffect, useState } from 'react'
import { CommonError } from '../library/request'

export const useService = <T, R>(service: (params: T) => Promise<[R, CommonError]>, params: T, discontinue?: () => boolean) => {
  const [flag, setFlag] = useState(true)
  const [res, setRes] = useState([null, null] as unknown as [R, CommonError])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (discontinue?.()) return
    setLoading(true)
    ;(async () => {
      const res = await service(params)
      setRes(res)
      setLoading(false)
    })()
  }, [params, flag])

  const forceRequest = () => setFlag(c => !c)

  return [loading, res[0], res[1], forceRequest]
}
