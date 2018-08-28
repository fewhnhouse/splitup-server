const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const { Prisma } = require("prisma-binding");
const path = require("path");
const resolvers = require("./resolvers");
const clientResolvers = require("./clientResolvers");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql", // the auto-generated GraphQL schema of the Prisma API
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
  debug: true // log all GraphQL queries & mutations sent to the Prisma API
  // secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
});

const typeDefs = importSchema(path.resolve("src/schema.graphql"));
const clientTypeDefs = importSchema(path.resolve("src/clientschema.graphql"));
const server = new ApolloServer({
  typeDefs,
  resolvers,
  clientState: {
    defaults: {},
    resolvers: clientResolvers,
    typeDefs: clientTypeDefs
  },
  context: req => ({ ...req, db })
});

server
  .listen({ port: process.env.SERVER_PORT })
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
