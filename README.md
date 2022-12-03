<div align="center">
<h1>react-providers-wrapper</h1>

Nest your React providers

</div>

## Contents

1. [Why?](#why)
   1. [Problem](#problem)
   1. [Solution](#solution)
1. [Inspiration](#inspiration)
1. [Tech stack](#tech-stack)

## Why?

[⬆ Back to the contents](#contents)

I saw it on twitter, shared by Dan Abramov, as someone was complaining of this nesting, and I thought of a solution for a non-existent problem.

For code style purposes, when you have a bigger React App, you may end up with a lot of nested providers at your App which may be confusing to look at. This package proposes a solution that nicely wraps all of those Providers so that it's easier to track the hierarchy.

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
<ProvidersWrapper
  providers={[
    <React.Strict />,
    <Provider store={store} />,
    <UserProvider />,
    <LoginProvider />,
    <BlaBlaBlaProvider />,
    <NoseQueProvider />,
  ]}
>
  <App />
</ProvidersWrapper>
```

## Inspiration

[⬆ Back to the contents](#contents)

React Error Boundary [https://github.com/bvaughn/react-error-boundary](https://github.com/bvaughn/react-error-boundary).

And some random tweet making of the concept of many nested providers with "too much" indentation level, which is expected as the application grows, React or not.

## Tech stack

- React + Typescript
- Vitest

Managed with PNPM

## Version upgrade instructions (local)

Create a local tag

```bash
git tag x.x.x
```

Upload the tag to the remote (this repo)

```bash
git push --follow-tags
```

Or set to always push tags in your local

```bash
git config --global push.followTags true
```
