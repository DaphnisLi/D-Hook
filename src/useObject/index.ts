import { Draft } from 'immer'
import { useImmer } from 'use-immer'

export const useObject = <T extends object>(initialValue: T) => {
  const [state, setState] = useImmer(initialValue)

  function set <K extends keyof Draft<T>>(key: K, value: Draft<T>[K]): void
  function set (data: Partial<T>): void
  function set (fn: (draft: Draft<T>) => void): void
  function set <K extends keyof Draft<T>> (data: any, value?: Draft<T>[K]): void {
    if (typeof data === 'string') {
      setState((draft: Draft<T>) => {
        draft[data as K] = value!
      })
    } else if (typeof data === 'object') {
      setState((draft: Draft<T>) => {
        for (const key in data as Draft<T>) {
          draft[key] = data[key]
        }
      })
    } else if (typeof data === 'function') {
      setState(data)
    }
  }
  return [state, set] as [T, typeof set]
}
