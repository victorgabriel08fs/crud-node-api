import { prisma } from "../prisma/client";

class PostUseCases {
    async store({ content, userId }) {
        const post = await prisma.post.create({
            data: {
                content, userId
            }
        });

        return post;
    }

    async index() {
        const posts = await prisma.post.findMany({
            include: {
                author: true
            }
        });

        return posts;
    }

    async find(id) {
        const post = await prisma.post.findUnique({
            where: {
                id
            }, include: {
                author: true
            }
        });

        return post;
    }

    async destroy(id) {
        const post = await prisma.post.delete({
            where: {
                id
            }
        });

        return { deleted: true };
    }
}

export const postUseCases = new PostUseCases();