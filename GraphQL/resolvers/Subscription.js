const Subscription = {
  post: {
    subscribe: async (root, args, { prisma }, info) => {
      return prisma.$subscribe
        .post(args, info);
    },
    resolve: payload => {
      return payload;
    },
  },
};

module.exports = Subscription;
