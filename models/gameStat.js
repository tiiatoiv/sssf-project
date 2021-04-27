import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const gameStatSchema = new Schema({
  userID: String,
  gameResult: String,
  agent: String,
  map : {type: mongoose.Types.ObjectId, ref: 'Map'},
  kills: String,
  deaths: String,
  assist: String,
});

export default mongoose.model('GameStat', gameStatSchema);
