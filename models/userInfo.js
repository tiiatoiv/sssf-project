import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    userID: User,
    main: String,
    description: String,
});

export default mongoose.model('UserInfo', userInfoSchema);
