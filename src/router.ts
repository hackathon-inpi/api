import express from 'express';

import { generateGruRoute } from './modules/protocolGRU/infra/routes/createGruRoute';
import { generateUserRoute } from './modules/demand/infra/routes/createDemandRoute';

export const route = express.Router();

generateGruRoute(route);
generateUserRoute(route);