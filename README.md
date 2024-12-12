# node-sdk

Node.js SDK for Easecrypt API

## Commands

Install dependencies

```bash
pnpm install
```

Build the package

```bash
pnpm run build
```

Run tests

```bash
pnpm run test
```

## Commit message guidelines

We use [Conventional Commits](https://conventionalcommits.org/) to standardize commit messages.

### Commit message structure

```
<type>[optional scope]: <description>

[optional body]
```

### Commit type

- `feat`: A new feature
- `fix`: A bug fix
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Commit scope

- `wallet-api`: Changes to the Wallet API class
- `utils`: Changes to the utils
- `generator`: Changes to the generator
- `test`: Changes to the test
- `build`: Changes to the build process
- `deps`: Changes to the dependencies
- `docs`: Changes to the documentation
