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
   }
   
   extend type Mutation {
    addGameStat(
      gameResult: String!,
      agent: String!
    ): GameStat,
    modifyGameStat(
      id: ID!,
      gameStat: String,
      agent: String
    ): GameStat
   }
`;
