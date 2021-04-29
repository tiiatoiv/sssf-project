import UserInfo from '../models/userInfo.js';
import {AuthenticationError} from "apollo-server-errors";

export default {
  Query: {
    userinfos: (parent, args) => {
      return UserInfo.find();
    },
    userinfo: (parent, args) => {
      return UserInfo.findById(args.id);
    },
    userinfobyuserid: (parent, args) => {
      console.log('GameStatsbyuserID', args);
      console.log("TÄMÄ HAKU");
      return UserInfo.find().where('userID').equals(args.userID);
    }
  },
  Mutation: {
    addUserInfo: (parent, args, {user}) => {
      console.log("TÄMÄ UUSI", user, args);
      if (!user) {
        throw new AuthenticationError('You have not logged in')
    }

      console.log('gameStatResolver, addGameStat', args);
      const newUserInfo = new GameStat(args);
      return newUserInfo.save();
    },
    modifyUserInfo: (parent, args) => {
      console.log('gameStatResolver, modifyGameStat', args);
      return UserInfo.findByIdAndUpdate(args.id, args);
    },
  }
};
