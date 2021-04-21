import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const gameStatSchema = new Schema({
  GameResult: String,
  species : {type: mongoose.Types.ObjectId, ref: 'Species'},
});

export default mongoose.model('GameStat', GameStatSchema);
