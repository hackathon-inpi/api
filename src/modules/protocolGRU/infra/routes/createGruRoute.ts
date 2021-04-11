import { Router } from 'express';

import { makeCreateGruController, makeGetGruController, makeGetGruByIdController, makePayGruController } from '../generator';

export const generateGruRoute = (route: Router) => {
    route.post('/protocolgru', makeCreateGruController);
    route.put('/protocolgru', makePayGruController);
    route.get('/protocolgru', makeGetGruController);
    route.get('/protocolgru/:id', makeGetGruByIdController);

    return route;
}