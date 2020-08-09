import express from 'express';

const routes = express.Router();

import ClassController from './controllers/ClassController';
import ConnectionController from './controllers/ConnectionController';

routes.get('/classes', ClassController.index);
routes.post('/classes', ClassController.store);

routes.get('/connections', ConnectionController.index);
routes.post('/connections', ConnectionController.store);

export default routes;