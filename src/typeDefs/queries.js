const gql = require("graphql-tag");

const queries = gql`
  type Query {
    me: User
    users(where: MyUserWhereInput!): [User!]
    user(id: ID, email: String): User
    group(id: ID!): Group
    friends: [User!]!
    expense(id: ID!): Expense
    split(id: ID!): Split
    groups(author: ID, title_contains: String): [Group!]!
    expenses(groupid: ID!): [Expense!]!
    splits(expenseId: ID!): [Split!]!
  }
`;

module.exports = queries;
