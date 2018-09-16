const { getUserId } = require("../../utils");

const group = {
  groups(parent, args, ctx, info) {
    /*
    const participantsSome = where ? where.participants_some || [] : [];
    */
   const id = getUserId(ctx);

    const where = {
      participants_some: { id }
    };

    return ctx.db.query.groups({ where }, info);
  },

  groupsConnection(
    parent,
    { where, orderBy, skip, before, after, first, last },
    ctx,
    info
  ) {
    /*
    const participantsSome = where ? where.participants_some || [] : [];
    if(participantsSome.AND) {
      participantsSome.AND.push({id});
    } else {
      participantsSome.AND = [{}]
    }
    const myWhere = {
      ...where,
      participants_some: { participantsSome }
    };
    */

    return ctx.db.query.groupsConnection(
      { where, orderBy, skip, before, after, first, last },
      info
    );
  },

  group(parent, { id }, ctx, info) {
    return ctx.db.query.group({ where: { id } }, info);
  }
};

module.exports = { group };
