const { getUserId } = require("../../utils");

const group = {
  async createGroup(parent, { input }, ctx, info) {
    const { title, participants, description } = input;
    const userId = getUserId(ctx);
    //Author is also participant
    participants.push(userId);
    return ctx.db.mutation.createGroup(
      {
        data: {
          title,
          description,
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
  async editGroup(parent, { id, title, description }, ctx, info) {
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
          title: title !== "" ? title : undefined,
          description: description !== "" ? description : undefined
        }
      },
      info
    );
  },
  async addGroupParticipant(parent, { groupId, userId }, ctx, info) {
    return ctx.db.mutation.updateGroup({
      where: { id: groupId },
      data: {
        participants: { connect: { id: userId } }
      }
    });
  },
  async removeGroupParticipant(parent, { groupId, userId }, ctx, info) {
    return ctx.db.mutation.updateGroup({
      where: { id: groupId },
      data: {
        participants: { disconnect: { id: userId } }
      }
    });
  },
  async deleteGroup(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteGroup({ where: { id } }, info);
  }
};

module.exports = { group };
