import { Router } from 'express';

import { makeCreateDemandController, makeCreateAuthUserController } from '../generator';

export const generateUserRoute = (route: Router) => {
    route.post('/auth/user', makeCreateAuthUserController);
    
    route.post('/user', makeCreateDemandController);

    return route;
}