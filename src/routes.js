import { Router } from "express";

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import authMiddleware from './app/middlewares/auth'

const routes = new Router();

routes.get("/", (req, res) => {
  res.json({ message: "hello word" });
});

routes.post('/signin', SessionController.signin);
routes.post('/signon', UserController.store);

routes.use(authMiddleware);
routes.get('/users', UserController.index);
routes.put('/users', UserController.update);


export default routes;
