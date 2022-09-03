<div align="center">
<h1>react-providers-wrapper</h1>

Nest your React providers
</div>

## Contents

1. [Why?](#why)
    1. [Problem](#problem)
    1. [Solution](#solution)
1. [Inspiration](#inspiration)

## Why?
[⬆ Back to the contents](#contents)

For code style purposes, when you have a bigger React App, you may end up with a lot of nested providers at your App which may be confusing to look at.

This package proposes a solution that nicely wraps all of those Providers so that it's easier to track the hierarchy.

### Problem
[⬆ Back to the contents](#contents)

```jsx
<React.Strict>,
  <Provider store={store}>,
    <UserProvider>,
      <LoginProvider>,
        <BlaBlaBlaProvider>,
          <NoseQueProvider>,
            <App />
          <NoseQueProvider />,
        <BlaBlaBlaProvider />,
      <LoginProvider />,
    <UserProvider />,
  <Provider store={store} />,
<React.Strict />,
```

### Solution
[⬆ Back to the contents](#contents)

```jsx
<ProvidersWrapper providers={[
  <React.Strict />,
  <Provider store={store} />,
  <UserProvider />,
  <LoginProvider />,
  <BlaBlaBlaProvider />,
  <NoseQueProvider />,
]}>
  <App />
</ProvidersWrapper>
```

## Inspiration
[⬆ Back to the contents](#contents)

React Error Boundary [https://github.com/bvaughn/react-error-boundary](https://github.com/bvaughn/react-error-boundary).