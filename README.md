# Bloomreach Limitless UI - React

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [React](https://reactjs.org/) (version 18.3.1 or higher)
- [@bloomreach/discovery-web-sdk](https://github.com/bloomreach/discovery-web-sdk) (version 1.2.1 or
  higher)

### Installation

NPM:

```sh
npm add @bloomreach/limitless-ui-react
```

PNPM:

```sh
pnpm add @bloomreach/limitless-ui-react
```

Yarn:

```sh
yarn add @bloomreach/limitless-ui-react
```

### Basic Setup

1. Set up the Limitless UI provider in your main App component:

```jsx
import { LimitlessUIProvider } from '@bloomreach/limitless-ui-react';

const App = () => {
  return <LimitlessUIProvider>{/* Your app components */}</LimitlessUIProvider>;
};

export default App;
```

2. Use Limitless UI React components in your application:

```jsx
import { SearchBox } from '@bloomreach/limitless-ui-react';

const SearchPage = () => {
  return (
    <div>
      <SearchBox />
    </div>
  );
};

export default SearchPage;
```

## Storybook

For a complete API reference, including all available components, hooks, and their props, please
refer to our [Storybook documentation](https://bloomreach.github.io/limitless-ui-react/).

<!-- ## Type documentation -->
<!-- For a type reference see the TSDoc published [here](.) -->

## Developer guide

For getting started with the project and for a more extensive guide see our
[Developer guide](./readme/limitless-ui-react.md).

## Contribution & Development

See our [Contribution Guide](./CONTRIBUTING.md).

## Changes

See our [Changelog](./CHANGELOG.md) for a the series of releases and their changes.

## Related resources

- [Bloomreach SDK](https://documentation.bloomreach.com/discovery/docs/discovery-sdks)
- [Web Code Samples](https://documentation.bloomreach.com/discovery/docs/discovery-web-code-samples)
- [Sample Catalogs](https://github.com/bloomreach/sample-catalogs)
