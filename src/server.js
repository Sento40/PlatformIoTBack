import express from 'express';
require('dotenv').config()
const app = express();

/* import { execute, suscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from 'graphql-tools'; */

const PORT = process.env.PORT || 5000;

import './database/mongoController';

/* import ApolloServer from './graphql/schema';
import { Types } from 'mongoose';

ApolloServer.applyMiddleware({app}); */

app.get('/', (req,res) => {
    res.send("Estoy funcionando!!! ")
})

app.listen( PORT, () => {
    console.log(`\n--- Servidor escuchando en el puerto ${PORT} ---`);
})

/* 
const ws = createServer(app)

ws.listen(PORT, () => {
    console.log(`GraphQL Server is now runing on httP://localhost:${PORT}`);

    new SubscriptionServer({
        execute,
        subscribe,
        schema: makeExecutableSchema({typeDefs: Types, resolvers: {Query, Mutation, Suscrition}})
    }, {
        server: ws,
        path: '/suscriptions'
    });
}); */