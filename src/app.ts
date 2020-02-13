import * as express from 'express';
import router from './router';

class App {
    public server: any

    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(router);
    }
}

export default new App().server;