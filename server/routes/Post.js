import express from 'express';
const postRouter = express.Router();

postRouter.post('/new');
postRouter.get('/:id');

export default postRouter;
