import { Router } from 'express';

import { makeCreateDemandController, makeGetGruController, makeGetGruByIdController } from '../generator';

export const generateDemandRoute = (route: Router) => {
    route.post('/demand', makeCreateDemandController);
    route.get('/demand', makeGetGruController);
    route.get('/demand/:id', makeGetGruByIdController);

    return route;
}