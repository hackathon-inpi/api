import User from '../../../modules/user/infra/typeorm/entities/User';

import { ServiceStatus } from '../../../protocols';

export const addUserDB = async (name: string, email: string, hash: string): Promise<ServiceStatus> => {
    try{
        const user = new User();

        user.name = name;
        user.email = email;
        user.senha = hash;
        user.numeroPatentes = 0;
        user.numeroMarcas = 0;
        user.numeroSoftwares = 0;

        await user.save();

        const newUser = await User.findOne({ email: email, senha: hash });
        if(!newUser)
            return { message: 'user was not added to the database', sucess:  false };

        return { message: 'user successfully added', sucess:  true, body: newUser };
    }catch(err){
        return { message: 'add user server error', sucess:  false };
    }
}