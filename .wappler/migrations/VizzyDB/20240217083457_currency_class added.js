
exports.up = function(knex) {
  return knex.schema
    .table('currency_list', async function (table) {
      table.string('currency_class');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('currency_list', async function (table) {
      table.dropColumn('currency_class');
    })
};
