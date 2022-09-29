import React, { useState } from 'react'
import { Button } from 'antd'
import { useShowError, CommonError } from '@daphnis/d-hook'

const Demo = () => {
  const [error, setError] = useState(false)
  // const fech = (params: any) => requestApi('api', params)
  // const [loading, res, err, forceRequest] = useService(fech, {}, () => false)

  // 正确的实践方式应该是和上面的 useService 搭配, 这里仅做展示
  useShowError(error as unknown as CommonError, '周杰伦新歌水准下降, 但是我会一直听下去')
  return (
    <Button onClick={() => setError(e => !e)}>点击一下</Button>
  )
}

export default Demo
