import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const gameStatSchema = new Schema({
  GameResult: String,
  Agent: String,
});

export default mongoose.model('GameStat', GameStatSchema);
