import { Product } from 'swell-js'
import { useAsyncData } from '#app'
import useSwell from './useSwell'

export default async function (productId: string): Promise<Product> {
  const result = await useAsyncData(productId, async () => await useSwell().products.get(productId))
  if (result.error.value) {
    throw new Error(`Product with id ${productId} not found. ${JSON.stringify(result.error)}`)
  }
  return result.data.value as Product
}
