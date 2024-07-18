import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import bcrypt from 'bcryptjs';

import { app } from '../../src/app'; // Importa a instância do Express
import SimpleUserModelDatabase from '../../src/database/models/SimpleUser';
import { simpleUserMockFromDB } from '../mocks/simple-user.mock';

chai.use(chaiHttp);
const expect = chai.expect;

describe('SIMPLE REGISTER ROUTE - INTEGRATION TEST', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('POST /api/simple-register', function () {
    it('should be called with status 201 and create a new user', async () => {
      sinon.stub(SimpleUserModelDatabase, 'create').resolves(undefined);
      sinon.stub(SimpleUserModelDatabase, 'findOne').resolves(null);
      sinon.stub(bcrypt, 'hash').resolves('hashed_password');

      const apiResponse = await chai.request(app)
        .post('/api/simple-register')
        .send({
          email: 'newuser@example.com',
          password: 'password',
        });
  
      expect(apiResponse.status).to.equal(201);
      expect(apiResponse.body).to.deep.equal({ message: 'user created' });
    });
  
    it('should be called with status 409 and error message if user already exists', async () => {
      sinon.stub(SimpleUserModelDatabase, 'findOne').resolves(simpleUserMockFromDB);

      const apiResponse = await chai.request(app)
        .post('/api/simple-register')
        .send({
          email: 'newuser@example.com',
          password: 'password',
        });
  
      expect(apiResponse.status).to.equal(409);
      expect(apiResponse.body).to.deep.equal({ message: 'e-mail already registered' });
    });
  });
});