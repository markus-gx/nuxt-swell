import { Product, Query } from 'swell-js'
import { useState } from '#app'
import { computed, ComputedRef } from 'vue'
import useSwell from './useSwell'

export type UseProductReturnType = {
  product: ComputedRef<Product | null>,
  fetch: (options: Query) => Promise<Product>
}
export default function (productId: string): UseProductReturnType {
  const result = useState<Product | null>(productId, () => null)

  const fetch = async (options: Query = {}) => {
    result.value = await useSwell().products.get(productId, options)
    return result.value
  }

  return {
    product: computed(() => result.value),
    fetch
  }
}
