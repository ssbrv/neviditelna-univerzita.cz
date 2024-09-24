import { useAxios } from '@vueuse/integrations/useAxios'
import api from './api'
import type { Ref, ShallowRef } from 'vue'

export interface FetchResponse<T> {
  data: Ref<T | undefined, T | undefined>
  isLoading: Ref<boolean, boolean>
  error: ShallowRef<any>
  mutate: () => Promise<void>
}

export function useFetch<T>(url: string): FetchResponse<T> {
  const { data, isLoading, error, execute } = useAxios<T>(url, api)

  async function mutate() {
    execute(url)
  }

  return { data, isLoading, error, mutate }
}
