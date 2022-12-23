import { useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../library'

export interface UseLocalStorageState {
  keyName: string
  initialValue?: any
  expireDate?: number
}

export const useLocalStorageState = (params: UseLocalStorageState) => {
  const { keyName, initialValue, expireDate } = params

  const [state, setState] = useState(() => {
    const value = getLocalStorage(keyName)
    if (value) {
      return value
    } else {
      setLocalStorage(keyName, { expireDate, value: initialValue })
      return initialValue
    }
  })

  useEffect(() => {
    setLocalStorage(keyName, { expireDate, value: state })
  }, [state])

  return [state, setState]
}
