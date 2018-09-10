const group = {
  createGroupSubscription: {
    subscribe: (parent, args, ctx, info) => {
      return ctx.db.subscription.group({}, info);
    }
  }
};

module.exports = { group };
