const { gql } = require('apollo-server');

const typeDefs = gql`
  type MyTable {
    id: Int
    title: String
  }

  input MyTableInput {
    id: Int
    title: String
  }

  type Query {
    mytables: [MyTable]
  }

  type Mutation {
    createMyTable(mytable: MyTableInput!): MyTable!
    updateMyTable(mytable: MyTableInput!): MyTable!
    deleteMyTable(id: Int!): Int
  }

`;

module.exports = typeDefs;
