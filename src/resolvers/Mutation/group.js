const { getUserId } = require("../../utils");

const group = {
  async createGroup(parent, { title }, ctx, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.createGroup(
      {
        data: {
          title,
          participants: [/*{connect: {id: userId}}*/],
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
