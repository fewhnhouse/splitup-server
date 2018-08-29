const { getUserId } = require("../../utils");

const group = {
  groups(parent, args, ctx, info) {
    const userid = getUserId(ctx);
    const where = { author: { id: userid } };
    return ctx.db.query.groups({ where }, info);
  },

  group(parent, { id }, ctx, info) {
    return ctx.db.query.group({ where: { id } }, info);
  }
};

module.exports = { group };
