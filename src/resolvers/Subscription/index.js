const { user } = require("./user");
const { group } = require("./group");

const Subscription = {
  ...user,
  ...group
};
module.exports = { Subscription };
