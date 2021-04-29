import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const agentSchema = new Schema({
  agentName: String,
  agentType: String,
});

export default mongoose.model('Agent', agentSchema);
