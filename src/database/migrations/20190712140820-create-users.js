
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', 
    { id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    password_hash: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    }  
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};
