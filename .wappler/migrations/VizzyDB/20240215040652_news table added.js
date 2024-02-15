
exports.up = function(knex) {
  return knex.schema
    .createTable('news', async function (table) {
      table.increments('id');
      table.string('image1');
      table.string('image2');
      table.string('image3');
      table.string('image4');
      table.string('image5');
      table.string('heading');
      table.string('sub_heading');
      table.string('description1');
      table.string('description2');
      table.string('description3');
      table.string('description4');
      table.string('description5');
      table.string('source');
      table.string('source_link');
      table.timestamp('created');
      table.timestamp('modified_on');
      table.integer('created_by');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('news')
};
