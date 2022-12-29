import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/teste', async (req, res) => {
  const user = await User.create({
    name: 'Thawan',
    email: 'thawan@thawan.com',
    password_hash: '12345',
  });

  return res.json(user);
});

export default routes;
