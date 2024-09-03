# Markdown-Notes-ElectronJS

Markdown Notes app with Electron, React, Typescript, Tailwind and Jotai.
[Documentation](https://electron-vite.org/)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## How Electron Works

![Electron](./docs/images/electron_process.png)

## Prepare the environment

```console
yarn create @quick-start/electron
```

√ Project name: ... note-mark
√ Select a framework: » react
√ Add TypeScript? ... No / **Yes**
√ Add Electron updater plugin? ... **No** / Yes
√ Enable Electron download mirror proxy? ... **No** / Yes

```console
> cd note-mark
> npm install
```

## Styling

### Install Tailwind CSS

```console
npm install -D tailwindcss@latest postcss autoprefixer
```

```console
npx tailwindcss init -p
```

```console
npm install -D tailwind-merge
npm install -D clsx
npm install -D react-icons
```
