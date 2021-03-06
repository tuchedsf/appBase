# APP Base

AppBase is a API base for building node apis.
This base use Node, Express, Mysql with Sequelize.

## Functionalities

- CRUD USER
- Login with GWT

## Getting Started

- Install node
- Install yarn

- Clone or download this repository and run comands:

```bash
yarn
```

- Configure ESLint:

```bash
yarn eslint --init

? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript) (or other)
? What format do you want your config file to be in? JavaScript
```

- Configure Database:
  This app, use mysql ( yarn add mysql2) but you can use whatever you prefer that is compatible with the Sequelize.

Install the package do you prefer and change de config/database.js.

```javascript
module.exports = {
  dialect: 'mysql', // postgres, sqlite, etc...
  host: 'yourip',
  port: '',
  username: 'yourUser',
  password: 'youruser',
  database: 'yourdatabase',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
```

Initialize sequelize first and run user create migration (pre configured):

```bash
npx sequelize init
npx sequelize db:migrate
```

Ex.: criação da migracao usuario: npx sequelize migration:create --name=create-users

## Components

- Node [Node](https://nodejs.org/en/)
- Nodemon [Nodemon](https://github.com/remy/nodemon)
- Sucrase [Sucrase](https://github.com/alangpierce/sucrase)
- Sequelize [Sequelize](http://docs.sequelizejs.com/)
- Bcrypt [Bcryptjs](https://github.com/dcodeIO/bcrypt.js/)
- JWT [Jwt](https://jwt.io/)

## Versioning

- V.0.0.0 - Version Initial ( node / nodemon / sucrase)
- V.0.0.1 - Configuration Sequelize
- V.0.1.0 - Finishing sequelize config.
- V.0.2.0 - Create migration and model for User
- V.0.3.0 - Route Store for user and bcrypt js to hash password
- V.0.4.0 - Inclusão login via JWT
- V.0.4.1 - Ajuste e Testes Login/Uso JWT/ Signin / Signon

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
