import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const gameStatSchema = new Schema({
  GameResult: String,
  Agent: String,
  Map: String,
  Kills: String,
  Deaths: String,
  Assist: String,
});

export default mongoose.model('GameStat', GameStatSchema);
