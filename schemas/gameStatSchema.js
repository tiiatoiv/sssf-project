import {gql} from 'apollo-server-express';

export default gql`
   extend type Query {
     gamestats: [GameStat],
     gamestat(id: ID!): GameStat
   }
   
   type GameStat {
      id: ID
      gameResult: String,
      agent: String,
      map: Map,
      kills: String,
      deaths: String,
      assist: String,
   }
   
   extend type Mutation {
    addGameStat(
      gameResult: String!,
      agent: String!
      map: ID!,
      kills: String!,
      deaths: String!,
      assist: String!,
    ): GameStat,
    modifyGameStat(
      id: ID!,
      gameResult: String,
      agent: String,
      map: ID,
      kills: String,
      deaths: String,
      assist: String,
    ): GameStat
   }
`;
