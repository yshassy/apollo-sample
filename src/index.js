const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const MyTableAPI = require('./datasources/mytable');

const dataSources = () => ({
  mytableAPI: new MyTableAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server
.listen({ port: process.env.PORT || 4001 })
.then(({ url }) => {
  console.log(`🚀 app running at ${url}`)
});