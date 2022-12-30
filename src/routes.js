import { Router } from 'express';

import authMiddlewares from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Todas as rotas abaixo desse middleware presica estar autenticado
routes.use(authMiddlewares);

routes.put('/users', authMiddlewares, UserController.update);

export default routes;
