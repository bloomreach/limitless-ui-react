---
title: Bloomreach Limitless UI React
category: 6234814ad2e8fd04af2a0ffc
---

# Bloomreach Limitless UI React

## Introduction

Bloomreach Limitless UI React is a powerful and flexible library designed to streamline the
integration of Bloomreach Discovery's search and merchandising capabilities into React applications.
It provides a set of customizable React components and hooks that work seamlessly with the
[Bloomreach Discovery Web SDK](https://github.com/bloomreach/discovery-web-sdk).

Key features:

- Multiple integration levels, from low-level SDK access to high-level components
- React hooks for efficient state management
- Headless components for maximum customization
- Accessibility-focused design
- Performance-optimized

## Storybook

For a showcase of all available components, hooks, and their props, please refer to our
[Storybook documentation](https://bloomreach.github.io/limitless-ui-react/).

## Installation

Install the Bloomreach Limitless UI React package `@bloomreach/limitless-ui-react` using npm, yarn,
or pnpm:

```bash
npm install @bloomreach/limitless-ui-react
```

```bash
yarn add @bloomreach/limitless-ui-react
```

```bash
pnpm add @bloomreach/limitless-ui-react
```

## Core Concepts

### Integration Levels

Bloomreach Limitless UI React offers multiple integration levels to suit different needs:

- **Web SDK Direct Usage**: Use the
  [@bloomreach/discovery-web-sdk](https://github.com/bloomreach/discovery-web-sdk) directly for full
  control over API calls.
- solutions.
- **Context-Aware Hooks**: Use hooks like `useSearchBox` to interact with the library's context
  system.
- **Headless Components**: Implement accessible, unstyled components (e.g., `<SearchBox />`) for a
  balance of functionality and customization.
- **Styled Components**: Include an optional styling bundle for a complete out-of-the-box
  experience.

### Compound Components

Limitless UI React uses the compound component pattern for complex components like SearchBox. This
pattern provides more flexibility and control over component composition. For example:

```jsx
<SearchBox.Root configuration={configuration} searchOptions={searchOptions} searchType="product">
  <SearchBox.Suggestions suggestOptions={suggestOptions} />
</SearchBox.Root>
```

This pattern allows you to:

- Compose components with flexibility
- Control exactly which subcomponents to include
- Maintain a clear hierarchy of related components

### Components and Hooks

Each major feature in Limitless UI React is represented by a component and corresponding hooks. This
design allows for flexible usage depending on your specific needs.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [React](https://reactjs.org/) (version 18.3.1 or higher)
- [@bloomreach/discovery-web-sdk](https://github.com/bloomreach/discovery-web-sdk) (version 1.2.1 or
  higher)

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
      <SearchBox.Root
        configuration={configuration}
        searchOptions={searchOptions}
        searchType="product"
      />

      <Results resultComponent={(result) => <div>{result.title}</div>} />
    </div>
  );
};

export default SearchPage;
```

## Usage Examples

### Using the Web SDK Directly

For direct SDK usage, refer to the
[Bloomreach Discovery Web SDK documentation](https://documentation.bloomreach.com/discovery/docs/discovery-web-sdk).

### Using the API Hooks

The API level hooks like `useSearch` provide a low-level interface to retrieve API results and
register them within React state:

```jsx
import { useSearch } from '@bloomreach/limitless-ui-react';

const SearchComponent = ({ query, configuration, searchOptions }) => {
  const { response, loading, error } = useSearch('product', query, configuration, searchOptions);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {response && response.response.docs.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};
```

### Using Component Hooks

The component hooks like `useSearchBox` provide a higher-level interface that also interacts with
the context and outputs state and handlers to build your own custom component:

```jsx
import { useSearchBox, SearchContext } from '@bloomreach/limitless-ui-react';

const CustomSearchBox = (props) => {
  const { response, loading, error, changeHandler, submitHandler, resetHandler, inputValue } =
    useSearchBox(props);

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <input type="text" value={inputValue} onChange={changeHandler} placeholder="Search..." />
      <button type="submit">Search</button>
      <button type="reset">Clear</button>
    </form>

    <Results resultComponent={() => (
      <div key={result.pid}>
        <h2>{result.title}</h2>
        <p>{result.description}</p>
      </div>
    )} />
  );
};
```

### Using Components

Components like SearchBox use a compound pattern that provides both flexibility and structure:

```jsx
import { SearchBox } from '@bloomreach/limitless-ui-react';

const SearchPage = () => {
  return (
    <div>
      <SearchBox.Root
        configuration={/* your configuration */}
        searchOptions={/* your search options */}
        searchType="product"
        labels={{
          placeholder: "Search products...",
          submit: "Search",
          reset: "Clear"
        }}
      >
        <SearchBox.Suggestions
          suggestOptions={/* your suggestion options */}
          onQuerySelect={(query, event) => {
            // Handle query selection
          }}
          onSearchSelect={(product, event) => {
            // Handle product selection
          }}
        />
      </SearchBox.Root>
    </div>
  );
};
```

### Using Components + Style bundle

The headless components can be combined with the optional style bundle and to get a full
'out-of-the-box' experience. Simply import `style.css` from the package in your projects preferred
way.

### Customizing styling

One can of course add styling to specific classes added in the templates of the components like
`<SearchBox>`. There are also a set of css properties, e.g. `--lui-search-box-min-height`, that can
be set to a different value than their defaults.

## Troubleshooting

If you encounter issues:

1. Ensure all dependencies are up to date.
2. Check the console for error messages.
3. Verify your account credentials (accountId, domainKey, authKey).
4. Review the
   [Bloomreach Discovery Web SDK documentation](https://documentation.bloomreach.com/discovery/docs/discovery-web-sdk)
   for SDK-specific issues.

If problems persist, please open an issue on our
[GitHub repository](https://github.com/bloomreach/limitless-ui-react/issues).

## Contribution & Development

We welcome contributions! Please read our
[Contributing Guidelines](https://github.com/bloomreach/limitless-ui-react/blob/main/CONTRIBUTING.md)
for information on how to get started.

## Changes

See our [Changelog](./CHANGELOG.md) for a the series of releases and their changes.

## License

Bloomreach Limitless UI React is licensed under the
[MIT License](https://github.com/bloomreach/limitless-ui-react/blob/main/LICENSE).

## Support

For support, please open an issue on our
[GitHub repository](https://github.com/bloomreach/limitless-ui-react/issues) or contact our
[support team](https://www.bloomreach.com/en/about/contact-us).
