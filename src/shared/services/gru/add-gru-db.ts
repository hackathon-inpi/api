import ProtocolGRU from '../../../modules/protocolGRU/infra/typeorm/entities/ProtocolGRU';
import User from '../../../modules/user/infra/typeorm/entities/User';

import { ServiceStatus } from '../../../protocols';

export const addGruDB = async (user: User): Promise<ServiceStatus> => {
    try{
        const min = Math.ceil(100000000000);
        const max = Math.floor(999999999999);
        const barCode = `${Math.floor(Math.random() * (max - min)) + min}`;
        const date = new Date();

        const protocolGru = new ProtocolGRU();

        protocolGru.status = "PAGAMENTO NÃO EFETUADO";
        protocolGru.date = date;
        protocolGru.price = 142.00;
        protocolGru.user = user;
        protocolGru.barCode = barCode;

        await protocolGru.save();

        const newGru = await ProtocolGRU.findOne({ date: date, user: user, barCode: barCode });
        if(!newGru)
            return { message: 'protocol GRU was not added to the database', sucess:  false };

        return { message: 'protocol GRU successfully added', sucess:  true, body: newGru };
    }catch(err){
        return { message: 'add GRU server error', sucess:  false };
    }
}