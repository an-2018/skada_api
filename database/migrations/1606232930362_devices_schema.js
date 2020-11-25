'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DevicesSchema extends Schema {
  up () {
    this.create('devices', (table) => {
      table.increments()
      table.string('tag')
      table.string('type')
      table.string('description')
      table.string('comm_status')
      table.string('last_valid_comm')
      table.json('location')
      table.json('specifications')
      table.json('parameters')
      table.timestamps()
    })
  }

  down () {
    this.drop('devices')
  }
}

module.exports = DevicesSchema
