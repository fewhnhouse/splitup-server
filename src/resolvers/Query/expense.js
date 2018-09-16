const expense = {
  expenses(parent, { where }, ctx, info) {
    return ctx.db.query.expenses({ where }, info);
  },

  expense(parent, { id }, ctx, info) {
    return ctx.db.query.expense({ where: { id } }, info);
  }
};

module.exports = { expense };
