class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async findAll() {
    const response = await this.model.find({});
    return response;
  }

  async findById(id) {
    const response = await this.model.findById(id);
    return response;
  }

  async find(data) {
    const respone = await this.model.find(data);
    return respone;
  }

  async update(id, data) {
    const response = await this.model.updateMany({ _id: id }, data);
    return response;
  }

  async delete(data) {
    const respone = await this.model.delete(data);
    return respone;
  }
}

export { CrudRepository };
