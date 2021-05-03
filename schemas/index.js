import gameStatSchema from './gameStatSchema.js';
import userSchema from './userSchema.js';
import mapSchema from './mapSchema.js';
import userInfoSchema from './userInfoSchema.js';
import agentSchema from './agentSchema.js';
import {gql} from 'apollo-server-express';

const linkSchema = gql`
   type Query {
     _: Boolean
   }
   type Mutation {
     _: Boolean
   }
`;

export default [
  linkSchema,
  gameStatSchema,
  mapSchema,
  userSchema,
  userInfoSchema,
  agentSchema,
];
