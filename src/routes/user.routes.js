import { Router } from 'express';
import { userController } from '../controllers/UserController';

const userRouter = Router();


userRouter.post("/", userController.store);
userRouter.get("/", userController.index);
userRouter.get("/:id", userController.find);
userRouter.delete("/", userController.destroy);
userRouter.get("/posts/:id", userController.posts);

export { userRouter };