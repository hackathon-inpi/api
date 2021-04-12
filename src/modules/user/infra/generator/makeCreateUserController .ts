import { Request, Response } from "express";

import { Controller } from "../../../../protocols"
import { CreateUserController } from "../controllers/CreateUserController"

import { addUserDB, encrypt } from '../../../../shared/services';

export const makeCreateDemandController = (req: Request, res: Response) => {
    const controller: Controller = new CreateUserController(encrypt, addUserDB);

    return controller.handle(req, res);
}