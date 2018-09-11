const { GraphQLUpload } = require("apollo-server");

const { Query } = require("./Query");
const { Subscription } = require("./Subscription");
const { Mutation } = require("./Mutation");
const { AuthPayload } = require("./AuthPayload");

module.exports = {
  Query,
  Mutation,
  Subscription,
  AuthPayload,
  Upload: GraphQLUpload
};
