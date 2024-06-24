import * as bcrypt from 'bcryptjs';
import LoginModel from '../models/login.model';
import SimpleRegisterModel from '../models/simple-register.model';
import JWT from '../utils/jwt.utils';

class SimpleRegisterService {
  constructor(
    private modelLogin: LoginModel = new LoginModel(),
    private model: SimpleRegisterModel = new SimpleRegisterModel(),
    private jwt = new JWT(),
  ) {}

  private messageAlreadyRegistered = {
    status: 'CONFLICT',
    data: { message: 'e-mail already registered' },
  };

  public async register(email: string, password: string) {
    const userFound = await this.modelLogin.login(email);
    if (userFound) return this.messageAlreadyRegistered;

    const hashPassword = await bcrypt.hash(password, 10);
    await this.model.register(email, hashPassword);

    return {
      status: 'CREATED',
      data: { message: 'user created' },
    };
  } 
}

export default SimpleRegisterService;