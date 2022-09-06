import { AppError } from '../errors/AppError';
import { prisma } from '../prisma/client';
class UserUseCases {
    async store({ name, email }) {

        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email
            }
        });

        const user = await prisma.user.create({
            data: {
                name: name, email: email
            }
        });
        return user;

    }

    async index() {
        const users = await prisma.user.findMany({
            include: {
                posts: true
            }
        });

        return users;
    }

    async find(id) {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        return user;
    }

    async destroy(id) {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        await prisma.user.delete({
            where: {
                id
            }
        });

        return { deleted: true };
    }

    async posts(id) {
        const posts = await prisma.post.findMany({
            where: {
                userId: id
            }

        });

        return posts;
    }
}

export const userUseCases = new UserUseCases();