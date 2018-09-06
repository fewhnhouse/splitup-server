const { getUserId } = require("../../utils");

const split = {
  async createSplit(parent, { amount, expenseId }, ctx, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.createExpense(
      {
        data: {
          amount,
          author: {
            connect: { id: userId }
          },
          belongsTo: {
            connect: { id: expenseId }
          }
        }
      },
      info
    );
  },
  async modifySplit(parent, args, ctx, info) {
    return null;
  }
};

module.exports = { split };
