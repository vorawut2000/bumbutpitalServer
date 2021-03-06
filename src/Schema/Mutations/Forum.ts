import { ForumType } from "./../TypeDefs/Forum";
import { GraphQLID, GraphQLString } from "graphql";
import { Forum } from "../../Entities/Forum";
import { MessageType } from "../TypeDefs/Messages";

export const CREATE_FORUM = {
  type: ForumType,
  args: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    createAt: { type: GraphQLString },
    answer: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { title, description, answer } = args;
    const now = Date();
    await Forum.insert({
      userID: context.userId,
      title,
      description,
      answer,
      createAt: now,
    });
    return args;
  },
};

export const ANSWER_FORUM = {
  type: MessageType,
  args: {
    forumID: { type: GraphQLID },
    answer: { type: GraphQLString },
  },
  async resolve(_: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { forumID , answer } = args;
    const forum = await Forum.findOne({ forumID: forumID });
    if (!forum) {
      throw new Error("No question");
    }
    if (forum) {
      await Forum.update({ forumID },{ staffID: context.userId , answer:answer });
      return { successful: true, message: "ANSWER" };
    } else {
      throw new Error();
    }
  },
};