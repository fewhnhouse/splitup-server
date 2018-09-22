const { getUserId } = require("../../utils");

const expense = {
  async createLinkedExpense(parent, { input }, ctx, info) {
    const userId = getUserId(ctx);

    const {
      title,
      description,
      groupId,
      amount,
      currency,
      participants
    } = input;
    return ctx.db.mutation.createExpense(
      {
        data: {
          title,
          description,
          amount,
          currency,
          author: {
            connect: { id: userId }
          },
          participants: { connect: participants.map(p => ({ id: p })) },
          belongsTo: {
            connect: { id: groupId }
          }
        }
      },
      info
    );
  },
  async createExpense(parent, { id }, ctx, info) {
    return null;
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
