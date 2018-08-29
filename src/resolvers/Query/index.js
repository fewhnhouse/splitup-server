const { getUserId } = require("../../utils");
const { split } = require("./split");
const { post } = require("./post");
const { group } = require("./group");
const { expense } = require("./expense");

const Query = {
  me(parent, args, ctx, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  },
  ...post,
  ...split,
  ...expense,
  ...group
};

console.log(Query);

module.exports = { Query };
