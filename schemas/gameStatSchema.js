import {gql} from 'apollo-server-express';

export default gql`

   extend type Query {
     gamestats: [GameStat],
     gamestat(id: ID!): GameStat
     gameStatsByUser(userID: String!): [GameStat]
   }
   
   type GameStat {
      id: ID,
      userID: String,
      gameResult: String,
      agent: Agent,
      map: Map,
      kills: String,
      deaths: String,
      assist: String,
   }
   
   extend type Mutation {
    deleteGameStat(id: ID!): GameStat,
    addGameStat(
      userID: String!,
      gameResult: String!,
      agent: ID!
      map: ID!,
      kills: String!,
      deaths: String!,
      assist: String!,
    ): GameStat,
    modifyGameStat(
      id: ID!,
      userID: String,
      gameResult: String,
      agent: ID,
      map: ID,
      kills: String,
      deaths: String,
      assist: String,
    ): GameStat
   }
`;
