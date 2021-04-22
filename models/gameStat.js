import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const gameStatSchema = new Schema({
  gameResult: String,
  agent: {type: mongoose.Types.ObjectId, ref: 'Agent'},
  map: {type: mongoose.Types.ObjectId, ref: 'Map'},
  kills: String,
  deaths: String,
  assist: String,
});

export default mongoose.model('GameStat', gameStatSchema);
