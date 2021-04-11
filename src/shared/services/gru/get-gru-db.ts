import ProtocolGRU from '../../../modules/protocolGRU/infra/typeorm/entities/ProtocolGRU';
import User from '../../../modules/user/infra/typeorm/entities/User';

import { ServiceStatus } from '../../../protocols';

export const getGruDB = async (id: number, getAll: boolean, user: User): Promise<ServiceStatus> => {
    try{
        if(!getAll){
            const gru = await ProtocolGRU.findOne({ id: id, user: user });

            if(!gru)
                return { message: 'protocol GRU not found', sucess:  false };
    
            return { message: 'protocol GRU found', sucess:  true, body: gru };
        }else{
            const GRUs = await ProtocolGRU.find();

            if(!GRUs)
                return { message: 'protocol GRU not found', sucess:  false };
    
            return { message: 'protocol GRU found', sucess:  true, body: GRUs };
        }
    }catch(err){
        console.log(err);
        return { message: 'get GRU server error', sucess:  false };
    }
}