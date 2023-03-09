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

# Production Scale NextJS Project for Enterprise

Building Production NextJS Project for Enterprise which can scale as you grow.

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

Group similar types of components with in a folder under the `components` folder.

Like:

1. Utilities
2. Forms
3. Layouts
4. Templates - used to build other components

### Templates

We will be creating a template so that all of our components that we create follow a same standard.
Create a `base` folder inside teh `templates` folder then create the following files:

1. `BaseTemplate.tsx` - Every component will have its interface defined for the props
2. `BaseTemplate.module.css` - Compoenent specific styling
3. `BaseTemplate.mocks.ts` - Mock data to just for the components which can be tested independently
    1. Note here the mock props is called as base which would be the just one of the possiblilities but we can add more to test things out based on different use cases
4. `BaseTemplate.stories.tsx` - hooking this component to the Storybook
    1. This can be extended further but here we are going with some bare bones

When we extend this base template we will have the structure ready for a new component.

> So far what we have done would be used manually, meaning we will have to copy this base template to component folder of our creation. We can use code generator using PlopJS

### Templates using PlopJS

Reference: https://blog.logrocket.com/automatically-generate-react-components-plop-js/

`npm i --save-dev  plop`

Create a config file `plopfile.js`
Create a `templates` folder at root level.
Create a `component` folder under `templates`
Create the following files:

1. `{{componentName}}.tsx.hbs` - Every component will have its interface defined for the props
2. `{{componentName}}.module.css.hbs` - Compoenent specific styling, this is not needed if you are going to use the tailwind configuration later on
3. `{{componentName}}.mocks.ts.hbs` - Mock data to just for the components which can be tested independently
    1. Note here the mock props is called as base which would be the just one of the possiblilities but we can add more to test things out based on different use cases
4. `{{componentName}}.stories.tsx.hbs` - hooking this component to the Storybook
    1. This can be extended further but here we are going with some bare bones

We can add more actions where this new compnent when created should be automatically added to a index file.
Another action can be type of component then accordingly it will be placed in the right folder

Will recommend Open Source libs like https://github.com/chakra-ui/chakra-ui/blob/main/plopfile.js to understand this better.

Also you can create a generator for Pages, Services, Hooks and so on

### Layouts

Typically we have following layout features so that we don't reepeat them across all the pages.
Primary Layout will have following components

1. Header
2. SideNav - If required, as newer application rely on navigation system to be driven from header Component itslef
3. Container
4. Footer

There can be other sub layouts which might be used with in the applications Container layer:

1. Grid Layout like Youtube
2. Split Screen Layout like markdown editor
3. Asymmetrical Layout Like 2/3 1/3 split Sign Up pages
4. Z- Shape Layout like landing pages with information ending with a CTA

There are others but research them before adopting them, having too many styes of layout in one application will break continuity.

Reference: https://xd.adobe.com/ideas/principles/web-design/11-website-layouts-that-made-content-shine-in-2019/

let's create a Header and Footer component using our plop generator, I did add another command in the package.json file as shown below for DX:

`"gen-c": "plop component"`

Go ahead and make necessary changes in Header and footer with respective `<header>` and `<footer>` tags.
Read the doc-string the Header and Footer component regarding what typically goes into these components.

Let's create a Primary Layout component which will tie things together.

If you want to apply this Primary Layout across all pages of the application then add it to the `_app.tsx` file.

```tsx
import React, { useState } from 'react';
import { PrimaryLayout } from '../components/layouts';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PrimaryLayout>
            <Component {...pageProps} />
        </PrimaryLayout>
    );
}

export default MyApp;
```

Read more here: https://nextjs.org/docs/basic-features/layouts#single-shared-layout-with-custom-app

If certain parts of the pages need certain types of layout based on some business logic then follow Along below:

You will need to create a type for Pages to handle their layout, as per the documentation it is recommended to put this in `_app.tsx` file.
Read more here: https://nextjs.org/docs/basic-features/layouts#per-page-layouts

If need me you can define the application wide layout and override it if you have a page layout.

> Note: So far we have not added any major styles as of now, we repurposed the create-next app styles from global css in our `Footer` component and for beautification added the following style for `Header` component

```css
.header {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-bottom: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
}
```

## TailwindCSS

Leveraging Tailwind for your NextJS application here we go.

### Setup

https://tailwindcss.com/docs/installation/using-postcss

`npm i --save-dev tailwindcss postcss autoprefixer`

autoprefixer - helps in browser support like `web-kit`

Initialize the tailwindcss by `npx tailwindcss init -p`

Create a file at root level of the project: `tailwind.config.js` if not created by above step.

We want tailwind to look at certain file in our project to apply the styles. Also, since we have mentioned specific sizes break point in our storybook settings `.storybook/preview.js` it would be good idea to configure the tailwind also in the similar manner.

Check the final file details in `tailwind.config.js`

Test Things out by applying some tailwind styles to any one of your component and check the outcome.

### Setup for Storybook

`npm i --save-dev @storybook/addon-links`

You might have to add the below addtional addons if the tailwindCSS styles are not working in StoryBook

```js
{
            /**
             * Fix Storybook issue with PostCSS@8
             * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
             */
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
```

Solution for tailwind to work with storybook is to add the following line in the storybook preview.js file
`import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';`
This solution works for TailwindCSS version and Storybook Version:

```json
{
    "@storybook/addon-actions": "^6.5.16",
    "@storybook/addon-essentials": "^6.5.16",
    "@storybook/addon-interactions": "^6.5.16",
    "@storybook/addon-links": "^6.5.16",
    "@storybook/builder-webpack5": "^6.5.16",
    "@storybook/manager-webpack5": "^6.5.16",
    "@storybook/react": "^6.5.16",
    "@storybook/testing-library": "^0.0.13",
    "autoprefixer": "^10.4.13",
    "babel-loader": "^8.3.0",
    "eslint-plugin-storybook": "^0.6.11",
    "postcss": "^8.4.21",
    "storybook-css-modules-preset": "^1.1.1",
    "tailwindcss": "^3.2.7"
}
```

Read here: https://stackoverflow.com/questions/68020712/tailwind-css-classes-not-showing-in-storybook-build#:~:text=The%20above%20solutions%20will%20not%20work%20for%20Tailwind%20version%20%3E%203.0%20because%20of%20JIT%20compiler.

### Themes

When we want most of app to have same UI look and feel then we put application specific things in the Theme part of this config.

---

Notes:

1. When you aer pulling the images from external sources in NextJS add those domains under the `next.config.js`
