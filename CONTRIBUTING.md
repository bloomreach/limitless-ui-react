# Contributing & Development

## Table of Content

<!-- toc -->

- [Quick start](#quick-start)
- [Requirements](#requirements)
- [Versioning](#versioning)
- [Commit convention](#commit-convention)
- [Branches](#branches)
- [Releases](#releases)
- [Security](#security)
- [Development Environment](#development-environment)
- [Pipelines](#pipelines)
- [Documentation](#documentation)

<!-- tocstop -->

## Quick start

1. Branch of `main`
2. Make your changes, using conventional commits messages
3. Create a MR and assign one of the maintainers as reviewer
4. Make sure all checks are green & resolve all discussions
5. Merge!
6. Ask maintainers to run the release pipeline

### Available scripts

- `pnpm install` - Install dependencies
- `pnpm build` - Build distribution assets
- `pnpm dev` - Run build in watch mode
- `pnpm test` - Run tests once
- `pnpm test:watch` - Start test runner in watch mode
- `pnpm lint` - Lint with ESLint
- `pnpm type-check` - Run typescript type check

## Requirements

Runtime & package manager:

- Node.js 20+, because it supports the ‘fetch’ API and ESM natively
- PNPM 9+, if you have [Corepack](https://nodejs.org/api/corepack.html) enabled this should be
  automatically picked up.

## Versioning

We follow [Semver](https://semver.org/) and will use
[Semantic Release](https://github.com/semantic-release/semantic-release) to automate releases based
on this assumption.

## Commit convention

We follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) which helps
us automate releases as described in [releases](#releases)

### Commit hook

We utilize [Husky](https://typicode.github.io/husky/) to set up commit hooks to run linting when
committing.

## Branches

- `main` - This is the default branch of the repository.
- `next/**` - This is a branch pattern you can use to merge multiple related changes into and do a
  prerelease.
- `x.x.x` - These are the branches for making hotfixes of previous versions. For example, if version
  1.2.0 needs to be patched, a branch `1.2.x` is created and the patch is applied to that branch.

## Releases

We are using [Semantic Release](https://github.com/semantic-release/semantic-release/) tool to
automatically release and version the package. There is a **manual** Github Action available to
trigger in the
[Actions tab](https://github.com/bloomreach/discovery-web-sdk/actions/workflows/release.yaml).

The package assets are published to the [npm](https://www.npmjs.com/) registry under the
`@bloomreach` scope as `@bloomreach/discovery-web-sdk`.

## Security

We will setup integration with SonarQube as well as Dependabot and `pnpm audit` to scan for and
catch security vulnerabilities in the project and its dependencies.

## Development Environment

### Build tooling

[Vite](https://vitejs.dev/), is currently one of the most popular build tools out there boasting
fast build times and a compatible tool called ‘vitest’ that ensures using the exact same
configuration.

### Test tooling

[Vitest](https://vitest.dev/), its like Jest but integrates with Vite seamlessly. A performant unit
/ integration test runner which also supports snapshot testing (although we probably do not need
that at the moment).

### Linting

Using the industry standard [ESLint](https://eslint.org/) with the
[‘Airbnb](https://airbnb.io/javascript/)’ style guide ESLint config for both javascript and
typescript.

### Formatting

Using the industry standard [Prettier](https://prettier.io/) for formatting.

### Build output

This is an ESM (`"type": "module"`) package and it outputs an ESM bundle and a types bundle for
Typescript users.

### Browser support

Vite supports a [specific set of browsers](https://vitejs.dev/guide/build#browser-compatibility) and
this default set of browsers and their versions should be good enough for most clients to support. A
consumer of the SDK can always opt for compiling the code to an older standard if needed in their
own project build tooling.

## Pipelines

There are currently Github Action pipelines for:

- builds - This runs the standard `install`, `build`, `lint`, `test` steps
- releases - This runs a build step and then a release using Semantic Release. Requires manual
  trigger as described in [releases](#releases).

## Documentation

We will setup an integration with Readme through Github Actions to push pages to the
[Bloomreach Documentation website](https://documenation.bloomreach.com). This way this repository
will remain the single source of truth of documentation spread out through npmjs, github and the
Bloomreach Documenation website.
