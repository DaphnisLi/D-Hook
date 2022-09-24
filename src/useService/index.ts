import { useEffect, useState } from 'react'

export const useService = <T, R>(service: (params: T) => Promise<[R, any]>, params: T, discontinue?: () => boolean) => {
  const [flag, setFlag] = useState(true)
  const [res, setRes] = useState([null, null] as unknown as [R, any])
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
