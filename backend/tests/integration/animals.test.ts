import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
// import { describe, afterEach, it } from 'mocha';
import jwt from 'jsonwebtoken';

import { app } from '../../src/app'; // Importa a instância do Express
import AnimalModelDatabase from '../../src/database/models/Animal';
import {
  animalsMock,
  animalsMockFromDb,
  newAnimalMock,
  newAnimalMockFromDB,
} from '../mocks/animals.mock';

chai.use(chaiHttp);
const { expect } = chai;

describe('ANIMALS ROUTE - INTEGRATION TEST', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('GET /api/animals', function () {
    it('should be called with status 200 and return all animals', async function () {
      sinon.stub(AnimalModelDatabase, 'findAll').resolves(animalsMockFromDb);
  
      const apiResponse = await chai.request(app)
        .get('/api/animals');
  
      expect(apiResponse.status).to.equal(200);
      expect(apiResponse.body).to.deep.equal(animalsMock);
    });

    it('should be called with status 404 and error message if no animals are found', async function () {
      sinon.stub(AnimalModelDatabase, 'findAll').resolves([]);
  
      const apiResponse = await chai.request(app)
        .get('/api/animals');
  
      expect(apiResponse.status).to.equal(404);
      expect(apiResponse.body).to.deep.equal({ message: 'no animals found' });
    });
  });

  describe('GET /api/animals/:id', function () {
    it('should be called with status 200 and return only the animal with the predefined id', async function () {    
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);
  
      const apiResponse = await chai.request(app)
        .get('/api/animals/1');
  
      expect(apiResponse.status).to.equal(200);
      expect(apiResponse.body).to.deep.equal(animalsMock[0]);
    });

    it('should be called with status 404 and error message if the animal is not found', async function () {
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(null);
  
      const apiResponse = await chai.request(app)
        .get('/api/animals/1');
  
      expect(apiResponse.status).to.equal(404);
      expect(apiResponse.body).to.deep.equal({ message: 'no animals found' });
    });
  });

  describe('POST /api/animals', function () {
    it('should be called with status 201 and create a new animal', async function () {    
      sinon.stub(AnimalModelDatabase, 'create').resolves(newAnimalMockFromDB);
      
      const payload = {
        id: 1,
        email: 'paula@example.com',
        roleId: 1,
        iat: 1719600713,
        exp: 1720464713
      }

      sinon.stub(jwt, 'verify').callsFake(() => payload)

      const { id, ...newAnimalMockWithoutId } = newAnimalMock;
      
      const apiResponse = await chai.request(app)
        .post('/api/animals')
        .set('Authorization', 'Bearer valid_token')
        .send(newAnimalMockWithoutId);
  
      expect(apiResponse.status).to.equal(201);
      expect(apiResponse.body).to.deep.equal({ message: 'animal created', animalId: 2 });
    });

    it('should be called with status 400 and error message if the request body is invalid', async function () {
      // not implemented
    });   

    it('should be called with status 401 and error message if the token is invalid', async function () {
      sinon.stub(AnimalModelDatabase, 'create').resolves(newAnimalMockFromDB);
      
      const { id, ...newAnimalMockWithoutId } = newAnimalMock;
    
      const apiResponse = await chai.request(app)
        .post('/api/animals')
        .set('Authorization', 'Bearer invalid_token')
        .send(newAnimalMockWithoutId);
    
      expect(apiResponse.status).to.equal(401);
      expect(apiResponse.body).to.deep.equal({ message: 'invalid credentials' });
    });

    it('should be called with status 401 and error message if the token is absent', async function () {
      sinon.stub(AnimalModelDatabase, 'create').resolves(newAnimalMockFromDB);
      
      const { id, ...newAnimalMockWithoutId } = newAnimalMock;
    
      const apiResponse = await chai.request(app)
        .post('/api/animals')
        .send(newAnimalMockWithoutId);
    
      expect(apiResponse.status).to.equal(401);
      expect(apiResponse.body).to.deep.equal({ message: 'invalid credentials' });
    });
  });

  describe('PUT /api/animals/:id', function () {
    it('should be called with status 200 and update the animal with the predefined id', async function () {
      sinon.restore();
      
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);
      sinon.stub(AnimalModelDatabase, 'update').resolves([ 1 ]);
  
      const payload = {
        id: 1,
        email: 'paula@example.com',
        roleId: 1,
        iat: 1719600713,
        exp: 1720464713
      }

      sinon.stub(jwt, 'verify').callsFake(() => payload)


      const { id, ...newAnimalMockWithoutId } = newAnimalMock;

      const apiResponse = await chai.request(app)
        .put('/api/animals/1')
        .set('Authorization', 'valid_token')
        .send(newAnimalMockWithoutId);
  
      expect(apiResponse.status).to.equal(200);
      expect(apiResponse.body).to.deep.equal({ message: 'animal updated' });
    });

    it('should be called with status 400 and error message if the request body is invalid', async function () {
      // not implemented
    }); 
  });

  describe('DELETE /api/animals/:id', function () {
    it('should be called with status 204 and delete the animal with the predefined id', async function () {    
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);
      sinon.stub(AnimalModelDatabase, 'destroy').resolves(1);
    
      const payload = {
        id: 1,
        email: 'paula@example.com',
        roleId: 1,
        iat: 1719600713,
        exp: 1720464713
      }

      sinon.stub(jwt, 'verify').callsFake(() => payload)

      const apiResponse = await chai.request(app)
      .delete('/api/animals/1')
      .set('Authorization', 'valid_token');
  
      expect(apiResponse.status).to.equal(204);
      expect(apiResponse.body).to.empty;
    });
  });
});

