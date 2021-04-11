import { Request, Response } from "express";
import { Controller } from "../../../../protocols/controller";

export class GenerateGruController implements Controller{
    constructor(
        private addGruDb: Function
    ){}
    handle(req: Request, res: Response){
        const requiredFields = ['id', 'status', 'price', 'idUser', 'barCode'];

        requiredFields.forEach((field: string) => {
            if(!req.body[field]){
                return res.status(400).json({ msg: `missing ${field} param`});
            }
        });

        return res.status(200).json({ msg: 'Hello World'});
    }
}