import { useState } from '#app'
import { computed } from 'vue'
import { Category } from '../../types/swell-js'
import useSwell from './useSwell'

export default function () {
  const result = useState<Category[]>('categories', () => [])

  const fetch = async (): Promise<Category[]> => {
    const response = await useSwell().categories.get()
    result.value = response.results
    return result.value
  }

  return {
    categories: computed(() => result.value),
    fetch
  }
}
