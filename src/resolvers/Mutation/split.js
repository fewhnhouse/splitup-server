const { getUserId } = require("../../utils");

const split = {
  async createSplit(parent, { amount, authorId }, ctx, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.createExpense(
      {
        data: {
          amount,
          author: {
            connect: { id: authorId }
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
