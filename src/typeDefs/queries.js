const gql = require("graphql-tag");

const queries = gql`
  type Query {
    # USERS
    me: User
    users(where: MyUserWhereInput!): [User!]
    usersConnection(
      where: MyUserWhereInput
      orderBy: MyUserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): UserConnection!
    user(id: ID, email: String): User
    friends: [User!]!

    # GROUPS
    groups: [Group!]
    groupsConnection(
      where: GroupWhereInput
      orderBy: MyGroupOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): GroupConnection!
    group(id: ID!): Group

    # EXPENSES
    expenses(where: ExpenseWhereInput!): [Expense!]
    expense(id: ID!): Expense

    # SPLITS
    splits(where: SplitWhereInput!): [Split!]
    split(id: ID!): Split
  }
`;

module.exports = queries;
