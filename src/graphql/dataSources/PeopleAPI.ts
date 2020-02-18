import { RESTDataSource } from 'apollo-datasource-rest';
import { IResponse } from '../interfaces';

class PeopleAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = `https://swapi.co/api/`;
    }

    public async getPeople() {
        const response = await this.get('/people');

        try{
            if (!response) {
                throw new Error("People Not Found");
            }

            console.log(response)
            /*const people = {
                count:
            }
*/
            /*count": 1,
            "next": null,
                "previous": null,
                "results":*/
            return {
                success: true,
                data: ''
            }
        } catch (e) {
            console.log(e);
        }
    }
}
export default PeopleAPI;
//http https://swapi.co/api/people/1/
