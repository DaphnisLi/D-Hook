import { useEffect } from 'react'
import { message } from 'antd'

export const useShowError = (errorDep: any, msg: string) => {
  useEffect(() => {
    !!errorDep && message.error(msg)
  }, [errorDep])
}
