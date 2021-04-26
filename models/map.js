import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mapSchema = new Schema({
  mapName: String
});

export default mongoose.model('Map', mapSchema);

