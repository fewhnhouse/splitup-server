const gql = require("graphql-tag");

const inputs = gql`
  input CreateGroupInput {
    title: String!
    description: String
    participants: [ID!]!
  }

  input AddGroupParticipantsInput {
    groupId: ID!
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
`;

module.exports = inputs;
