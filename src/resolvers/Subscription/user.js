const { getUserId } = require("../../utils");

const user = {
  friendRequestSubscription: {
    subscribe: (parents, args, ctx, info) => {
      const id = getUserId(ctx);
      return ctx.db.subscription.user(
        {
          where: {
            node: {
              id
            },
            mutation_in: ["UPDATED"],
            updatedFields_contains: ["friendRequests"]
          }
        },
        info
      );
    }
  }
};

module.exports = { user };
