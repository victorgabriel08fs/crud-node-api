import { prisma } from '../prisma/client';
class UserUseCases {
    async store({ name, email }) {
        const user = await prisma.user.create({
            data: {
                name, email
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
        const user = await prisma.user.delete({
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

        })

        return posts;
    }
}

export const userUseCases = new UserUseCases();