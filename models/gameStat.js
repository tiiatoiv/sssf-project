import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const gameStatSchema = new Schema({
  gameResult: String,
  agent: String,
  map: String,
  kills: String,
  deaths: String,
  assist: String,
});

export default mongoose.model('GameStat', gameStatSchema);
