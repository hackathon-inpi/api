import express from 'express';

import { generateGruRoute } from './modules/protocolGRU/infra/routes/createGruRoute';

export const route = express.Router();

generateGruRoute(route);