import { Request, Response } from "express";
import { Controller, ServiceStatus } from "../../../../protocols";

export class AuthUserController implements Controller{
    constructor(
        private compareEncrypt: Function,
        private generateToken: Function
    ) {};

    async handle(req: Request, res: Response){
        if(!req.body.email)
            return res.status(400).json({ msg: `missing email param`});
        if(!req.body.senha)
            return res.status(400).json({ msg: `missing senha param`});
        
        const compare: ServiceStatus = await this.compareEncrypt(req.body.senha, req.body.email);
        if(!compare.sucess)
            return res.status(400).json({ msg: compare.message });
        
        const token: ServiceStatus = await this.generateToken(req.body.email);
        if(!token.sucess)
            return res.status(400).json({ msg: token.message });
        
        return res.status(200).json({ token: token.body });
    }
}