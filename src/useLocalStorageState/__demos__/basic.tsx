import React from 'react'
import { useLocalStorageState } from '@daphnis/d-hook'
import { Input, Space, Button } from 'antd'

const Demo = () => {
  const keyName = 'key'

  const [state, setState] = useLocalStorageState({
    keyName,
    initialValue: '反方向的钟',
    expireDate: 3000,
  })

  return (
    <Space>
      <Input value={state} onChange={(e) => setState(e.target.value)} />
      <Button onClick={() => window.localStorage.removeItem(keyName)}>Delete LocalStorage</Button>
    </Space>
  )
}

export default Demo
