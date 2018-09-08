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
  async deleteExpense(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteExpense({ where: { id } }, info);
  },
  async modifyExpense(parent, { expenseId, title, splits }, ctx, info) {
    return ctx.db.mutation.updateExpense(
      {
        where: { id: expenseId },
        data: {
          title,
          splits
        }
      },
      info
    );
  }
};

module.exports = { expense };
