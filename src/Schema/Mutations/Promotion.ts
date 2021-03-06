import { GraphQLID, GraphQLString } from "graphql";
import { PromotionType } from "../TypeDefs/Promotion";
import { MessageType } from "../TypeDefs/Messages";
import { Promotion } from "../../Entities/Promotion";

export const CREATE_PROMOTION = {
  type: PromotionType,
  args: {
    hospitalId: { type: GraphQLString },
    createAt: { type: GraphQLString },
    title: { type: GraphQLString },
    hospitalDetail: { type: GraphQLString },
    couponCode: { type: GraphQLString },
    Url: { type: GraphQLString },
    expiredDate: { type: GraphQLString },
  },
  async resolve(_: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { hospitalId, title, hospitalDetail, couponCode, Url, expiredDate } =
      args;
    const now = Date();
    await Promotion.insert({
      hospitalId,
      userId: context.userId,
      createAt: now,
      title,
      hospitalDetail,
      couponCode,
      Url,
      expiredDate,
    });
    return args;
  },
};
export const DELETE_PROMOTION = {
  type: MessageType,
  args: {
    promotionId: { type: GraphQLID },
  },
  async resolve(_: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const id = args.promotionId;
    await Promotion.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};

export const UPDATE_PROMOTION = {
  type: PromotionType,
  args: {
    promotionId: { type: GraphQLID },
    hospitalId: { type: GraphQLString },
    userId: { type: GraphQLString },
    title: { type: GraphQLString },
    hospitalDetail: { type: GraphQLString },
    Url: { type: GraphQLString },
    expiredDate: { type: GraphQLString },
  },
  async resolve(_: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { promotionId } = args;
    console.log(args);
    await Promotion.update({ promotionId }, { ...args });
    return args;
  },
};
