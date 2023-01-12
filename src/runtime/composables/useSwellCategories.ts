import { useState } from '#app'
import { computed, ComputedRef } from 'vue'
import { Category } from 'swell-js/types/category'
import useSwell from './useSwell'

export type UseCategoriesReturnType = {
  categories: ComputedRef<Category[]>,
  fetchCategories: () => Promise<Category[]>
}

export default function (): UseCategoriesReturnType {
  const result = useState<Category[]>('categories', () => [])

  const fetch = async (): Promise<Category[]> => {
    const response = await useSwell().categories.get()
    result.value = response.results
    return result.value
  }

  return {
    categories: computed(() => result.value),
    fetchCategories: fetch
  }
}
