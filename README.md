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

```js
modules: [
  "nuxt-swell"
],
swell: {
  storeId: "YOUR_STORE_ID",
  apiKey: "YOUR_PUBLIC_ACCESS_TOKEN",
  useCamelCase: true //Default is true change it to false to switch to snake_case responses
}
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

#### Async Product Fetch

To retrieve a certrain product by `id` or `slug` and fetch it async with Nuxt 3 `useAsyncData` you can just call

```vue
<script lang="ts" setup>
const myProduct = await getProductAsync("your_slug or id")
</script>
```

This module is handling everything else and returns just the Product for use.

#### Async Products Fetch
Same goes for fetching multiple Products at once.
Enter your desired `key` as parameter to make the result available accross your Nuxt 3 Application with ease and
pass optional `options` like a SearchQuery as second parameter.

You will receive a `ListResult<Product>` as return value.

```vue
<script lang="ts" setup>
//Example options, you can leave it blank too.
const response = await getProductsAsync("individual key", {
  limit: 25,
  page: 1
  expand: ['product.variants']
})

//access a list of products
const products = response.results

//see how many results are available when fetching more pages
const count = response.count
</script>
```

**And more to come soon!**

## Development
* Run `npm run dev:prepare` to generate type stubs
* Use `npm run dev` to start playground in development mode.

