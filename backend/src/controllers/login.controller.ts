import { Request, Response } from 'express';
import getHttpStatus from '../utils/http.map';
import LoginService from '../services/login.service';

class LoginController {
  constructor(
    private service: LoginService = new LoginService(),
  ) {}

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const login = await this.service.login(email, password);
    return res.status(getHttpStatus(login.status)).json(login.data);
  }
}

export default LoginController;