const { getUserId } = require("../../utils");

const group = {
  async createGroup(parent, { title }, ctx, info) {
    console.log(title);
    const userId = getUserId(ctx);
    return ctx.db.mutation.createGroup(
      {
        data: {
          title,
          participants: [],
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
