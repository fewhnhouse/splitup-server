const { split } = require("./split");
const { group } = require("./group");
const { expense } = require("./expense");
const { user } = require("./user");

const Query = {
  ...split,
  ...expense,
  ...group,
  ...user
};

module.exports = { Query };
