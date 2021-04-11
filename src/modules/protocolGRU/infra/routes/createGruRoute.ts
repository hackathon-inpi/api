import { Router } from 'express';

import { makeCreateGruController } from '../generator';

export const generateGruRoute = (route: Router) => {
    return route.post('/protocolgru/create', makeCreateGruController);
}