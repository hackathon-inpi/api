import User from "../../../modules/user/infra/typeorm/entities/User";
import { ServiceStatus } from "../../../protocols";

export const getUserById = async (id: number): Promise<ServiceStatus> => {
    try{
        const user = await User.findOne({ id: id });

        if(!user)
            return { message: 'user not found', sucess: false };

        return { message: 'user found', sucess: true, body: user };
    }catch(err){
        return { message: 'get user server error', sucess: false };
    }
}