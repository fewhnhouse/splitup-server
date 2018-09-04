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
  }
};

module.exports = { group };
