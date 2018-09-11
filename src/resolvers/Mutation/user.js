const { getUserId } = require("../../utils");

const user = {
  async addFriend(parent, { id }, ctx, info) {
    const userId = await getUserId(ctx);
    if (id === userId) {
      throw new Error("Can´t add yourself to friends");
    }

    return ctx.db.mutation.updateUser(
      {
        where: { id: userId },
        data: { friends: { connect: { id } } }
      },
      info
    );
  },
  async addAvatar(parent, { file }, ctx, info) {
    const userId = await getUserId(ctx);
    return ctx.db.mutation.updateUser(
      {
        where: { id: userId },
        data: { avatar: file }
      },
      info
    );
  },

  async removeFriend(parent, { id }, ctx, info) {
    const userId = await getUserId(ctx);
    return ctx.db.mutation.updateUser(
      {
        where: { id: userId },
        data: { friends: { disconnect: { id } } }
      },
      info
    );
  },

  async createFriendRequest(parent, { id }, ctx, info) {
    const userId = await getUserId(ctx);
    return ctx.db.mutation.updateUser({
      where: { id: userId },
      data: { friendRequests: { connect: { id } } }
    });
  }
};

module.exports = { user };
