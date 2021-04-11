import { Request, Response } from "express";

import { Controller } from "../../../../protocols"
import { GetProtocolGruByIdController } from "../controllers/GetProtocolGruByIdController"
import { getGruDB, getUserById } from '../../../../shared/services';

export const makeGetGruByIdController = (req: Request, res: Response) => {
    const controller: Controller = new GetProtocolGruByIdController(getGruDB, getUserById);

    return controller.handle(req, res);
}