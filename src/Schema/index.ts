import { buildSchema, GraphQLObjectType, GraphQLSchema } from "graphql";
import { COUNT_USER, GET_ALL_USERS, GET_CURENT_USER, GET_ONLY_USERNAME, GET_USER } from "./Queries/User";
import {
  ADD_PHQSCORE,
  DELETE_USER,
  EDIT_PROFILE,

  PermissionPHQ9,

  STAFF_LOGIN,

  UPDATE_PASSWORD,
  USER_LOGIN,

  /* USER_PROFILE ,*/ USER_REGISTER,
} from "./Mutations/User";
import { COUNT_CONTENT, GET_ALL_CONTENT, GET_CONTENT, GET_SMART_CONTENT, GET_SMART_CONTENT_DEPRESSION, GET_SMART_CONTENT_HEALTH, GET_SMART_CONTENT_Mild_Depression, GET_SMART_CONTENT_Minimal_Depression, GET_SMART_CONTENT_Moderately_severe_Depression, GET_SMART_CONTENT_Moderate_Depression, GET_SMART_CONTENT_Severe_Depression } from "./Queries/Content";
import { GET_ALL_Hospital, GET_HOSPITAL } from "./Queries/Hospital";
import { GET_ALL_PROMOTION, GET_CURRENT_PROMOTION, GET_PROMOTIONLOG, GET_PROMOTION } from "./Queries/Promotion";
import { GET_ALL_Video, GET_SMART_VIDEO, GET_SMART_VIDEO_DEPRESSION, GET_SMART_VIDEO_HEALTH, GET_SMART_VIDEO_Minimal_Depression, GET_SMART_VIDEO_Mild_Depression, GET_SMART_VIDEO_Moderate_Depression, GET_SMART_VIDEO_Moderately_severe_Depression, GET_SMART_VIDEO_Severe_Depression, COUNT_VIDEO } from "./Queries/Video";
import { CREATE_CONTENT, DELETE_CONTENT, UPDATE_CONTENT } from "./Mutations/Content";
import { CREATE_Hospital, DELETE_Hospital, UPDATE_HOSPITAL } from "./Mutations/Hospital";
import { CREATE_PROMOTION, DELETE_PROMOTION, UPDATE_PROMOTION,  } from "./Mutations/Promotion";
import { CREATE_Video, DELETE_Video, UPDATE_VIDEO } from "./Mutations/Video";
import { COUNT_FORUM, GET_ALL_FORUM, GET_CURENT_FORUM, GET_FORUM } from "./Queries/Forum";
import { GET_VIDEO } from "./Queries/Video";
import { ANSWER_FORUM, CREATE_FORUM } from "./Mutations/Forum";
import { KeepPromotion } from "./Mutations/PromotionLog";
import { ADD_PHQ9Log } from "./Mutations/PHQ9Log";
import { GET_CURENT_PHQ9Log } from "./Queries/PHQ9Log";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getCurrentUser: GET_CURENT_USER,
    getUser: GET_USER,
    countUser: COUNT_USER,
    getAllContent: GET_ALL_CONTENT,
    getContent: GET_CONTENT,
    countContent: COUNT_CONTENT,
    getAllHospital: GET_ALL_Hospital,
    getHospital: GET_HOSPITAL,
    getAllPromotion: GET_ALL_PROMOTION,
    getPromotion: GET_PROMOTION,
    getAllVideo: GET_ALL_Video,
    getVideo: GET_VIDEO,
    countVideo: COUNT_VIDEO,
    getAllForum: GET_ALL_FORUM,
    getForum: GET_FORUM,
    countForum: COUNT_FORUM,
    getSmartContent: GET_SMART_CONTENT,
    getSmartVideo: GET_SMART_VIDEO,
    getSmartVideoDepression: GET_SMART_VIDEO_DEPRESSION,
    getSmartVideoHealth: GET_SMART_VIDEO_HEALTH,
    getSmartContentHealth: GET_SMART_CONTENT_HEALTH,
    getSmartContentDepression: GET_SMART_CONTENT_DEPRESSION,
    getcurrentForum: GET_CURENT_FORUM,
    getMinimalContent: GET_SMART_CONTENT_Minimal_Depression,
    getMildContent: GET_SMART_CONTENT_Mild_Depression,
    getModerateContent: GET_SMART_CONTENT_Moderate_Depression,
    getModeratelySeverContent: GET_SMART_CONTENT_Moderately_severe_Depression,
    getSevereContent: GET_SMART_CONTENT_Severe_Depression,
    getMinimalVideo: GET_SMART_VIDEO_Minimal_Depression,
    getMildVideo: GET_SMART_VIDEO_Mild_Depression,
    getModerateVideo: GET_SMART_VIDEO_Moderate_Depression,
    getModeratelySeverVideo: GET_SMART_VIDEO_Moderately_severe_Depression,
    getSevereVideo: GET_SMART_VIDEO_Severe_Depression,
    getCurrentPromotion: GET_CURRENT_PROMOTION,
    getPromotionLog: GET_PROMOTIONLOG,
    getPHQ9Log: GET_CURENT_PHQ9Log,
    onlyusername: GET_ONLY_USERNAME
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
    addPHQScore: ADD_PHQSCORE,
    userLogin: USER_LOGIN,
    staffLogin: STAFF_LOGIN,
    userRegister: USER_REGISTER,
    createContent: CREATE_CONTENT,
    deleteContent: DELETE_CONTENT,
    updateContent: UPDATE_CONTENT,
    createHospital: CREATE_Hospital,
    deleteHospital: DELETE_Hospital,
    updateHospital: UPDATE_HOSPITAL,
    createPromotion: CREATE_PROMOTION,
    deletePromotion: DELETE_PROMOTION,
    updatePromotion: UPDATE_PROMOTION,
    deleteVideo: DELETE_Video,
    createVideo: CREATE_Video,
    updateVideo: UPDATE_VIDEO,
    createForum: CREATE_FORUM,
    answerForum: ANSWER_FORUM,
    permissionphq9: PermissionPHQ9,
    keepPromotion: KeepPromotion,
    editprofile: EDIT_PROFILE,
    addCurrentPHQ9Log: ADD_PHQ9Log
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
