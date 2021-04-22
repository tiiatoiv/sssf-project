import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mapSchema = new Schema({
  mapName: String,
  gameFeel: String,
});

export default mongoose.model('Map', agentSchema);
