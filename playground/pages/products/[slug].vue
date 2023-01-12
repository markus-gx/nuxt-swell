<template>
  <div>
    <h1>Product: {{ product?.name }}</h1>
    <img :src="product?.images[0].file.url" width="250">
  </div>
</template>

<script setup lang="ts">
import { useAsyncData, useRoute } from '#app'
import { useSwellProduct } from '#imports'

const productName = useRoute().params.slug as string
const { product, fetch } = await useSwellProduct(productName)
await useAsyncData(productName, async () => await fetch())
</script>
