
exports.up = (knex) => {
    return knex.schema.createTable('whatever', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('power')
      table.binary('image')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('whatever')
  }