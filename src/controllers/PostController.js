import { postUseCases } from "../useCases/PostUseCases";
class PostController {
    async store(req, res) {
        const { content, userId } = req.body;

        const result = await postUseCases.store({ content, userId });

        return res.status(201).json(result);
    }

    async index(req, res) {
        const result = await postUseCases.index();

        return res.status(200).json(result);
    }

    async find(req, res) {
        const { id } = req.params;

        const result = await postUseCases.find(id);

        return res.status(200).json(result);
    }

    async destroy(req, res) {
        const { id } = req.params;

        const result = await postUseCases.destroy(id);

        return res.status(200).json(result);
    }
}

export const postController = new PostController();