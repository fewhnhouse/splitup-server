const { getUserId } = require("../../utils");

const split = {
  splits(parent, { expenseId }, ctx, info) {
    const id = getUserId(ctx);

    const where = {
      expenseId
    };

    return ctx.db.query.splits({ where }, info);
  },

  split(parent, { id }, ctx, info) {
    return ctx.db.query.split({ where: { id } }, info);
  }
};

module.exports = { split };
