const Mutation = {
  createUser: async (root, args, { prisma }, info) => {
    const checkEmail = await prisma.users({
      where: {
        email: args.email,
      }
    });

    if(checkEmail.length > 0) {
      throw new Error('Email already exists!');
    }

    return prisma.createUser(args, info);
  },
  createPost: async (root, {title, userId}, { prisma }, info) => {
    const post = await prisma.createPost({
      title,
      author: {
        connect:{
          id: userId
        }
      }
    }, info);

    return post;
  }
};

module.exports = Mutation;
