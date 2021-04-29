import {gql} from 'apollo-server-express';

export default gql`

   extend type Query {
     userinfos: [UserInfo],
     userinfo(id: ID!): UserInfo
     userinfobyuserid(userID: String!): [UserInfo]
   }
   
   type UserInfo {
      id: ID,
      userID: String,
      main: String,
      description: String,
   }
   
   extend type Mutation {
    addUserInfo(
        userID: String,
        main: String,
        description: String,
    ): UserInfo,
    modifyUserInfo(
      id: ID!,
      userID: String,
      main: String,
      description: String,
    ): UserInfo
   }
`;
