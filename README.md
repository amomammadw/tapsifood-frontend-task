# TapsiFood Frontend Task | Mohammad Ranjbar

Checkout the deployed version of task at this [Link](https://tapsifood-frontend-task.vercel.app)

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

```bash
# yarn
yarn

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment#presets) for more information.
