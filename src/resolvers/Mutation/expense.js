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
  async createExpense(parent, { input }, ctx, info) {
    const userId = getUserId(ctx);

    const {
      title,
      description,
      amount,
      currency,
      participants,
      splits
    } = input;

    const createdSplits = await Promise.all(
      splits.map(split =>
        ctx.db.mutation.createSplit({
          data: { amount: split.amount, author: { connect: { id: split.id } } }
        })
      )
    );

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
          splits: {
            connect: createdSplits.map(split => ({ id: split.id }))
          },
          participants: { connect: participants.map(p => ({ id: p })) }
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
