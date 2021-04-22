import GameStat from '../models/gameStat';

export default {
  Query: {
    gamestats: (parent, args) => {
      return GameStat.find();
    },
    angamestat: (parent, args) => {
      return GameStat.findById(args.id);
    }
  },
  Mutation: {
    addGameStat: (parent, args) => {
      console.log('GameStatResolver, addGameStat', args);
      const newGameStat = new GameStat(args);
      return newGameStat.save();
    },
    modifyGameStat: (parent, args) => {
      console.log('GameStatResolver, modifyGameStat', args);
      return GameStat.findByIdAndUpdate(args.id, args);
    },
  }
};
