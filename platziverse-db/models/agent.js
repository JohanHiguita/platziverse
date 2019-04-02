'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAgentModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('agent', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false

    },
    username: {
      type: Sequelize.STRING,
      allowNUll: false

    },
    name: {
      type: Sequelize.STRING,
      allowNUll: false
    },
    hostname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    pid: {
      type: Sequelize.INTEGER,
      allowNUll: false

    },
    connected: {
      type: Sequelize.BOOLEAN,
      allowNUll: false,
      defaultValue: false
    }

  })
}
