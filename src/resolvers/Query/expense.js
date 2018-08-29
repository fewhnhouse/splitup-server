const expense = {
    expenses(parent, {groupId}, ctx, info) {
      const where = {
          ownedBy: groupId
      };
      return ctx.db.query.expenses({ where }, info);
    },
  
    expense(parent, { id }, ctx, info) {
      return ctx.db.query.expense({ where: { id } }, info);
    }
  };
  