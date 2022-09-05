import { userUseCases } from "../useCases/UserUseCases";

class UserController {
    async store(req, res) {
        const { name, email } = req.body;
        const result = await userUseCases.store({ name, email });

        return res.status(201).json(result);
    }

    async index(req, res) {
        const result = await userUseCases.index();

        return res.status(200).json(result);
    }

    async find(req, res) {
        const { id } = req.params;

        const result = await userUseCases.find(id);

        return res.status(200).json(result);
    }

    async destroy(req, res) {
        const { id } = req.body;

        const result = await userUseCases.destroy(id);

        return res.status(200).json(result);
    }

    async posts(req, res) {
        const { id } = req.params;

        const result = await userUseCases.posts(id);

        return res.status(200).json(result);
    }
}

export const userController = new UserController();