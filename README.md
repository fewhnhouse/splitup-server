<h1 align="center"><strong>SplitUp GraphQL Server</strong></h1>

<br />

![](https://imgur.com/lIi4YrZ.png)

<div align="center"><strong>🚀 Flexible GraphQL server based on Node.js using Prisma and Apollo.</strong></div>

## Features

- **Scalable GraphQL server:** The server uses [`Apollo-Server`](https://github.com/prisma/graphql-yoga) which is based on Apollo Server & Express
- **GraphQL database:** Includes GraphQL database binding to [Prisma](https://www.prismagraphql.com) (running on PostgreSQL)
- **Authentication**: Signup and login workflows are ready to use for your users
- **Tooling**: Out-of-the-box support for [GraphQL Playground](https://github.com/prisma/graphql-playground) & [query performance tracing](https://github.com/apollographql/apollo-tracing)
- **Extensible**: Simple and flexible [data model](./database/datamodel.graphql) – easy to adjust and extend
- **No configuration overhead**: Preconfigured [`graphql-config`](https://github.com/prisma/graphql-config) setup
- **Realtime updates**: Support for GraphQL subscriptions

## Getting started

```sh

# 1. Navigate to the new project
cd my-app

# 2. Install dependencies
yarn

# 4. Start server (runs on http://localhost:4000) and open GraphQL Playground
yarn dev
```

![](https://imgur.com/hElq68i.png)

## Documentation

### Commands

* `yarn start` starts GraphQL server on `http://localhost:4000`
* `yarn dev` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground
* `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
* `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

