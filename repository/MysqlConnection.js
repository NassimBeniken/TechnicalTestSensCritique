import {Sequelize} from "sequelize";

export const MysqlConnection = new Sequelize({
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  username: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME
})

/*export const executeQuery = async ({query, values}) => {
  try {
    const results = await MysqlConnection.query(query, values)
    return results
  } catch (error) {
    console.log(error)
  }
}*/