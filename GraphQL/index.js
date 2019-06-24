const resolvers =  require('./resolvers');
const { prisma } =  require('../prisma/generated/prisma-client');
const { GraphQLServer } =  require('graphql-yoga');

const server = new GraphQLServer({
  typeDefs: './GraphQL/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});
server.start(() => console.log('Server is running on http://localhost:4000'));
