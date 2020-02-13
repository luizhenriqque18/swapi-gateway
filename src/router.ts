import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';

import schema from './graphql/schema';

class Router {
    public route = express.Router();
    constructor(){
        this.routes();
    }

    public routes(): void {
        this.route.use('/graphql', graphqlHTTP({
            schema: schema,
            graphiql: process.env.NODE_ENV === 'development'
        }));
    }
}

export default new Router().route;