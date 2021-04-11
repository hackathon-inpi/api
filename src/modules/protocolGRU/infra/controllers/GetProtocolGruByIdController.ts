import { Request, Response } from "express";
import { Controller, ServiceStatus } from "../../../../protocols";

export class GetProtocolGruByIdController implements Controller{
    constructor(
        private getGruById: Function,
        private getUserById: Function
    ){}
    async handle(req: Request, res: Response){
        if(!req.params.id)
            return res.status(400).json({ msg: `missing id param`});
        if(!req.body.idUser)
            return res.status(400).json({ msg: `missing idUser param`});

        const user: ServiceStatus = await this.getUserById(req.body.idUser);
        if(!user.sucess)
            return res.status(404).json({ msg: user.message });

        const gru: ServiceStatus = await this.getGruById(req.params.id, false, user.body);
        if(!gru.sucess)
            return res.status(404).json({ msg: gru.message });

        return res.status(200).json({ infoGRU: gru, infoUser: user.body });
    }
}