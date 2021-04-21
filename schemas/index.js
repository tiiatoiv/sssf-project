import animalSchema from './animalSchema.js';
import speciesSchema from './speciesSchema.js';
import categorySchema from './categorySchema.js';
import gameStatSchema from './gameStatSchema';
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
  animalSchema,
  speciesSchema,
  categorySchema,
  gameStatSchema,
];
