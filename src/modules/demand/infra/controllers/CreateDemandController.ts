import { Request, Response } from "express";
import { Controller, ServiceStatus } from "../../../../protocols";

export class CreateDemandController implements Controller{
    constructor(
        private getUserById: Function,
        private getGru: Function,
        private addDemandDb: Function
    ){}
    async handle(req: Request, res: Response){
        if(!req.body.name)
            return res.status(400).json({ msg: `missing name param`});
        if(!req.body.type)
            return res.status(400).json({ msg: `missing type param`});
        if(!req.body.status)
            return res.status(400).json({ msg: `missing idGru param`});
        if(!req.body.idUser)
            return res.status(400).json({ msg: `missing idUser param`});

        const user: ServiceStatus = await this.getUserById(req.body.idUser);
        if(!user.sucess)
            return res.status(404).json({ msg: user.message });
        
        const gru: ServiceStatus = await this.getGru(req.body.idGru, false, user.body);
        if(!gru.sucess)
            return res.status(404).json({ msg: gru.message });
        
        const addDemandStatus: ServiceStatus = await this.addDemandDb(req.body.name, req.body.type, user.body, gru.body);
        if(!addDemandStatus.sucess){
            return res.status(409).json({ infoDemand: addDemandStatus.message });
        }

        return res.status(200).json({ infoDemand: addDemandStatus.body, infoUser: user.body, infoGRU: gru.body });
    }
}