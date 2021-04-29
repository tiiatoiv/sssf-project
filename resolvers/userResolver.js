  
'use strict';

import User from '../models/user.js'
import bcrypt from 'bcrypt'
import { login } from '../passport/authenticate.js'
import {AuthenticationError, UserInputError} from "apollo-server-errors";
export default {
    
    Query: {
        user: async (parent, args, {user}) => {
            console.log(user);
            return User.findById(args.id);
        },
        users: (parent, args) => {
            return User.find();
          },
        userbyusername: (parent, args) => {
        console.log('userByUsername', args);
        console.log("TÄMÄ HAKU");
        return User.find().where('username').equals(args.userID);
          },
        login: async(parent, args, {req, res}) => {
            console.log("TOKA");
            req.body = args;
            try {
                const response = await login(req, res);
                console.log("TÄMÄ RESP", response);
                return {
                    id: response.user._id,
                    username: response.user.username,
                    token: response.token
                };
            } catch (error){
                throw new AuthenticationError("Wrong username or password");
            }
        }
    },
    Mutation: {
        register: async (parent,args) => {
            console.log("KOLM");
            try {
                const hash = await bcrypt.hash(args.password, 12);
                const userWithHash = {
                    ...args,
                    password: hash,
                };
                const newUser = new User(userWithHash);
                const result = await newUser.save();
                console.log("TÄMÄ RESP", result);
                return result;
            } catch(err) {
                throw new UserInputError(err.message);
            }
        }
    }
}