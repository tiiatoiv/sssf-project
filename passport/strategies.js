import passport from 'passport'
import {Strategy} from 'passport-local'
import bcrypt from 'bcrypt';
import User from '../models/user.js'
import {Strategy as JWTStrategy, ExtractJwt} from 'passport-jwt';
import {checkAuth} from "./authenticate.js";

passport.use(new Strategy(
    async (username, password, done) => {
        try {
            const user = await User.findOne({username});

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return done(null, false, {message: 'Invalid credentials'});
            }

            const strippedUser = user.toObject();
            delete strippedUser.password;

            return done(null, strippedUser, {message: 'Logged in successfully!'});
        } catch (error) {
            return done(error);
        }
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'asd123'
}, async (jwtPayload, done) => {
    try {
        const user = await User.findOne({username: jwtPayload.username});

        if (user) return done(null, user);

        return done(null, false);
    } catch (error) {
        return done(error);
    }
}));

export default passport;