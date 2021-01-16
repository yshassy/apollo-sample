const { DataSource } = require('apollo-datasource');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres', 'test', 'test', {
  host: 'XX.XX.XX.XX',
  dialect: 'postgres'
});

class MyTable extends Model {}
MyTable.init({
  id: { type: DataTypes.INTEGER, primaryKey: true },
  title: DataTypes.STRING
}, { 
  sequelize,
  modelName: 'mytable',
  timestamps: false,
  underscored: true,
  freezeTableName: true });

class MyTableAPI extends DataSource {

  async getMyTables() {
    const row = await MyTable.findAll();
    return row && row.length
      ? row.map(l => l.dataValues)
      : [];
  }

  async createMyTable(mytable) {
    await MyTable.create({id:mytable.id,title:mytable.title});
    return mytable;
  }

  async updateMyTable(mytable) {
    await MyTable.update({id:mytable.id,title:mytable.title},
      { where : {id: mytable.id}});
    return mytable;
  }

  async deleteMyTable(mytableId) {
    await MyTable.destroy({ where : {id: mytableId}});
    return mytableId;
  }

}
    
module.exports = MyTableAPI;
