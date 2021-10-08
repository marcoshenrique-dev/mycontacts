/* eslint-disable max-len */
const db = require('../../database');

class ContactRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`
     SELECT contacts.*, categories.name AS category_name
     FROM contacts
     LEFT JOIN categories ON categories.id = contacts.category_id
     ORDER BY contacts.name ${direction}
     `);

    // categories.name AS category_name serve para apenas nessa query mudar o nome da propriedade

    /*
      INNER JOIN -> retorna apenas a interseção dos valores
      LEFT JOIN -> retorna apenas os registros da interseção mas também os que não estão (no caso a tabela das esquerda)
      RIGHT JOIN -> retorna apenas os registros da interseção mas também os que não estão (no caso a tabela das direita)
      FULL JOIN -> retorna todos os registros de todas as tabelas
    */

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
    SELECT contacts.*, categories.name AS category_name
    FROM contacts
    LEFT JOIN categories ON categories.id = contacts.category_id
    WHERE contacts.id = $1`,
    [id]); // WHERE == ONDE
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]); // WHERE == ONDE
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
    DELETE FROM contacts WHERE id = $1
    `, [id]);

    // [] -> retorno do delete

    return deleteOp;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);
    return row;
  }
}

module.exports = new ContactRepository();
