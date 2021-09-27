const { v4 } = require('uuid');

let contacts = [

  {
    id: v4(),
    name: 'John Doe',
    email: 'john@mail.com',
    phone: '+1-555-555-5555',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'John Zé',
    email: 'johnze@mail.com',
    phone: '+1-444-444-444',
    category_id: v4(),
  },

];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
