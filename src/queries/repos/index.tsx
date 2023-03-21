import { useQuery } from '@tanstack/react-query'

import api from '../../services/axios'

export default function useFetchRepos() {
  const { data, isLoading } = useQuery(['repos'], async () => {
    const response = await api.get(`/users/bernardinorafael/repos`)

    return response.data
  })

  return { data, isLoading }
}
