import React from 'react'
import { useObject } from 'daphnis-hooks'
import { Button } from 'antd'

const Demo = () => {
  const [state, setState] = useObject({ songTitle: '告白气球', singer: 'Jay' })
  return (
    <>
      <Button className="mr10" onClick={() => setState('songTitle', '等你下课')}>等你下课</Button>
      <Button className="mr10" onClick={() => setState({ songTitle: '一点点' })}>一点点</Button>
      <Button
        className="mt20"
        onClick={() => setState(draft => {
          draft.songTitle = '手写的从前'
        })}
      >
        手写的从前
      </Button>
      <p>{JSON.stringify(state)}</p>
    </>
  )
}

export default Demo
