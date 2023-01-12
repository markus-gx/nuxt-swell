import { useState } from '#app'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import { Product } from 'swell-js/types/product'
import { Query, SearchQuery, ResultsResponse } from '../../types/swell-extended'
import useSwell from './useSwell'

export type UseProductsReturnType = {
  list: ComputedRef<ResultsResponse<Product>>,
  fetch: (options: Query | SearchQuery) => Promise<ResultsResponse<Product>>
}

export default function (key: string): UseProductsReturnType {
  const result = useState<ResultsResponse<Product>>(key, () => ({
    count: 0,
    results: [],
    page: -1
  }))

  const fetch = async (options: Query | SearchQuery = {}) => {
    result.value = await useSwell().products.list(options)
    return result.value
  }
  return {
    list: computed(() => result.value),
    fetch
  }
}
