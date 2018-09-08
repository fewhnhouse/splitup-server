const { auth } = require("./auth");
const { expense } = require("./expense");
const { group } = require("./group");
const { split } = require("./split");
const { user } = require("./user");
const Mutation = {
  ...auth,
  ...group,
  ...expense,
  ...split,
  ...user
};

module.exports = {
  Mutation
};
