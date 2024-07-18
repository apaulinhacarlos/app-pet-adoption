import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { app } from '../../src/app'; // Importa a instância do Express
import SimpleUserModelDatabase from '../../src/database/models/SimpleUser';
import { simpleUserMockFromDB } from '../mocks/simple-user.mock';

chai.use(chaiHttp);
const expect = chai.expect;

describe('LOGIN ROUTE - INTEGRATION TEST', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('POST /api/login', function () {
    it('should return a JWT token when valid credentials are provided', async () => {
      sinon.stub(SimpleUserModelDatabase, 'findOne').resolves(simpleUserMockFromDB);
      sinon.stub(bcrypt, 'compareSync').returns(true);
      sinon.stub(jwt, 'sign').callsFake(() => 'valid_token');

      const apiResponse = await chai.request(app)
        .post('/api/login')
        .send({
          email: 'example@example.com',
          password: 'password',
        });
  
      expect(apiResponse.status).to.equal(200);
      expect(apiResponse.body).to.have.property('token');
      expect(apiResponse.body).to.deep.equal({ token: 'valid_token' });
    });
  
    it('should return an error when invalid password is provided', async () => {
      sinon.stub(SimpleUserModelDatabase, 'findOne').resolves(simpleUserMockFromDB);
      sinon.stub(bcrypt, 'compareSync').returns(false);

      const apiResponse = await chai.request(app)
        .post('/api/login')
        .send({
          email: 'example@example.com',
          password: 'wrongpassword',
        });
  
      expect(apiResponse.status).to.equal(401);
      expect(apiResponse.body).to.have.property('message');
      expect(apiResponse.body).to.deep.equal({ message: 'invalid credentials' });
    });
    
    it('should return an error when invalid credentials are provided', async () => {
      const apiResponse = await chai.request(app)
        .post('/api/login')
        .send({
          email: 'example@example.com',
          password: 'wrongpassword',
        });
  
      expect(apiResponse.status).to.equal(401);
      expect(apiResponse.body).to.have.property('message');
      expect(apiResponse.body).to.deep.equal({ message: 'invalid credentials' });
    });
  });
});