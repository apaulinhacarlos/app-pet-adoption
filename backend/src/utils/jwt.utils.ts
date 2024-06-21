import { JwtPayload, Secret, SignOptions, sign, verify, JsonWebTokenError } from 'jsonwebtoken';

interface IJWT {
  sign(payload: JwtPayload): string
  verify(token: string): JwtPayload
}

export default class JWT implements IJWT {
  private secret: Secret
  private jwtConfig: SignOptions

  constructor() {
    this.secret = process.env.JWT_SECRET || 'secret';
    this.jwtConfig = {
      expiresIn: '10d',
      algorithm: 'HS256',
    };
  }

  public sign(payload: JwtPayload): string {
    return sign({ ...payload }, this.secret, this.jwtConfig);
  }

  public verify(bearerToken: string): JwtPayload {
    if (!bearerToken) throw new JsonWebTokenError('Token not found');

    const token = bearerToken.split(' ')[1];

    try {
      const payload = verify(token, this.secret);
      return payload as JwtPayload;
    } catch (error) {
      throw new JsonWebTokenError('Token must be a valid token');
    }
  }
}