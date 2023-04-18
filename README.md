<div align="center">
<h1>react-providers-wrapper</h1>

Nest your React providers

</div>

## Contents

1. [Roadmap](#roadmap)
1. [Why?](#why)
   1. [Problem](#problem)
   1. [Solution](#solution)
1. [Inspiration](#inspiration)
1. [Tech stack](#tech-stack)
1. [Version upgrade instructions (local)](#Version)
   1. [Create a local tag](#Create)
   1. [Upload the tag to the remote (this repo)](#Upload)
   1. [Configure your local](#Configure)

## Roadmap

[⬆ Back to the contents](#contents)

Check out the Roadmap at [ROADMAP.md](./ROADMAP.md) and the CHANGELOG at [CHANGELOG.md](./CHANGELOG.md).

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
    { provider: React.Strict },
    { provider: Provider, props: { store } },
    { provider: UserProvider },
    { provider: LoginProvider },
    { provider: BlaBlaBlaProvider },
    { provider: NoseQueProvider },
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

[⬆ Back to the contents](#contents)

### Create a local tag

[⬆ Back to the contents](#contents)

```bash
git tag x.x.x
```

### Upload the tag to the remote (this repo)

[⬆ Back to the contents](#contents)

```bash
git push origin x.x.x
```

### Configure your local

[⬆ Back to the contents](#contents)

```bash
git push --follow-tags
```

Or set to always push tags in your local

```bash
git config --global push.followTags true
```
