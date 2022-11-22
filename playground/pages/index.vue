<template>
  <div>
    <h1>@nuxtjs/swell Playground</h1>
    <h2>Async Products Test</h2>
    <ul>
      <li v-for="p in list.results" :key="p.id">
        <nuxt-link :to="`/products/${p.slug}/`">
          {{ p.name }}
        </nuxt-link>
      </li>
    </ul>
    <hr>
    <h2>Categories test</h2>
    <ul>
      <li v-for="c in categories" :key="c.id">
        {{ c.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app'
import useSwellProducts from '../../dist/runtime/composables/useSwellProducts'
import useSwellCategories from '../../dist/runtime/composables/useSwellCategories'

const { list, fetch } = useSwellProducts('first-page')
await useAsyncData('first-page', async () => await fetch())

const { categories, fetchCategories } = useSwellCategories()
await useAsyncData('categories', async () => await fetchCategories())
</script>
