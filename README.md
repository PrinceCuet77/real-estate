- [Real Estate](#real-estate)
  - [Client Installation](#client-installation)
  - [Install Tailwind CSS3](#install-tailwind-css3)
    - [Install Tailwind CSS](#install-tailwind-css)
    - [Configure your template paths](#configure-your-template-paths)
    - [Add the Tailwind directives to your CSS](#add-the-tailwind-directives-to-your-css)
  - [Install Shadcn/ui](#install-shadcnui)
  - [Install Postgis In PostgreSQL](#install-postgis-in-postgresql)
  - [Backend](#backend)

# Real Estate

- [Diagrams](https://miro.com/app/board/uXjVLgjxNpE=/)

## Client Installation

- Install NextJS

```cmd
npx create-next-app@latest
```

- `TypeScript` - Yes
- `ESLint` - Yes
- `Tailwind CSS` - Yes
- `src/` - Yes
- `App Router` - Yes
- `Turbopack` - No
- `import alias` - No

- Install other packages

```cmd
cd client

npm i lucide-react dotenv date-fns react-filepond filepond filepond-plugin-image-exif-orientation filepond-plugin-image-preview framer-motion mapbox-gl lodash react-hook-form zod @hookform/resolvers react-redux @reduxjs/toolkit

npm i @fortawesome/fontawesome-svg-core
npm i @fontawesome/free-brands-svg-icons
npm i @fontawesome/react-fontawesome --legacy-peer-deps
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

- AWS setup

```cmd
npm install @aws-amplify/ui-react aws-amplify --legacy-peer-deps
```

## Install Postgis In PostgreSQL

- Add a query tool on the PostgreSQL

```cmd
CREATE EXTENSION IF NOT EXIST "postgis";
```

- My PostgreSQL is not having the postgis by default as using `12+` version
- You can check if a PostGIS package for PostgreSQL 12 exists:

```cmd
sudo apt list | grep postgresql-12-postgis
```

- Terminal shows something like:

```txt
WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

postgresql-12-postgis-3-dbgsym/jammy-pgdg 3.6.0+dfsg-2.pgdg22.04+1 amd64
postgresql-12-postgis-3-scripts/jammy-pgdg 3.6.0+dfsg-2.pgdg22.04+1 all
postgresql-12-postgis-3/jammy-pgdg 3.6.0+dfsg-2.pgdg22.04+1 amd64
```

- Install PostGIS for PostgreSQL 12:

```cmd
sudo apt update
sudo apt install postgresql-12-postgis-3 postgresql-12-postgis-3-scripts
```

- After installation, confirm that the control file now exists:

```cmd
ls /usr/share/postgresql/12/extension/postgis.control
```

## Backend

```cmd
mkdir server
cd server

npm init -y

npm i express body-parser cors dotenv helmet morgan jsonwebtoken multer uuid axios @terraformer/wkt @aws-sdk/client-s3 @aws-sdk/lib-storage

npm i -D rimraf concurrently nodemon shx ts-node typescript @types/cors @types/morgan @types/node @types/jsonwebtoken @types/multer @types/terraformer__wkt @types/uuid

npx tsc --init
```

- Prisma setup

```cmd
npm i prisma @prisma/client
npm run prisma:generate
npx prisma migrate dev --name init
npm run seed
```

- If I have any database related issue:

```cmd
npx prisma migrate reset
npm run prisma:generate
npx prisma migrate dev --name init
npm run seed
```
