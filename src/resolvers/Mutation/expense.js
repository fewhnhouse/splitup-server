const { getUserId } = require("../../utils");

const expense = {
  async createExpense(parent, { title, groupId }, ctx, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.createExpense(
      {
        data: {
          title,
          splits,
          author: {
            connect: { id: userId }
          },
          belongsTo: {
            connect: { id: groupId }
          }
        }
      },
      info
    );
  },
  async deleteExpense(parent, args, ctx, info) {
    return null;
  },
  async modifyExpense(parent, args, ctx, info) {
    return null;
  }
};

module.exports = { expense };
