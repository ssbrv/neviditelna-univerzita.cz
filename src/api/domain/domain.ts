import { AxiosError } from 'axios'
import type { Domain, DomainDetails } from '../../types/domain'
import { type FetchResponse, useFetch } from '../useFetch'
import { ref, shallowRef } from 'vue'

export function useFetchDomainDetails(domainId: string): FetchResponse<DomainDetails> {
  if (domainId === '1') return useFetch<DomainDetails>('/domain-detail.json')
  // mock call for other than neviditelna-univerzita.cz
  return {
    data: ref(undefined),
    isLoading: ref(false),
    error: shallowRef(new AxiosError('Domain does not exist', '404')),
    mutate: async () => {}
  }
}

// mock call to get neviditelna-univerzita.cz
export function useFetchDomains(): FetchResponse<Array<Domain>> {
  // mock loading state (0.1-2 seconds)
  const isLoading = ref(true)
  const delay = (Math.random() % 19000) + 1000
  setTimeout(() => {
    isLoading.value = false
  }, delay)

  return {
    data: ref([{ id: '1', fqdn: 'neviditelna-univerzita.cz' }]),
    isLoading,
    mutate: async () => {},
    error: shallowRef(undefined)
  }
}
