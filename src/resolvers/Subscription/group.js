const group = {
  group: {
    subscribe: async (parent, args, ctx, info) => {
      const sub = ctx.db.subscription.group({}, info);
      return sub;
    }
  }
};

module.exports = { group };
