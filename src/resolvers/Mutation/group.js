const { getUserId } = require("../../utils");

const group = {
  async createGroup(parent, { input }, ctx, info) {
    const { title, participants } = input;
    const userId = getUserId(ctx);
    return ctx.db.mutation.createGroup(
      {
        data: {
          title,
          participants: {
            connect: participants.map(el => {
              return { id: el };
            })
          },
          author: {
            connect: { id: userId }
          }
        }
      },
      info
    );
  },
  async joinGroup(parent, args, ctx, info) {
    return null;
  },
  async leaveGroup(parent, args, ctx, info) {
    return null;
  },
  async modifyGroup(parent, args, ctx, info) {
    return null;
  },
  async deleteGroup(parent, args, ctx, info) {
    return null;
  }
};

module.exports = { group };
