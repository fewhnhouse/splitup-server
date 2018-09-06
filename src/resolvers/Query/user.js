//const { getUserId } = require("../../utils");

const user = {
  users(parent, args, ctx, info) {
    //const where = { name, id };
    console.log("sth");
    return ctx.db.query.users({ where: {} }, info);
  },

  user(parent, { email }, ctx, info) {
    const where = { email };
    console.log(email);
    return ctx.db.query.user({ where }, info);
  },
  me(parent, args, ctx, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  }
};

module.exports = { user };
