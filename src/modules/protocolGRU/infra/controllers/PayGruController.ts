import { Request, Response } from "express";
import { Controller, ServiceStatus } from "../../../../protocols";

export class PayGruController implements Controller{
    constructor(
        private payGru: Function,
        private getUserById: Function
    ){}
    async handle(req: Request, res: Response){
        if(!req.body.id)
            return res.status(400).json({ msg: `missing id param`});
        if(!req.body.idUser)
            return res.status(400).json({ msg: `missing idUser param`});

        const user: ServiceStatus = await this.getUserById(req.body.idUser);
        if(!user.sucess)
            return res.status(404).json({ msg: user.message });
        
        const gru: ServiceStatus = await this.payGru(req.body.id, user.body);
        if(!gru.sucess)
            return res.status(404).json({ msg: gru.message });

        return res.status(200).json({ infoGRU: gru, infoUser: user.body });
    }
}