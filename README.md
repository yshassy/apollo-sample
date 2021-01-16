# GraphQL sample powered by Apollo Server and Sequelize
This repository is a GraphQL Server sample. You can select, insert, update,delete to your table in PostgreSQL through GraphQL.

## Installation

Connect to your PostgreSQL database and create a table.

```
CREATE TABLE test.mytable (
	id int4 NOT NULL,
	title varchar NULL,
	CONSTRAINT pk_mytable PRIMARY KEY (id)
);
```

Change connection string to your own environment.  

```
const sequelize = new Sequelize('postgres', 'test', 'test', {
  host: 'XX.XX.XX.XX',
  dialect: 'postgres'
});
```

Install dependencies.

```
npm install
```

Start local server

```
npm start
```
## Test Queries and Mutations

```
query {
  mytables {
    id
    title
   }
}

mutation {
  createMyTable(mytable:{id:1,title:"Title1"}){
    id
    title
   }
}

mutation {
  updateMyTable(mytable:{id:1,title:"Title1 is updated!"}){
    id
    title
   }
}

mutation {
  deleteMyTable(id:1)
}
```