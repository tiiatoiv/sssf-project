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
      console.log("TÄMÄ HAKU");
      return GameStat.find().where('userID').equals(args.userID);
    }
  },
  Mutation: {
    addGameStat: (parent, args, {user}) => {
      console.log("TÄMÄ UUSI", user, args);
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
