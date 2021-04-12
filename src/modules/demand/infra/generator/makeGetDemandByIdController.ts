import { Request, Response } from "express";

import { Controller } from "../../../../protocols"
import { GetDemandByIdController } from "../controllers/GetDemandByIdController"
import { getDemandDB, getUserById } from '../../../../shared/services';

export const makeGetGruByIdController = (req: Request, res: Response) => {
    const controller: Controller = new GetDemandByIdController(getDemandDB, getUserById);

    return controller.handle(req, res);
}