import GameStat from '../models/gameStat.js';
import {AuthenticationError} from "apollo-server-errors";

export default {
  Query: {
    gamestats: (parent, args) => {
      return GameStat.find();
    },
    gamestat: (parent, args) => {
      return GameStat.findById(args.id);
    },
    gameStatsByUser: (parent, args) => {
      console.log('GameStatsbyuserID', args);
      return GameStat.find().where('userID').equals(args.id);
    }
  },
  Mutation: {
    addGameStat: (parent, args, {user}) => {

      if (!user) {
        throw new AuthenticationError('You have not logged in')
    }

      console.log('gameStatResolver, addGameStat', args);
      const newGameStat = new GameStat(args);
      return newGameStat.save();
    },
    modifyGameStat: (parent, args) => {
      console.log('gameStatResolver, modifyGameStat', args);
      return GameStat.findByIdAndUpdate(args.id, args);
    },
  }
};
