const { ApolloServer, gql, GraphQLUpload } = require("apollo-server");
const { Prisma } = require("prisma-binding");
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql", // the auto-generated GraphQL schema of the Prisma API
  endpoint: "http://localhost:4466", // the endpoint of the Prisma API (value set in `.env`)
  debug: true // log all GraphQL queries & mutations sent to the Prisma API
  // secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req => ({ ...req, db })
});

server
  .listen({ port: process.env.SERVER_PORT })
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
