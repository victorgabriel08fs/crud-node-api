import { Router } from 'express';
import { postRouter } from './post.routes';
import { userRouter } from './user.routes';

const router = Router();

router.use("/user", userRouter);
router.use("/post", postRouter);

export { router };