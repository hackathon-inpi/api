import { Request, Response } from "express";

import { Controller } from "../../../../protocols"
import { GetDemandController } from "../controllers/GetDemandController"
import { getDemandDB, getUserById } from '../../../../shared/services';

export const makeGetGruController = (req: Request, res: Response) => {
    const controller: Controller = new GetDemandController(getDemandDB, getUserById);

    return controller.handle(req, res);
}