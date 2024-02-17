
exports.up = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.integer('user_currency').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.string('user_currency', -5).alter();
    })
};
