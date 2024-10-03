import { Router } from 'express';
import Actor from './actor.route.js';
import Auth from './auth.route.js';

const router = Router();

const generalRouters = [
  { path: '/auth', route: Auth },
  { path: '/api/actores', route: Actor },
  { path: '/api/register', route: Actor },
]; 

generalRouters.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
