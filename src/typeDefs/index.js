const { importSchema } = require("graphql-import");
const path = require("path");
const types = require("./types");
const mutationInputs = require("./mutationInputs");
const queryInputs = require("./queryInputs");
const queries = require("./queries");
const mutations = require("./mutations");

const generatedSchema = importSchema(
  path.resolve("src/typeDefs/schema.graphql")
);

const typeDefs = [
  types,
  mutationInputs,
  queryInputs,
  queries,
  mutations,
  generatedSchema
];

module.exports = typeDefs;
