const Query = {
  users: async (root, args, { prisma }, info) => {
    return prisma.users(args, info);
  },
  posts: async (root, args, { prisma }, info) => {
    return prisma.posts(args,info);
  },
};

module.exports = Query;
