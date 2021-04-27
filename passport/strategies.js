import passport from 'passport'
import {Strategy as LocalStrategy} from 'passport-local'
import bcrypt from 'bcrypt';
import User from '../models/user.js'
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await User.findOne({ username });

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return done(null, false, { message: 'Invalid Credentials' });
            }

            const strippedUser = user.toObject();
            delete strippedUser.password;

            return done(null, strippedUser, { message: 'Authentication Successful!' });
        } catch (error) {
            return done(error);
        }
    }
));

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}, async (payload, done) => {
    try {
        const user = await User.findOne({ username: payload.username }).populate('games');

        if (user) return done(null, user);

        return done(null, false);
    } catch (error) {
        return done(error);
    }
}));

export default passport;