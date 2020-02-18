import { IResolverContext, IResponse } from '../../interfaces';
import { CustomError } from '../../errors';

export const getPeople = async (_: any, { pesqProduto }, { dataSources }: IResolverContext): Promise<any> => {

    const people: IResponse = await dataSources.peopleAPI.getPeople();

    if (!people.success) {
        throw new CustomError(people, 'users_not_found');
    }

    return people.data;
};
