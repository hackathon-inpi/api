import ProtocolGRU from '../../modules/protocolGRU/infra/typeorm/entities/ProtocolGRU';

import User from '../../modules/user/infra/typeorm/entities/User';

import { ServiceStatus } from '../../protocols/service-status';

export const addGruDB = async (id: number, status: string, price: number, user: User, barCode: string): Promise<ServiceStatus> => {
    try{
        const protocolGru = new ProtocolGRU();

        protocolGru.id = id;
        protocolGru.status = status;
        protocolGru.date = new Date();
        protocolGru.price = price;
        protocolGru.user = user;
        protocolGru.barCode = barCode;

        await protocolGru.save();

        return { message: 'user successfully added', sucess:  true };
    }catch(err){
        return { message: 'error adding user', sucess:  false };
    }
}

export default addGruDB;