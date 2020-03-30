// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    version: '5.7',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Madone59',
      database : 'react'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'mysql',
    version: '5.7',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Madone59',
      database : 'react'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    version: '8.0.17',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Madone59',
      database : 'react'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
