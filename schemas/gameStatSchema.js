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
      Map: String,
      Kills: String,
      Damage: String,
      Assist: String,
   }
   
   extend type Mutation {
    addGameStat(
      gameResult: String!,
      agent: String!
      Map: String!,
      Kills: String!,
      Damage: String!,
      Assist: String!,
    ): GameStat,
    modifyGameStat(
      id: ID!,
      gameStat: String,
      agent: String,
      Map: String,
      Kills: String,
      Damage: String,
      Assist: String,
    ): GameStat
   }
`;
