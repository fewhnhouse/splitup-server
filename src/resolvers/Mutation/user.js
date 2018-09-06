const { getUserId } = require("../../utils");

const query = `
  {
    id
    name
    friends {
      name
      id
    }
  }
`;
const user = {
  async addFriend(parent, { id }, ctx, info) {
    const userId = getUserId(ctx);
    const me = await ctx.db.query.user({ where: { id: userId } }, query);
    let friends = me.friends.map(friend => ({ id: friend.id }));
    if (!friends.includes(id)) {
      friends.push({ id: id });
    } else {
      console.log("friend exists!");
    }

    return ctx.db.mutation.updateUser(
      {
        where: { id: userId },
        data: { friends: { connect: friends } }
      },
      info
    );
  }
};

module.exports = { user };
