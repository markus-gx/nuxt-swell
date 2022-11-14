<template>
  <div>
    <h1>Settings</h1>
    {{ settings }}
  </div>
</template>

<script lang="ts" setup>
const settings = await useSwell().settings.get()
</script>
