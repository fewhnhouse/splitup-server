const { getUserId } = require("../../utils");

const user = {
  users(parent, { name_contains, email }, ctx, info) {
    const where = {
      name_contains,
      email
    };
    return ctx.db.query.users({ where }, info);
  },

  user(parent, { email }, ctx, info) {
    const where = { email };
    return ctx.db.query.user({ where }, info);
  },
  me(parent, args, ctx, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  }
};

module.exports = { user };
