const { importSchema } = require("graphql-import");
const path = require("path");
const first = require("./first");

const second = importSchema(path.resolve("src/typeDefs/schema.graphql"));

const typeDefs = [first, second];

module.exports = typeDefs;
