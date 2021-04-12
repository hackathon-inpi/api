import express from 'express';

import { generateGruRoute } from './modules/protocolGRU/infra/routes/createGruRoute';
import { generateDemandRoute } from './modules/demand/infra/routes/createDemandRoute';
import { generateUserRoute } from './modules/user/infra/routes/createUserRoute';

export const route = express.Router();

generateGruRoute(route);
generateDemandRoute(route);
generateUserRoute(route);