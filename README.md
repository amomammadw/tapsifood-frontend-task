# TapsiFood Frontend Task | Mohammad Ranjbar

Checkout the deployed version at this [Link](https://tapsifood-frontend-task.vercel.app)

## Tech-Stack

1. Vue 3
2. Nuxt 3
3. Typescript
4. h3 and nitro for server handlers (API request to fetch and cache default list of products)
5. TailwindCSS for better and more efficient styling
6. Nuxt Image for better and more optimized images
7. Nuxt Icon for faster and optimized icons

## Components

1. Layout (layout related components such as header and add product form)
2. base (components that usually will be used all over project such as buttons and inputs)
3. product (product card, fallback and list)

## Utils

1. random generator: a general utility function that generates random string for new added product IDs

## Composables

1. useProduct: a global composable that covers all conditions and stuff such as create and delete
2. instead of using another variable to save fetched data from products I used **useNuxtData** composable powered by nuxt to get the data from my API request, the reason is to use the cached key and data from nuxt instance and reduce creating redundant variables to improve performance.

## Server Handlers

1. products: a API request based on H3 and Nitro with SWR caching strategy (Stale While Revalidate) to fetch product items from the mock JSON provided by this [Link](https://shopping-list-ten-kohl.vercel.app/products.json)
2. creating a custom server handlers let us to have better control on data that we want from backend and it makes it easier to implement BFF (Backend For Frontend) pattern. it also improves performance and type-safety in our API response
