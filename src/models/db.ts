import { Sequelize } from 'sequelize';

const DbHost: any = process.env.DB_HOST;
const DbDialect: any = process.env.DIALECT;
const DbUser: any = process.env.DB_USER;
const DbPass: any = process.env.DB_PASSWORD;
const DbBase: any = process.env.DB_DATABASE;

const DataBese = new Sequelize(
  DbBase,
  DbUser,
  DbPass,
  {
    host: DbHost,
    dialect: DbDialect,
  },
);

DataBese.authenticate()
  .then(() => {
    console.log('👍👍 Conexão com o banco de dados foi estabelecida com sucesso! 👍👍');
  })
  .catch((err) => {
    console.error('👎👎 Erro: Conexão com o banco de dados não realizada:', err);
  });

export default DataBese;
