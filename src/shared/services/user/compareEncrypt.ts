import User from '../../../modules/user/infra/typeorm/entities/User';

import bcrypt from 'bcrypt';

import { ServiceStatus } from '../../../protocols';

export const compareEncrypt = async (senha: string, email: string): Promise<ServiceStatus> => {
    const user = await User.findOne({ where: { email: email } });

    if(!user)
        return { sucess: false, message: 'user not found' };
    
    const compare = await bcrypt.compare(senha, user.senha);
    if(!compare)
        return { sucess: false, message: 'negative comparison' };

    return { sucess: true, message: 'positive comparison', body: compare };
};