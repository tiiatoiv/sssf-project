import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const animalSchema = new Schema({
  agentName: String,
  playType: String,
});

export default mongoose.model('Agent', agentSchema);
