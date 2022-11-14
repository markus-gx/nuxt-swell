import { ListResult, Product, Query, SearchQuery } from 'swell-js'
import { useState } from '#app'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import useSwell from './useSwell'

export type UseProductsReturnType = {
  list: ComputedRef<ListResult<Product>>,
  fetch: (options: Query | SearchQuery) => Promise<ListResult<Product>>
}

export default function (key: string): UseProductsReturnType {
  const result = useState<ListResult<Product>>(key, () => ({
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
