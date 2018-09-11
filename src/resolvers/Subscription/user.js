const jwt = require("jsonwebtoken");

function getUserId(ctx) {
  const Authorization = ctx.connection.context.Authorization;
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }

  throw new AuthError();
}

const user = {
  user: {
    subscribe: async (parents, args, ctx, info) => {
      const id = getUserId(ctx);
      console.log(id);
      const sub = await ctx.db.subscription.user(
        {
          where: {
            mutation_in: ["UPDATED"],
            node: { id },
            updatedFields_contains: "friendRequests"
          }
        },
        info
      );
      return sub;
    }
  }
};

module.exports = { user };
