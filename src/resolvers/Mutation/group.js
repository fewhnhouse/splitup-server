const { getUserId } = require("../../utils");

const group = {
  async createGroup(parent, { input }, ctx, info) {
    const { title, participants } = input;
    const userId = getUserId(ctx);
    //Author is also participant
    participants.push(userId);
    return ctx.db.mutation.createGroup(
      {
        data: {
          title,
          participants: {
            connect: participants.map(el => {
              return { id: el };
            })
          },
          author: {
            connect: { id: userId }
          }
        }
      },
      info
    );
  },
  async joinGroup(parent, { id }, ctx, info) {
    const userId = getUserId(ctx);

    return ctx.db.mutation.updateGroup(
      {
        where: { id },
        data: { participants: { connect: { id: userId } } }
      },
      info
    );
  },
  async leaveGroup(parent, { id }, ctx, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.updateGroup(
      {
        where: { id },
        data: { participants: { disconnect: { id: userId } } }
      },
      info
    );
  },
  async modifyGroupTitle(parent, { id, title }, ctx, info) {
    const groupExists = await ctx.db.exists.Group({
      id
    });
    if (!groupExists) {
      throw new Error("Group does not exist");
    }

    return ctx.db.mutation.updateGroup(
      {
        where: { id },
        data: {
          title
        }
      },
      info
    );
  },
  async modifyGroupParticipants(parent, { input }, ctx, info) {
    const { add, participants, groupId } = input;
    const groupExists = await ctx.db.exists.Group({
      id: groupId
    });
    if (!groupExists) {
      throw new Error("Group does not exist");
    }

    const mappedParticipants = participants.map(el => ({ id: el }));
    return ctx.db.mutation.updateGroup(
      {
        where: { id },
        data: {
          participants: add
            ? { connect: mappedParticipants }
            : { disconnect: mappedParticipants }
        }
      },
      info
    );
  },
  async deleteGroup(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteGroup({ where: { id } }, info);
  }
};

module.exports = { group };
