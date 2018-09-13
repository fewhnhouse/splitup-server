const gql = require("graphql-tag");

const inputs = gql`
  input MyUserWhereInput {
    AND: [MyUserWhereInput!]

    OR: [MyUserWhereInput!]

    NOT: [MyUserWhereInput!]
    id: ID

    id_not: ID

    email: String

    email_not: String

    """
    All values that are contained in given list.
    """
    email_in: [String!]

    """
    All values that are not contained in given list.
    """
    email_not_in: [String!]

    """
    All values containing the given string.
    """
    email_contains: String

    """
    All values not containing the given string.
    """
    email_not_contains: String

    """
    All values starting with the given string.
    """
    email_starts_with: String

    """
    All values not starting with the given string.
    """
    email_not_starts_with: String

    """
    All values ending with the given string.
    """
    email_ends_with: String

    """
    All values not ending with the given string.
    """
    email_not_ends_with: String

    name: String

    """
    All values that are not equal to given value.
    """
    name_not: String

    """
    All values that are contained in given list.
    """
    name_in: [String!]

    """
    All values that are not contained in given list.
    """
    name_not_in: [String!]

    """
    All values containing the given string.
    """
    name_contains: String

    """
    All values not containing the given string.
    """
    name_not_contains: String

    """
    All values starting with the given string.
    """
    name_starts_with: String

    """
    All values not starting with the given string.
    """
    name_not_starts_with: String

    """
    All values ending with the given string.
    """
    name_ends_with: String

    """
    All values not ending with the given string.
    """
    name_not_ends_with: String
    avatar: String

    """
    All values not ending with the given string.
    """
    avatar_not_ends_with: String
    friends_every: MyUserWhereInput
    friends_some: MyUserWhereInput
    friends_none: MyUserWhereInput
    friendRequests_every: MyUserWhereInput
    friendRequests_some: MyUserWhereInput
    friendRequests_none: MyUserWhereInput
    groups_every: GroupWhereInput
    groups_some: GroupWhereInput
    groups_none: GroupWhereInput
  }
`;

module.exports = inputs;
