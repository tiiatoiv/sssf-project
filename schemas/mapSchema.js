import {gql} from 'apollo-server-express';

export default gql`
  type Map {
    id: ID
    mapName: String
  }
  
  extend type Mutation {
    addMap(
    mapName: String!,
    ): Map
  }
`;
