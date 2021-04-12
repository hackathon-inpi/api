import Demand from '../../../modules/demand/infra/typeorm/entities/Demand';
import User from '../../../modules/user/infra/typeorm/entities/User';

import { ServiceStatus } from '../../../protocols';

export const getDemandDB = async (id: number, getAll: boolean, user: User): Promise<ServiceStatus> => {
    try{
        if(!getAll){
            const demand = await Demand.findOne({ id: id, user: user });

            if(!demand)
                return { message: 'demand not found', sucess: false };
    
            return { message: 'demand found', sucess: true, body: demand };
        }else{
            const demands = await Demand.find();

            if(!demands)
                return { message: 'demands not found', sucess:  false };
    
            return { message: 'demands found', sucess: true, body: demands };
        }
    }catch(err){
        console.log(err);
        return { message: 'get demand server error', sucess: false };
    }
}