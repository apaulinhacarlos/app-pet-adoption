import { ModelStatic } from 'sequelize';
import SimpleUserModelDatabase from '../database/models/SimpleUser';
import ISimpleUsers from '../interfaces/ISimpleUsers';
// import ILogin from '../interfaces/ILogin';

class AuthModel {
  constructor(
    private modelDatabase: ModelStatic<SimpleUserModelDatabase> = SimpleUserModelDatabase,
  ) {}

  public async login(email: string, password: string): Promise<ISimpleUsers | null> {
      const userFound = await this.modelDatabase.findOne({ where: { email } });
      return userFound;
  }
}

export default AuthModel;