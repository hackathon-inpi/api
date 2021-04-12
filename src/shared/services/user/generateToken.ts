import User from '../../../modules/user/infra/typeorm/entities/User';

import 'dotenv/config';

import jwt from 'jsonwebtoken';

import { ServiceStatus } from '../../../protocols';

export const generateToken = async (email: string): Promise<ServiceStatus> => {
    const user = await User.findOne({ where: { email: email } });

    if(!user)
        return { sucess: false, message: 'user not found' };
    
    const secret = process.env.SECRET_JWT;
    if(!secret)
        return { sucess: false, message: 'internal server error' }

    const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 86400,
    });

    return { sucess: true, message: 'successfully generated token', body: token };
}