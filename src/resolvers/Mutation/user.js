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

async function getOwnFriends(ctx, userId) {
  const me = await ctx.db.query.user({ where: { id: userId } }, query);
  return me.friends.map(friend => ({ id: friend.id }));
}

const user = {
  async addFriend(parent, { id }, ctx, info) {
    const friendExists = await ctx.db.exists.User({
      id
    });
    if (!friendExists) {
      throw new Error("Friend does not exist");
    }
    const userId = await getUserId(ctx);
    let friends = await getOwnFriends(ctx, userId);
    if (friends.includes(id)) {
      throw new Error("Friend already exists");
    } else if (id === userId) {
      throw new Error("Can´t add yourself to friends");
    } else {
      friends.push({ id });
    }

    return ctx.db.mutation.updateUser(
      {
        where: { id: userId },
        data: { friends: { connect: friends } }
      },
      info
    );
  },
  async removeFriend(parent, { id }, ctx, info) {
    const userId = await getUserId(ctx);
    let friends = await getOwnFriends(ctx, userId);
    if (!friends.find(friend => friend.id === id)) {
      throw new Error(`Friend not found on user`);
    }

    const newFriends = friends.filter(friend => friend.id !== id);
    console.log(newFriends);
    return ctx.db.mutation.updateUser(
      {
        where: { id: userId },
        data: { friends: { connect: newFriends } }
      },
      info
    );
  }
};

module.exports = { user };
