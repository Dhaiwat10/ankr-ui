# ankr-ui

## Usage guide

1. Install the package from npm

```bash
# using npm
npm install ankr-ui

# using yarn
yarn add ankr-ui
```

2. Import the CSS at the root of your project (`_app.tsx` in Next.js, `main.tsx` in Vite, `index.tsx` in CRA)

```tsx
import 'ankr-ui/dist/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
```

3. Import the component you want to use

```tsx
import { Button } from 'ankr-ui';

const Page = () => {
  return <Button>gm</Button>;
};

export default Page;
```

## Local development

1. Clone the repo

```bash
git clone https://github.com/dhaiwat10/ankr-ui.git
```

2. `cd` into the directory and install the dependencies

```bash
cd ankr-ui && yarn
```

3. Run the development server

```bash
yarn dev
```

4. Run the Storybook

```bash
yarn storybook
```
