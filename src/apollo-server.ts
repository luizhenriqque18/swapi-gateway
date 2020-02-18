import { ApolloServer, gql } from 'apollo-server-express';
import {DataSources} from "apollo-server-core/dist/requestPipeline";
import { importSchema } from 'graphql-import';
import resolvers from './graphql/resolvers';
import * as dataSources from './graphql/dataSources';
import {IDataSources} from "./graphql/interfaces";
class Apollo {
    public apollo: ApolloServer;
    
    constructor(){
        this.apolloConfig();
    }

    private apolloConfig(): void {

        this.apollo = new ApolloServer({
            typeDefs: importSchema(`${__dirname}/graphql/schemas/index.graphql`),
            resolvers,
            dataSources: (): DataSources<IDataSources> => {
                return {
                    peopleApi: new dataSources.PeopleAPI()
                }
            }
        });
    }
}

export default new Apollo().apollo;
