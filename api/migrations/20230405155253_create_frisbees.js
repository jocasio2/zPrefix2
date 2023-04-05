/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('frisbees', table =>{
    table.increments('id');
    table.string('brand');
    table.string('type');
    table.string('color')
    table.string('description');
    table.string('img')
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('frisbees');
};
