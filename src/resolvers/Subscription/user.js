const { getUserId } = require("../../utils");

const user = {
  user: {
    subscribe: async (parents, args, ctx, info) => {
      const sub = await ctx.db.subscription.user({}, info);
      return sub;
    }
  }
};

module.exports = { user };
