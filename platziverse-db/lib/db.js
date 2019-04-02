'use strict'

const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDatabase (config) {
  // "Singleton"
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }

  return sequelize
}
