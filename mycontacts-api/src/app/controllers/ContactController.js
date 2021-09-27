const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // listar um registro
  }

  store() {
    // cadastrar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // deletar um registro
  }
}

module.exports = new ContactController();
