const gql = require("graphql-tag");

const first = gql`
  type Query {
    me: User
    users(
      name_contains: String
      email: String
      includeFriends: Boolean!
    ): [User!]
    users2(where: UserWhereInput!): [User!]
    user(email: String!): User
    group(id: ID!): Group
    friends: [User!]!
    expense(id: ID!): Expense
    split(id: ID!): Split
    groups(author: ID, title_contains: String): [Group!]!
    expenses(groupid: ID!): [Expense!]!
    splits(expenseId: ID!): [Split!]!
  }

  type Mutation {
    signup(email: String!, password: String!, name: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    addFriend(id: ID!): User!
    addAvatar(file: Upload!): User!
    createFriendRequest(id: ID!): User!
    removeFriend(id: ID!): User!

    createGroup(input: CreateGroupInput!): Group!
    modifyGroupTitle(id: ID!, title: String!): Group!
    addGroupParticipant(groupId: ID!, userId: ID!): Group!
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

  input CreateGroupInput {
    title: String!
    description: String
    participants: [ID!]!
  }

  input ModifyGroupParticipantsInput {
    groupId: ID!
    add: Boolean!
    participants: [ID!]!
  }

  input CreateExpenseInput {
    groupId: ID!
    title: String!
  }

  input ModifyExpenseInput {
    title: String!
    expenseId: ID!
  }

  input CreateSplitInput {
    amount: Int!
    expenseId: ID!
  }

  input ModifySplitInput {
    amount: Int!
    splitId: ID!
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;

module.exports = first;
