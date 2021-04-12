import { Request, Response } from "express";
import { Controller, ServiceStatus } from "../../../../protocols";

export class GetDemandController implements Controller{
    constructor(
        private getDemand: Function,
        private getUserById: Function
    ){}
    async handle(req: Request, res: Response){
        if(!req.body.idUser)
            return res.status(400).json({ msg: `missing idUser param`});

        const user: ServiceStatus = await this.getUserById(req.body.idUser);
        if(!user.sucess)
            return res.status(404).json({ msg: user.message });
        
        const demands: ServiceStatus = await this.getDemand(0, true, user.body);
        if(!demands.sucess)
            return res.status(404).json({ msg: demands.message });

        return res.status(200).json({ infoDemands: demands, infoUser: user.body });
    }
}