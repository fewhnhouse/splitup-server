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

  input CreateLinkedExpenseInput {
    groupId: ID!
    title: String!
    participants: [ID!]!
    description: String!
    currency: Currency!
    amount: Float!
    #splits: [Split!]!
  }


  input CreateExpenseInput {
    title: String!
    participants: [ID!]!
    description: String!
    currency: Currency!
    amount: Float!
    #splits: [Split!]!
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
