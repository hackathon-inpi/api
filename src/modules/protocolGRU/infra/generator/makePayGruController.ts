import { Request, Response } from "express";

import { Controller } from "../../../../protocols"
import { PayGruController } from "../controllers/PayGruController"
import { payGru, getUserById } from '../../../../shared/services';

export const makePayGruController = (req: Request, res: Response) => {
    const controller: Controller = new PayGruController(payGru, getUserById);

    return controller.handle(req, res);
}