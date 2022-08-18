import React, { useState } from 'react'
import { Button } from 'antd'
import { useShowError } from 'daphnis-hooks'

const Demo = () => {
  const [error, setError] = useState(false)
  useShowError(error, '周杰伦新歌水准下降')
  return (
    <Button onClick={() => setError(e => !e)}>点击一下</Button>
  )
}
export default Demo
