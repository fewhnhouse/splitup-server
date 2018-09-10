const { getUserId } = require("../../utils");

const query = `
  {
    friends {
      id
    }
  }
`;
const user = {
  async users(parent, { name_contains, email, includeFriends }, ctx, info) {
    const id = getUserId(ctx);
    const where = {
      name_contains,
      email,
      id_not: id
    };
    const me = await ctx.db.query.user({ where: { id } }, query);
    const users = await ctx.db.query.users({ where }, info);
    return includeFriends
      ? users
      : users.filter(user => !me.friends.find(friend => friend.id === user.id));
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
