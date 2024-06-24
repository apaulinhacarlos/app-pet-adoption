import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { describe, afterEach, it } from 'node:test';

import { app } from '../../src/app'; // Importa a instância do Express
import AnimalModelDatabase from '../../src/database/models/Animal';
import {
  animalsMock,
  animalsMockFromDb,
  newAnimalMock,
  newAnimalMockFromDB,
  animalUpdatedMock,
  animalUpdatedMockFromDB
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
      // not implemented
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
      // not implemented
    });
  });

  describe('POST /api/animals', function () {
    it('should be called with status 201 and create a new animal', async function () {    
      sinon.stub(AnimalModelDatabase, 'create').resolves(newAnimalMockFromDB);
  
      const apiResponse = await chai.request(app)
        .post('/api/animals')
        .send(newAnimalMock);
  
      expect(apiResponse.status).to.equal(201);
      expect(apiResponse.body).to.deep.equal(newAnimalMock);
    });

    it('should be called with status 400 and error message if the request body is invalid', async function () {
      // not implemented
    });   
  });

  describe('PUT /api/animals/:id', function () {
    it('should be called with status 200 and update the animal with the predefined id', async function () {
      sinon.restore();
      
      sinon.stub(AnimalModelDatabase, 'update').resolves([ 1 ]);
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalUpdatedMockFromDB);
  
      const apiResponse = await chai.request(app)
        .put('/api/animals/5')
        .send(animalUpdatedMock);
  
      expect(apiResponse.status).to.equal(200);
      expect(apiResponse.body).to.deep.equal(animalUpdatedMock);
    });

    it('should be called with status 404 if the animal to update is not found', async function () {
      // not implemented
    });
  });

  describe('DELETE /api/animals/:id', function () {
    it('should be called with status 204 and delete the animal with the predefined id', async function () {    
      sinon.stub(AnimalModelDatabase, 'destroy').resolves(1);
    
      const apiResponse = await chai.request(app)
        .delete('/api/animals/1');
  
      expect(apiResponse.status).to.equal(204);
      expect(apiResponse.body).to.empty;
    });
  
    it('should be called with status 404 if the animal to delete is not found', async function () {
      // not implemented
    });
  });
});

