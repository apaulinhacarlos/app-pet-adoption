import { Request, Response } from 'express';
import getHttpStatus from '../utils/http.map';
import SimpleRegisterService from '../services/simple-register.service';

class SimpleRegisterController {
  constructor(
    private service: SimpleRegisterService = new SimpleRegisterService(),
  ) {}

  public async register(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const register = await this.service.register(email, password);
    return res.status(getHttpStatus(register.status)).json(register.data);
  }
}

export default SimpleRegisterController;