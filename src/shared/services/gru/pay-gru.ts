import ProtocolGRU from '../../../modules/protocolGRU/infra/typeorm/entities/ProtocolGRU';
import User from '../../../modules/user/infra/typeorm/entities/User';

import { ServiceStatus } from '../../../protocols';

export const payGru = async (id: number, user: User): Promise<ServiceStatus> => {
    try{
        const gru = await ProtocolGRU.findOne({ id: id, user: user });

        if(!gru)
            return { message: 'protocol GRU not found', sucess:  false };

        gru.status = "PAGAMENTO REALIZADO";
        gru.save();
        
        return { message: 'GRU payment made successfully', sucess:  true, body: gru };
    }catch(err){
        console.log(err);
        return { message: 'pay GRU server error', sucess:  false };
    }
}