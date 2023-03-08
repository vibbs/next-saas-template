This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

# CBS Project

## Setup

Creation
`npx create-next-app --ts . `

Then typical setup process of:

1. git
2. ESLint check the `.eslintrc.json` file
3. Prettier check the `prettierignore` and `.prettierrc` file
4. vs code suto save and prettier application check the `.vscode\settings.json` file
5. Debugging Scripts specifically for NextJS - check the `.vscode\launch.json` file
6. Cross platform environmental variables - `cross-env` package
    1. This will help things to be loaded across platform windows or mac

Other things good to have would be:

1. git hooks using husky
    1. Enforce code quality standards before the code is pushed

## Directory Structure

1. `pages` - holds all the pages
2. `components` - all the components
3. `lib` - library for business logic domain specific things

## Storybook

Component showcasing and building in isolations.
Can help in different states of a given component.
Helps when you are implementing design system.

Not used for:

1. Application logic
2. Page routing
3. and so on

`npx sb init --builder webpack5`

Setup Storybook setup: ESLint check the `.eslintrc.json` file

Post everything it would create two folders in your root dir `.storybook` which holds all of the configurations and `stories` where the components are showcased.

modify the config `main.js` of Story book if you are putting the stories along side your components, and also specify where the static directory is for assets.

```js
module.exports = {
    stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
};
```

For the `preview.js` file special handling of `Image` compoenent from NextJS

## Component Templates

So that all components are craeted with same standards and consistency.
