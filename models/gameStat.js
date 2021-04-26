import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const gameStatSchema = new Schema({
  gameResult: String,
  agent: String,
  map : {type: mongoose.Types.ObjectId, ref: 'Species'},
  kills: String,
  deaths: String,
  assist: String,
});

export default mongoose.model('GameStat', gameStatSchema);
