module.exports = {
    Query: {
        mytables: async (_source, _args, { dataSources }) => {
          return dataSources.mytableAPI.getMyTables();
        }
      },
      Mutation: {
        createMyTable: async (_source, _args, { dataSources }) => {
          return dataSources.mytableAPI.createMyTable(_args.mytable);
        },
        updateMyTable: async (_source, _args, { dataSources }) => {
          return dataSources.mytableAPI.updateMyTable(_args.mytable);
        },
        deleteMyTable: async (_source, _args, { dataSources }) => {
          return dataSources.mytableAPI.deleteMyTable(_args.id);
        }
      }
};
