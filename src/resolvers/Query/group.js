const { getUserId } = require("../../utils");

const group = {
  groups(parent, ctx, info) {
    const id = getUserId(ctx);
    const where = { participants: { id } };
    return ctx.db.query.groups({ where }, info);
  },

  group(parent, { id }, ctx, info) {
    return ctx.db.query.group({ where: { id } }, info);
  }
};
