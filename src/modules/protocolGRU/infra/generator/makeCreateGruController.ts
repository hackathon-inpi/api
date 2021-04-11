import { Request, Response } from "express";

import { Controller } from "../../../../protocols"
import { GenerateGruController } from "../controllers/GenerateGruController"
import { addGruDB, getUserById } from '../../../../shared/services';

export const makeCreateGruController = (req: Request, res: Response) => {
    const controller: Controller = new GenerateGruController(addGruDB, getUserById);

    return controller.handle(req, res);
}