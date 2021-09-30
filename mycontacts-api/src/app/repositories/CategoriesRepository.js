const db = require('../../database');

class CategoriesRepository {
  async findAll(orderBy) {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const row = await db.query(`
    SELECT * FROM categories ORDER BY name ${direction}
    `);

    return row;
  }

  async create({ name }) {
    const [row] = await db.query(`
    INSERT INTO categories(name)
    VALUES($1)
    RETURNING *
    `, [name]);

    return row;
  }

  async findById(id) {
    const [row] = await db.query(`
    SELECT * FROM categories WHERE id = $1
    `, [id]);

    return row;
  }

  async update(id, { name }) {
    console.log(id, name);

    const [row] = await db.query(`
    UPDATE categories
    SET name = $1
    WHERE id = $2
    RETURNING *
    `, [name, id]);

    return row;
  }
}

module.exports = new CategoriesRepository();
