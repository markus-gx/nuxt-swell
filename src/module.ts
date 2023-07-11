import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addImportsDir, extendViteConfig } from '@nuxt/kit'
import { InitOptions } from './types/swell-extended'

export interface ModuleOptions {
  storeId?: string,
  apiKey?: string
  options?: InitOptions
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-swell',
    configKey: 'swell'
  },
  defaults: {
    storeId: undefined,
    apiKey: undefined
  },
  setup (moduleOptions: ModuleOptions, nuxt) {
    if (!moduleOptions.apiKey) {
      throw new Error('[@nuxtjs/swell] Please provide a valid API Key.')
    }
    if (!moduleOptions.storeId) {
      throw new Error('[@nuxtjs/swell] Please provide a valid store id.')
    }
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))
    nuxt.options.runtimeConfig.public.swell = {
      storeId: moduleOptions.storeId,
      apiKey: moduleOptions.apiKey,
      options: { ...moduleOptions.options }
    }
    addImportsDir(resolve(runtimeDir, 'composables'))
    extendViteConfig((config) => {
      config.optimizeDeps = {
        include: ['lodash/camelCase', 'lodash/cloneDeep', 'deepmerge', 'lodash/find', 'lodash/findIndex', 'lodash/get',
          'lodash/isEqual', 'lodash/round', 'lodash/set', 'lodash/snakeCase', 'qs', 'lodash/uniq',
          'lodash/isEmpty', 'lodash/map', 'lodash/reduce', 'lodash/toLower', 'lodash/toNumber']
      }
    })
    console.info('[🚀]nuxt-swell launched successfully.')
  }
})
