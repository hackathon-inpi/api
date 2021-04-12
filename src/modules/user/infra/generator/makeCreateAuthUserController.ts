import { Request, Response } from "express";

import { Controller } from "../../../../protocols"
import { AuthUserController } from "../controllers/AuthUserController"

import { compareEncrypt, generateToken } from '../../../../shared/services';

export const makeCreateAuthUserController = (req: Request, res: Response) => {
    const controller: Controller = new AuthUserController(compareEncrypt, generateToken);

    return controller.handle(req, res);
}