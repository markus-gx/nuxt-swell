<template>
  <div>
    <h1>@nuxtjs/swell Playground</h1>
    <h2>Async Products Test</h2>
    <ul>
      <li v-for="p in products" :key="p.id">
        <nuxt-link :to="`/products/${p.slug}/`">
          {{ p.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import getProductsAsync from '../../dist/runtime/composables/getProductsAsync'
const products = await getProductsAsync('all', {})
</script>
