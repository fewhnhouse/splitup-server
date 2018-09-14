const gql = require("graphql-tag");

const mutations = gql`
  type Mutation {
    signup(email: String!, password: String!, name: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    addFriend(id: ID!): User!
    addAvatar(file: Upload!): User!
    createFriendRequest(id: ID!): User!
    removeFriend(id: ID!): User!

    createGroup(input: CreateGroupInput!): Group!
    editGroup(id: ID!, title: String!, description: String): Group!
    addGroupParticipants(input: AddGroupParticipantsInput!): Group!
    removeGroupParticipant(groupId: ID!, userId: ID!): Group!
    joinGroup(id: ID!): Group!
    leaveGroup(id: ID!): Group!
    deleteGroup(id: ID!): Group!

    createExpense(input: CreateExpenseInput!): Expense!
    deleteExpense(id: ID!): Expense!
    modifyExpense(input: ModifyExpenseInput!): Expense!

    createSplit(input: CreateSplitInput!): Split!
    modifySplit(input: ModifySplitInput!): Split!
  }
`;

module.exports = mutations;
