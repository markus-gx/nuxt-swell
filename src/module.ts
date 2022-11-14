import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addImportsDir, useNuxt } from '@nuxt/kit'
import { InitOptions } from 'swell-js'

export interface ModuleOptions extends InitOptions{
  storeId?: string,
  apiKey?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-swell',
    configKey: 'swell'
  },
  defaults: {
    storeId: undefined,
    apiKey: undefined,
    useCamelCase: true
  },
  setup (options: ModuleOptions, nuxt) {
    if (!options.apiKey) {
      throw new Error('[@nuxtjs/swell] Please provide a valid API Key.')
    }
    if (!options.storeId) {
      throw new Error('[@nuxtjs/swell] Please provide a valid store id.')
    }
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))
    nuxt.options.runtimeConfig.public.swell = {
      storeId: options.storeId,
      apiKey: options.apiKey,
      options: { ...options }
    }
    addImportsDir(resolve(runtimeDir, 'composables'))
    console.info('[🚀] @nuxtjs/swell launched successfully.')
  }
})
