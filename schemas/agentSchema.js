import {gql} from 'apollo-server-express';

export default gql`
  type Agent {
    id: ID
    agentName: String,
    agentType: String,
  }

  extend type Query {
    agents: [Agent],
    agent(id: ID!): Agent
  }
  
  extend type Mutation {
    addAgent(
    agentName: String!,
    agentType: String!,
    ): Agent
  }
`;
