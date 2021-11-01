import Sequelize from 'sequelize'
import { sql_db } from '../../_config'

export default new Sequelize(
    sql_db.database,
    sql_db.user,
    sql_db.password,
    {
        host: sql_db.host,
        dialect: sql_db.db,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
)
