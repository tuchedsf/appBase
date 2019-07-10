import app from './app';
import sequelize from 'sequelize';

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(process.env.PORT || 3000);
