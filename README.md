# @lukasbriza/config-templates

Shared configuration templates for ESLint, Prettier, and TypeScript used in @lukasbriza projects.

## 📦 Installation

```bash
# Using pnpm
pnpm add -D @lukasbriza/config-templates

# Using npm
npm install -D @lukasbriza/config-templates

# Using yarn
yarn add -D @lukasbriza/config-templates
```

> **Note:** This package is published to GitHub Packages. Make sure you have properly configured `.npmrc` for access to the `@lukasbriza` scope.

## 🚀 Usage

### ESLint

The package provides several ESLint configurations for different project types:

#### Base Configuration

Base configuration for TypeScript projects:

```javascript
// .eslintrc.cjs or .eslintrc.js
module.exports = {
  extends: ['@lukasbriza/config-templates/eslint'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
```

#### CommonJS Configuration

For projects using CommonJS:

```javascript
module.exports = {
  extends: ['@lukasbriza/config-templates/eslint/cjs'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
```

#### React Configuration

For React projects:

```javascript
module.exports = {
  extends: ['@lukasbriza/config-templates/eslint/react'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
```

#### Next.js Configuration

For Next.js projects:

```javascript
module.exports = {
  extends: ['@lukasbriza/config-templates/eslint/nextjs'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
```

#### NestJS Configuration

For NestJS projects:

```javascript
module.exports = {
  extends: ['@lukasbriza/config-templates/eslint/nestjs'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
```

#### Storybook Configuration

For Storybook projects:

```javascript
module.exports = {
  extends: ['@lukasbriza/config-templates/eslint/storybook'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
```

### Prettier

To use the Prettier configuration:

```javascript
// .prettierrc.js or prettier.config.js
module.exports = require('@lukasbriza/config-templates/prettier')
```

Or in `package.json`:

```json
{
  "prettier": "@lukasbriza/config-templates/prettier"
}
```

### TypeScript

The package provides several TypeScript configurations:

#### Base Configuration

```json
// tsconfig.json
{
  "extends": "@lukasbriza/config-templates/ts"
}
```

#### App Configuration

For applications:

```json
{
  "extends": "@lukasbriza/config-templates/ts/app"
}
```

#### Library Configuration

For libraries:

```json
{
  "extends": "@lukasbriza/config-templates/ts/library"
}
```

#### CommonJS Library Configuration

For CommonJS libraries:

```json
{
  "extends": "@lukasbriza/config-templates/ts/cjs-library"
}
```

#### Next.js Configuration

For Next.js projects:

```json
{
  "extends": "@lukasbriza/config-templates/ts/nextjs"
}
```

#### NestJS Configuration

For NestJS projects:

```json
{
  "extends": "@lukasbriza/config-templates/ts/nestjs"
}
```

## 📋 Peer Dependencies

This package requires the following peer dependencies:

- `eslint` ^8.57.0
- `prettier` ^3.3.2
- `typescript` ^5.5.3

And additional ESLint plugins depending on the configuration used. Make sure you have all required dependencies installed.

## 🔧 Development

### Build

To build the package:

```bash
pnpm build
```

## 📝 License

This project is private and intended for use only in @lukasbriza projects.
