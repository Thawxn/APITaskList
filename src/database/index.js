import Sequelize from 'sequelize';
import configDatabase from '../config/database';

import User from '../app/models/User';
import Task from '../app/models/Task';

const models = [User, Task];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // conexão com o banco de dados e com os models
    this.connection = new Sequelize(configDatabase);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
