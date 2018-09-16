const { getUserId } = require("../../utils");

const group = {
  groups(parent, { where }, ctx, info) {
    return ctx.db.query.groups({ where }, info);
  },

  group(parent, { id }, ctx, info) {
    return ctx.db.query.group({ where: { id } }, info);
  }
};

module.exports = { group };
