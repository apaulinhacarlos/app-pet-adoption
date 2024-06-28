import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { describe, afterEach, it } from 'mocha';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import CustomError from '../../../src/utils/errors';
import authMiddleware from '../../../src/middlewares/auth.middleware';

const { expect } = chai;
chai.use(sinonChai);

describe('AUTH MIDDLEWARE - UNIT TEST', () => {
  /*
    Partial é uma `utility type` do TypeScript que transforma todas as propriedades de um tipo em opcionais.
    Ou seja, permite criar um objeto apenas com as propriedades necessárias sem precisar definir todas as propriedades (de um Request completo, por exemplo).
    É útil para simplificar a criação de objetos de teste e permitir que os testes se concentrem apenas nas propriedades relevantes.
  */
  let req: Partial<Request>;
  let res: Partial<Response>;
   
  let next: sinon.SinonStub; // Define que a variável `next` terá o tipo sinon.SinonStub

  beforeEach(function () {
    req = {
      headers: {},
      body: {}
    } as Partial<Request>;

    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis()
    } as unknown as Partial<Response>;

    next = sinon.stub(); // Cria e atribui um stub real à variável next.
  });

  afterEach(function () {
    sinon.restore();
  });

  it('should call next and set req.body.user if token is valid', () => {
    const payload = {
      id: 1,
      email: 'paula@example.com',
      roleId: 1,
      iat: 1719600713,
      exp: 1720464713
    }

    sinon.stub(jwt, 'verify').callsFake(() => payload)
    
    req.headers!.authorization = 'valid_token';
  
    authMiddleware(req as Request, res as Response, next);

    expect(next).to.have.been.calledOnce;
    expect(req.body.user).to.deep.equal(payload);
  });

  it('should throw CustomError if token is invalid', () => {
    expect(next).not.to.have.been.called;
    
    expect(() => authMiddleware(req as Request, res as Response, next))
      .to.throw(CustomError, 'invalid credentials');
  });

  it('should throw CustomError if token is absent', () => {
    expect(next).not.to.have.been.called;

    expect(() => authMiddleware(req as Request, res as Response, next))
      .to.throw(CustomError, 'invalid credentials');
  });

 
});
