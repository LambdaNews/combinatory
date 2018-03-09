import { Router } from 'express';

const router = Router();

router.get('/api/ping', (req, res, next) => {
  res.status(200).send({ message: 'pong' });
});

export default router;
