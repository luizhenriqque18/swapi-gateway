import * as express from 'express';
import server from './apollo-server';

class App {
    public app: any

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        server.applyMiddleware({ app :this.app })
    }

    routes(){
        //this.server.use(router);
    }
}

export default new App().app;