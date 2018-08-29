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
  }
};

module.exports = { split };
