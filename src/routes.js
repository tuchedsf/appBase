import { Router } from "express";

import userController from './app/controllers/UserController'

const routes = new Router();

routes.get("/", (req, res) => {
  res.json({ message: "hello word" });
});

routes.get('/users', userController.list);
routes.post('/users', userController.store);

export default routes;
