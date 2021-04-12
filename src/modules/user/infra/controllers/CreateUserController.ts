import { Request, Response } from "express";
import { Controller, ServiceStatus } from "../../../../protocols";

export class CreateUserController implements Controller{
    constructor(
        private encrypt: Function,
        private addUserDb: Function
    ){};

    async handle(req: Request, res: Response){
        if(!req.body.name)
            return res.status(400).json({ msg: `missing name param`});
        if(!req.body.email)
            return res.status(400).json({ msg: `missing email param`});
        if(!req.body.senha)
            return res.status(400).json({ msg: `missing senha param`});
        
        const hash: ServiceStatus = await this.encrypt(req.body.senha);
        if(!hash.sucess)
            return res.status(401).json({ msg: hash.message });
        
        const user: ServiceStatus = await this.addUserDb(req.body.name, req.body.email, hash.body);
        if(!user.sucess)
            return res.status(401).json({ msg: user.message });
        
        return res.status(200).json({ user: {
            id: user.body.id,
            name: user.body.name,
            email: user.body.email
        } });
    }
}