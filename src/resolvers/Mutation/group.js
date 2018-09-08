const { getUserId } = require("../../utils");

const query = `
  {
    participants {
      id
    }
  }
`;

async function getParticipants(ctx, groupId) {
  const group = await ctx.db.query.group({ where: { id: groupId } }, query);
  if (group === null) {
    throw new Error("Group does not exist.");
  }
  return group.participants.map(participant => ({ id: participant.id }));
}

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
    let participants = await getParticipants(ctx, id);
    console.log("initial participants: ", participants);
    if (participants.includes(userId)) {
      throw new Error("User is already a member of the group.");
    } else {
      participants.push({ id: userId });
    }
    console.log("final participants: ", participants);

    return ctx.db.mutation.updateGroup(
      {
        where: { id },
        data: { participants: { connect: participants } }
      },
      info
    );
  },
  async leaveGroup(parent, { id }, ctx, info) {
    const userId = getUserId(ctx);
    const participants = await getParticipants(ctx, id);
    if (!participants.find(participant => participant.id === userId)) {
      throw new Error(`User not found on group`);
    }

    const newParticipants = participants.filter(
      participant => participant.id !== userId
    );

    console.log("participants: ", participants);

    console.log("newParticipants:", newParticipants);
    return ctx.db.mutation.updateGroup({
      where: { id },
      data: { participants: { connect: newParticipants } }
    });
  },
  async modifyGroup(parent, { input }, ctx, info) {
    console.log("args:", input);
    const { groupId, title, participants } = input;
    const groupExists = await ctx.db.exists.Group({
      id: groupId
    });
    if (!groupExists) {
      throw new Error("Group does not exist");
    }

    return ctx.db.mutation.updateGroup(
      {
        where: { id: groupId },
        data: {
          title,
          participants
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
