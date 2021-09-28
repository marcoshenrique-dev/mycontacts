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

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }
}

module.exports = new ContactRepository();
