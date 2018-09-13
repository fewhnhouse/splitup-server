const gql = require("graphql-tag");

const types = gql`
  type AuthPayload {
    token: String!
    user: User!
  }
`;

module.exports = types;
