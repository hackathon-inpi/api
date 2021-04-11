import { Request, Response } from "express";

import { Controller } from "../../../../protocols"
import { GetProtocolGruController } from "../controllers/GetProtocolGruController"
import { getGruDB, getUserById } from '../../../../shared/services';

export const makeGetGruController = (req: Request, res: Response) => {
    const controller: Controller = new GetProtocolGruController(getGruDB, getUserById);

    return controller.handle(req, res);
}