import {ApolloServer} from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import express from 'express';
import dotenv from 'dotenv';
import connectMongo from './db/db.js';
import {checkAuth} from "./passport/authenticate.js";
import helmet from 'helmet';
import cors from 'cors';
const PORT = process.env.PORT || 3000;

dotenv.config();

(async () => {
  try {

    dotenv.config();
      const con = await connectMongo();
      if (con) {
          console.log('connection to db succesful');
      }
      const server = new ApolloServer({
          typeDefs: schemas,
          resolvers: resolvers,
          context: async ({req, res}) => {
            try {
                const user = await checkAuth(req, res);
                console.log("TÄMÄ POUS", user);
                return {req, res, user};
            } catch (error) {
                console.log('context error:', error);
            }
        }
      });
      const app = express();
      app.use(cors());

    server.applyMiddleware({app});

    app.listen({port: PORT}, () =>
        console.log(
            `🚀 Server ready at port ${PORT}`),
    );
  } catch (e) {
    console.log('server error: ' + e.message);
  }
})();