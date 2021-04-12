import { Router } from 'express';

import { makeCreateDemandController } from '../generator';

export const generateUserRoute = (route: Router) => {
    route.post('/demand', makeCreateDemandController);

    return route;
}