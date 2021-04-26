import Map from '../models/map.js';

export default {
  GameStat: {
    map(parent) {
      console.log('map', parent);
      return Map.findById(parent.map);
    },
  },
  Mutation: {
    addMap: (parent, args) => {
      console.log('mapResolver, addMap', args);
      const newMap = new Map(args);
      return newMap.save();
    }
  }
};
