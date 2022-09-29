import { useEffect } from 'react'
import { message } from 'antd'
import { CommonError } from '../library/request'

export const useShowError = (errorDep: CommonError, msg: string) => {
  useEffect(() => {
    !!errorDep && message.error(msg)
  }, [errorDep])
}
