import { GraphQLFloat, GraphQLID, GraphQLInt, GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";
import { userInfo } from "os";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Users.find();
  },
};

export const GET_USER = {
  type: new GraphQLList(UserType),
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any, context: any) {
    // if (!context.isAuth) {
    //   throw new Error("Unauthenticated");
    // }
    const user = await Users.findByIds(args.id);
    if (user) {
      return user;
    } else {
      throw new Error("Post not found");
    }
  },
};

export const GET_CURENT_USER = {
  type: new GraphQLList(UserType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Users.find({where:{id:context.userId}});
  },
};

export const COUNT_USER = {
  type: GraphQLInt,
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const countUser = await Users.count({where:{role: null}})
    return countUser
  }
};

export const TOTAL_PHQ9 = { 
  type: GraphQLFloat,
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const countUser = await Users.count({where:{role: null}})
    const phq = await Users.createQueryBuilder().select("SUM(appropiatePHQSeverityScore)","sum").getRawOne();
    console.log(phq.sum)
    return phq.sum/countUser
  }
}