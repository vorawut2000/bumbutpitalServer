import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    appropiatePHQSeverity: { type: GraphQLString },
    permissionPHQSeverity: { type: GraphQLString },
    appropiatePHQSeverityScore: { type: GraphQLString },
    role: { type: GraphQLString },
  }),
  
});
