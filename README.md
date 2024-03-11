# Filmer Dashboard Frontend

## Getting Started

First, install dependencies:

```bash
    pnpm install

    or

    npm install
```

And run the development server:

```
    pn dev
    or
    npm run dev
```

## Features

1. **Video Upload**
   Easily upload individual contracts.

2. **Image Upload**
   Uploaded contracts can be searched and other contracts (e.g, initial data uploaded from the sftp client gui like filezilla) can be done within three levels of nested folders.

## Structure

```
App
└── src
    ├── assets
    │   ├── styles
    │   ├── images
    ├── components
    │   ├── common          (common component dir)
    │   ├── core            (core component dir)
    │   ├── layout          (layout component dir)
    │   ├── loading         (loading dir)
    │   ├── page            (pages <403, 404, etc.,> dir)
    │   └── sidebar         (app sidebar component)
    ├── config
    │   ├── const           (constants)
    │   ├── nav-links       (app menus json)
    │   ├── query-keys      (react query keys)
    │   ├── router          (app routes router)
    │   └── theme           (mantine theme configs)
    ├── hooks               (custom hooks)
    ├── layouts             (layout components)
    ├── pages
    │   ├── home
    │   ├── crud
    │   │   ├── list
    │   │   ├── form
    │   │   │   ├── create
    │   │   │   └── edit
    │   │   └── detail
    │   └── settings
    ├── services            (api services)
    ├── store               (global state)
    └── utils               (shared functions dir)
```

## Pull Request

Prefix for your pull requests.

- feat: A new feature
- fix: A bug fix
- chore: Other changes that don't modify src
- refactor: A code change that neither fixes a bug nor adds a feature

## Testing

```
    npm test
```

Tests with UI

```
    npm test:ui
```

Code coverage

```
    npm test:cov
```

Use [Playwright](https://playwright.dev) for e2e tests. Install [vscode ext](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

```
    npm test:e2e
```

## Additional Resources

- [Effective Query Keys](https://tkdodo.eu/blog/effective-react-query-keys)
