import bcrypt from 'bcrypt';

import { ServiceStatus } from '../../../protocols';

export const encrypt = async (input: string): Promise<ServiceStatus> => {
    const hash: string = await bcrypt.hash(input, 10);
    
    if(!hash)
        return { sucess: false, message: 'encrypt error' };

    return { sucess: true, message: 'completed encryption', body: hash };
};