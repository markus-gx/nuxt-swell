import { useNuxtApp } from '#app'
import { Swell } from '../../types/swell'

export default function (): Swell {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$swell
}
