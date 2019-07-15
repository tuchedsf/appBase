import Sequelize from 'sequelize'
import databaseConfig from '../config/database'


class TestConnection{
    constructor(){
    }

    async init(){
        const sequelize = new Sequelize(databaseConfig);
        await sequelize.authenticate().then(() => {
            console.log('Connection with database has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
        sequelize.close();
    }
}

export default new TestConnection();