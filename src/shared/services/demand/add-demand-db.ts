import Demand from '../../../modules/demand/infra/typeorm/entities/Demand';
import ProtocolGRU from '../../../modules/protocolGRU/infra/typeorm/entities/ProtocolGRU';
import User from '../../../modules/user/infra/typeorm/entities/User';

import { ServiceStatus } from '../../../protocols';

export const addDemandDB = async (name: string, type: string, user: User, gru: ProtocolGRU): Promise<ServiceStatus> => {
    try{
        const demand = new Demand();

        demand.name = name;
        demand.type = type;
        demand.user = user;
        demand.protocolGRU = gru;
        demand.status = 'Protocolação';

        await demand.save();

        const newDemand = await Demand.findOne({ name: name, user: user, protocolGRU: gru });
        if(!newDemand)
            return { message: 'demand was not added to the database', sucess:  false };

        return { message: 'demand successfully added', sucess:  true, body: newDemand };
    }catch(err){
        return { message: 'add demand server error', sucess:  false };
    }
}