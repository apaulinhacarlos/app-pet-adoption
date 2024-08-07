import * as bcrypt from 'bcryptjs';
import LoginModel from '../models/login.model';
import JWT from '../utils/jwt.utils';

class LoginService {
  constructor(
    private model: LoginModel = new LoginModel(),
    private jwt = new JWT(),
  ) {}

  private messageInvalidCredentials = {
    status: 'UNAUTHORIZED',
    data: { message: 'invalid credentials' },
  };

  public async login(email: string, password: string) {
    const userFound = await this.model.login(email);
    if (!userFound) return this.messageInvalidCredentials;

    const userMatch = bcrypt.compareSync(password, userFound.password);
    if (!userMatch) return this.messageInvalidCredentials;

    const token = this.jwt.sign({
      id: userFound.id,
      email: userFound.email,
      roleId: userFound.roleId,
    });

    return {
      status: 'SUCCESS',
      data: { token },
    };
  } 
}

export default LoginService;