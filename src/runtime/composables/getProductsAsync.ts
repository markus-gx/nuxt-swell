import { useAsyncData } from '#app'
import { ListResult, Product, Query, SearchQuery } from 'swell-js'
import useSwell from './useSwell'

export default async function (key: string, options?: Query | SearchQuery): Promise<ListResult<Product>> {
  const result = await useAsyncData(key, async () => await useSwell().products.list(options || {}))
  if (result.error.value) {
    throw new Error(`Something went wrong. Error: ${result.error.value?.message}`)
  }
  return result.data.value as ListResult<Product>
}
