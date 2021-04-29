import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    userID: String,
    main: String,
    description: String,
});

export default mongoose.model('UserInfo', userInfoSchema);
