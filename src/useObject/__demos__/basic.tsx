import React from 'react'
import { useObject } from '@daphnis/d-hook'
import { Button, Space } from 'antd'

const Demo = () => {
  const [state, setState] = useObject({ songTitle: '告白气球', singer: 'Jay' })
  return (
    <Space>
      <Button onClick={() => setState('songTitle', '等你下课')}>等你下课</Button>
      <Button onClick={() => setState({ songTitle: '一点点' })}>一点点</Button>
      <Button
        onClick={() => setState(draft => {
          draft.songTitle = '手写的从前'
        })}
      >
        手写的从前
      </Button>
      <p>{JSON.stringify(state)}</p>
    </Space>
  )
}

export default Demo
