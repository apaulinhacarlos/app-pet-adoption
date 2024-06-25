import { ModelStatic } from 'sequelize';
import SimpleUserModelDatabase from '../database/models/SimpleUser';

class SimpleRegisterModel {
  constructor(
    private modelDatabase: ModelStatic<SimpleUserModelDatabase> = SimpleUserModelDatabase,
  ) {}
 
  public async register(email: string, hashPassword: string): Promise<void> {
    await this.modelDatabase.create({ email, password: hashPassword });
  }
}

export default SimpleRegisterModel;