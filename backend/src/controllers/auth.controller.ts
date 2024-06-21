import { Request, Response } from 'express';
import getHttpStatus from '../utils/http.map';
import AuthService from '../services/auth.service';

class AuthController {
  constructor(
    private service: AuthService = new AuthService()
  ) {}

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const login = await this.service.login(email, password);
    return res.status(getHttpStatus(login.status)).json(login.data);
}};

export default AuthController;