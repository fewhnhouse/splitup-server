const { getUserId } = require("../../utils");

const group = {
  groups(parent, { author, title_contains }, ctx, info) {
    const where = { author: { id: author }, title_contains };
    return ctx.db.query.groups({ where }, info);
  },

  group(parent, { id }, ctx, info) {
    return ctx.db.query.group({ where: { id } }, info);
  }
};

module.exports = { group };
