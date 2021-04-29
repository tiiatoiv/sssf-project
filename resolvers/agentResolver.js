import Agent from '../models/agent.js';

export default {
  GameStat: {
    agent(parent) {
      console.log('agent', parent);
      return Agent.findById(parent.agent);
    },
  },

  Query: {
    agents: (parent, args) => {
      return Agent.find();
    },
    agent: (parent, args) => {
      return Agent.findById(args.id);
    },
  },

  Mutation: {
    addAgent: (parent, args) => {
      console.log('agentResolver, addAgent', args);
      const newAgent = new Agent(args);
      return newAgent.save();
    }
  }
};
