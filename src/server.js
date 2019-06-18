import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
require('dotenv').config()
const app = express();

app.use(bodyParser.json());
app.use(cors());

import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from 'graphql-tools';

//Imports: GraphQL TypeDefs & Resolvers
import Types from './graphql/typedefs/types';
import Query from './graphql/resolvers/query';
import Mutation from './graphql/resolvers/mutation';
import Subscription from './graphql/resolvers/subscription';

const PORT = process.env.PORT || 5000;

import './database/mongoController';

import ApolloServer from './graphql/schema';

ApolloServer.applyMiddleware({app}); 

app.get('/', (req,res) => {
    res.send("Estoy funcionando!!! ")
})

/* app.listen( PORT, () => {
    console.log(`\n--- Servidor escuchando en el puerto ${PORT} ---`);
}) */

const ws = createServer(app)

ws.listen(PORT, () => {
    console.log(`GraphQL Server is now runing on http://localhost:${PORT}`);

    new SubscriptionServer({
        execute,
        subscribe,
        schema: makeExecutableSchema({typeDefs: Types, resolvers: {Query, Mutation, Subscription}})
    },{
        server: ws,
        path: '/subscriptions'
    });
});