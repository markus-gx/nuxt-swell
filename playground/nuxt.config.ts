import { defineNuxtConfig } from 'nuxt/config'
import Swell from '..'

export default defineNuxtConfig({
  modules: [
    Swell
  ],
  swell: {
    storeId: process.env.STORE_ID,
    apiKey: process.env.SWELL_PUBLIC_KEY
  }
})
