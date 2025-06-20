- [Real Estate](#real-estate)
  - [Client Installation](#client-installation)
  - [Install Tailwind CSS3](#install-tailwind-css3)
    - [Install Tailwind CSS](#install-tailwind-css)
    - [Configure your template paths](#configure-your-template-paths)
    - [Add the Tailwind directives to your CSS](#add-the-tailwind-directives-to-your-css)
  - [Install Shadcn/ui](#install-shadcnui)

# Real Estate

## Client Installation

- Install NextJS

```cmd
npx create-next-app@latest
```

![Install NextJS](photo/install-nextjs.png)

- Install other packages

```cmd
npm i lucide-react dotenv date-fns react-filepond filepond filepond-plugin-image-exif-orientation filepond-plugin-image-preview framer-motion mapbox-gl lodash react-hook-form zod @hookform/resolvers react-redux @reduxjs/toolkit
```

- Install dev dependencies

```cmd
npm i -D @types/node @types/uuid
```

## Install Tailwind CSS3

### Install Tailwind CSS

- Install `tailwindcss` and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```cmd
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### Configure your template paths

- Add the paths to all of your template files in your `tailwind.config.js` file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Add the Tailwind directives to your CSS

- Add the `@tailwind` directives for each of Tailwind’s layers to your `globals.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Install Shadcn/ui

```cmd
npx shadcn@latest init
```

![Install Shadcn](photo/install-shadcn.png)

- Install all shadcn components

```cmd
npx shadcn@latest add avatar badge button card checkbox command dialog dropdown-menu form input label navigation-menu radio-group select separator sheet sidebar skeleton slider sonner switch table tabs textarea tooltip
```
