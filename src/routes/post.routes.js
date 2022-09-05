import { Router } from 'express';
import {postController} from '../controllers/PostController';

const postRouter = Router();

postRouter.post("/", postController.store);
postRouter.get("/", postController.index);
postRouter.get("/:id", postController.find);
postRouter.delete("/:id", postController.destroy);

export { postRouter };