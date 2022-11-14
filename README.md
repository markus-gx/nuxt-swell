# nuxt-swell

Among a few other [features](#features) this module wraps the [Universal JavaScript client for Swell's Frontend API](https://github.com/swellstores/swell-js) , 
providing client-safe access to store and customer data.

[Swell](https://www.swell.is) is a customizable, API-first platform for powering modern B2C/B2B shopping experiences and marketplaces. Build and connect anything using your favorite technologies, and provide admins with an easy to use dashboard.

## Features
- Nuxt 3 Ready
- Useful Composables to fetch data from swell e-commerce
- TypeScript Support

## Setup
```shell
yarn add nuxt-swell # yarn
npm i nuxt-swell # npm
```

## Usage

Inside your `nuxt.config.ts` you just need to add the following piece of code and enter the credentials of your store to make everything work out of the box.

```ts
export default defineNuxtConfig({
  modules: [
    "nuxt-swell"
  ],
  swell: {
    storeId: "YOUR_STORE_ID",
    apiKey: "YOUR_PUBLIC_ACCESS_TOKEN",
    options: { // optional
      useCamelCase: true // Default is true change it to false to switch to snake_case responses 
    }
  }
})
```

### Composables
This modules consits of the following composables to make your life easier 😉

#### Use the Swell.JS SDK
Inside your setup function you can just call the composable `useSwell()` and next to first class typescript support,
you are able to call allavailable functions from the Swell.js SDK.

📖  [View Swell.js Documentation for basic usage](https://developers.swell.is/frontend-api/)

```vue
<script lang="ts" setup>
const swell = useSwell()
</script>
```

#### Fetch A Single Product

To retrieve a certain product by `id` or `slug` and fetch it async with Nuxt 3 `useAsyncData` you can just call

```vue
<script lang="ts" setup>
const { product, fetch } = await useSwellProduct("Your Product Name or id")
await useAsyncData("Your Product Name or id", async () => await fetch())
</script>
```
Everything else is handled by the composable, it just returns you the result as `ComputedRef` and a fetch method to actually fetch the product.

#### Fetch A Product List
Same goes for fetching multiple Products at once.
Enter your desired `key` as parameter to make the result available across your Nuxt 3 Application with ease and
pass optional `options` like a SearchQuery as `fetch()` parameter.

You can destructure this composable as well and receive a `list` object and a `fetch` method. Where you can access your products
after fetching by just using `list.results`. 

```vue
<template>
  <p>Products Count: {{list.count}}</p>
  <ul>
    <li v-for="p in list.results" :key="p.id">
      {{ p.name }}
    </li>
  </ul>
</template>

<script setup>
const { result, fetch } = await useSwellProducts('first-page')
await useAsyncData('first-page', async () => await fetch({
  limit: 25,
  page: 1
  expand: ['product.variants']
}))
</script>
```

**And more to come soon!**

## Development
* Run `npm run dev:prepare` to generate type stubs
* Use `npm run dev` to start playground in development mode.

## Credits
- [Gus](https://github.com/gusfune) for kicking of the DefinitelyTyped swell-js package
- [Jakub](https://github.com/Baroshem) for reviewing and giving me hints for my first nuxt module 😉
