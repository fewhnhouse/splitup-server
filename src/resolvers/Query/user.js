const { getUserId } = require("../../utils");

const query = `
  {
    friends {
      id
    }
  }
`;
const user = {
  users(parent, { where }, ctx, info) {
    return ctx.db.query.users({ where }, info);
  },

  user(parent, { id, email }, ctx, info) {
    const where = { id, email };
    return ctx.db.query.user({ where }, info);
  },
  me(parent, args, ctx, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  }
};

module.exports = { user };
