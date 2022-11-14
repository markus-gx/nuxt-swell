import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import swell from 'swell-js'

export default defineNuxtPlugin((nuxtApp) => {
  const { storeId, apiKey, options } = useRuntimeConfig().swell
  swell.init(storeId, apiKey, options)
  nuxtApp.provide('swell', swell)
})
