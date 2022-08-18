import { parse, ParsedQs } from 'qs'
import { useLocation } from 'react-router'

export const useQuery = <T extends ParsedQs = {}>() => {
  const { search } = useLocation()
  return parse(search, { ignoreQueryPrefix: true }) as T
}
