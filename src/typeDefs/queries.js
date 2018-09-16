const gql = require("graphql-tag");

const queries = gql`
  type Query {
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
    group(id: ID!): Group
    friends: [User!]!
    expense(id: ID!): Expense
    split(id: ID!): Split
    groups(where: GroupWhereInput!): [Group!]
    expenses(where: ExpenseWhereInput!): [Expense!]
    splits(where: SplitWhereInput!): [Split!]
  }
`;

module.exports = queries;
