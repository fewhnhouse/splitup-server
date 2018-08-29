const { auth } = require("./auth");
const { post } = require("./post");
const { expense } = require("./expense");
const { group } = require("./group");
const { split } = require("./split");

const Mutation = {
  ...auth,
  ...post,
  ...group,
  ...expense,
  ...split
};
module.exports = {
  Mutation
};
