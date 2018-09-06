const { getUserId } = require("../../utils");
const { split } = require("./split");
const { post } = require("./post");
const { group } = require("./group");
const { expense } = require("./expense");
const { user } = require("./user");

const Query = {
  ...post,
  ...split,
  ...expense,
  ...group,
  ...user
};

module.exports = { Query };
