import { Request, Response } from "express";
import { Controller, ServiceStatus } from "../../../../protocols";

export class GenerateGruController implements Controller{
    constructor(
        private addGruDb: Function,
        private getUserById: Function
    ){}
    async handle(req: Request, res: Response){
        if(!req.body.idUser)
            return res.status(400).json({ msg: `missing idUser param`});

        const user: ServiceStatus = await this.getUserById(req.body.idUser);
        if(!user.sucess)
            return res.status(404).json({ msg: user.message });
        
        const addGruStatus: ServiceStatus = await this.addGruDb(user.body);
        if(!addGruStatus.sucess){
            return res.status(409).json({ msg: addGruStatus.message });
        }

        return res.status(200).json({ infoGRU: addGruStatus, infoUser: user.body });
    }
}