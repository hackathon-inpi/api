import { Request, Response } from "express";

import { Controller } from "../../../../protocols/controller"
import { GenerateGruController } from "../controllers/CreateGruController"
import { addGruDB } from '../../../../shared/services/add-gru-db';

export const makeCreateGruController = (req: Request, res: Response) => {
    const controller: Controller = new GenerateGruController(addGruDB);

    return controller.handle(req, res);
}