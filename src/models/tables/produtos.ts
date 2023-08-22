import { DataTypes } from 'sequelize';
import  DataBese from '../db';


export const Produt: any = DataBese.define(
  'produtos',
  {
    //nome da tabela a ser conectada
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: DataTypes.STRING,
    value: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { freezeTableName: true },
); // função para conectar tabela ja criada



