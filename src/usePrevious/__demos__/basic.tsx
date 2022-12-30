import React, { useState } from 'react'
import { usePrevious } from '@daphnis/d-hook'
import { Button, Space } from 'antd'

const Demo = () => {
  const [state, setState] = useState(1)
  const preState = usePrevious(state)

  return (
    <Space>
      <Button onClick={() => setState(p => p + 1)}>点击</Button>
      <p>current: {state}</p>
      <p>previous: {preState}</p>
    </Space>
  )
}

export default Demo
