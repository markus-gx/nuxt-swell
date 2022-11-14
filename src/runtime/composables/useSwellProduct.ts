import { Product } from 'swell-js'
import { useState } from '#app'
import { computed, ComputedRef } from 'vue'
import useSwell from './useSwell'

export type UseProductReturnType = {
  product: ComputedRef<Product | null>,
  fetch: () => Promise<Product>
}
export default function (productId: string): UseProductReturnType {
  const result = useState<Product | null>(productId, () => null)

  const fetch = async () => {
    result.value = await useSwell().products.get(productId)
    return result.value
  }

  return {
    product: computed(() => result.value),
    fetch
  }
}
