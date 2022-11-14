<template>
  <div>
    <h1>Product: {{ product.name }}</h1>
    <img :src="product.images[0].file.url" width="250">
  </div>
</template>

<script setup lang="ts">
const productName = useRoute().params.slug
const product = await getProductAsync(productName as string)
</script>
