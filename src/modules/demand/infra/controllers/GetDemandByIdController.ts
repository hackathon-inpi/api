import { Request, Response } from "express";
import { Controller, ServiceStatus } from "../../../../protocols";

export class GetDemandByIdController implements Controller{
    constructor(
        private getDemandById: Function,
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

        const demand: ServiceStatus = await this.getDemandById(req.params.id, false, user.body);
        if(!demand.sucess)
            return res.status(404).json({ msg: demand.message });

        return res.status(200).json({ infoDemand: demand, infoUser: user.body });
    }
}