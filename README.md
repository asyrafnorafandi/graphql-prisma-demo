# GraphQL Server with Prisma Demo Example

This example shows how to implement a **GraphQL server with Prisma**.

## How to use

### 1. Download example & install dependencies

Clone the repository:

```
git clone https://github.com/asyrafnorafandi/graphql-prisma-demo.git
```

Install Node dependencies:

```
cd graphql-prisma-demo
npm install
```

### 2. Setup database docker

To run the example, you need the Docker installed on your machine. Run the following command to setup prisma server & postgres database.

```
docker-compose up -d
```

### 3. Deploy Prisma datamodel

Run the following command to deploy the prisma datamodel located in `prisma/datamodel.prisma`.
```
npm run prisma:setup
```

### 4. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm run start
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

### 5. Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./src/schema.graphql`](./GraphQL/schema.graphql).

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.
