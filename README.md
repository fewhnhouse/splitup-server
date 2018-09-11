<h1 align="center"><strong>SplitUp GraphQL Server</strong></h1>

<br />

![](https://imgur.com/lIi4YrZ.png)

<div align="center"><strong>🚀 Flexible GraphQL server based on Node.js using Prisma and Apollo.</strong></div>
<div align="center">This is a test project to get familiar with GraphQL by building an App similar to Splitwise and Splittr.</div>

## Features
So far, the following features are supported:

- **Scalable GraphQL server:** The server uses [`Apollo-Server`](https://github.com/apollographql/apollo-server) 
- **GraphQL database:** Includes GraphQL database binding to [Prisma](https://www.prismagraphql.com) (running on PostgreSQL)
- **Authentication**: Signup and login workflows
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

# 3. Set APP_SECRET and SERVER_PORT values in your .env file
touch .env
echo "APP_SECRET=<mysecret>" >> .env
echo "SERVER_PORT=4000" >> .env
echo "PRISMA_PORT=4466" >> .env

# 4. Start server (runs on http://localhost:4000) and open GraphQL Playground
yarn start
```

![](https://imgur.com/hElq68i.png)

## Documentation

### Commands

* `yarn start` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground

* `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)

* `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

