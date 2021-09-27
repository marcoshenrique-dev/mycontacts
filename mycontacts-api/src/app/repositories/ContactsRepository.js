const { uuid } = require('uuidv4');

const contacts = [

  {
    id: uuid(),
    name: 'John Doe',
    email: 'john@mail.com',
    phone: '+1-555-555-5555',
    category_id: uuid(),
  },

];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
