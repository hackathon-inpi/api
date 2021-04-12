import { Request, Response } from "express";

import { Controller } from "../../../../protocols"
import { CreateDemandController } from "../controllers/CreateDemandController"

import { addDemandDB, getUserById, getGruDB } from '../../../../shared/services';

export const makeCreateDemandController = (req: Request, res: Response) => {
    const controller: Controller = new CreateDemandController(getUserById, getGruDB, addDemandDB);

    return controller.handle(req, res);
}