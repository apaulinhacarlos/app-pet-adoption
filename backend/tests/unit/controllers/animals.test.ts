import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { describe, afterEach, it } from 'node:test';

import AnimalsController from '../../../src/controllers/animals.controller';
import AnimalsService from '../../../src/services/animals.service';
import { animalsMockFromDb, newAnimalMockFromDB } from '../../mocks/animals.mock';
import AnimalModelDatabase from '../../../src/database/models/Animal';

const { expect } = chai;
chai.use(sinonChai);

describe('ANIMALS CONTROLLER - UNIT TEST', () => {
  afterEach(function () {
    sinon.restore();
  });

  describe('get', () => {
    it('should be called with status 200 and return all animals', async () => {
      sinon.stub(AnimalModelDatabase, 'findAll').resolves(animalsMockFromDb);

      const animalsService = new AnimalsService();
      sinon.stub(animalsService, 'get').resolves({
        status: 'OK',
        data: animalsMockFromDb
      });
    
      const req = {} as Request;
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis()
      } as unknown as Response;

      const animalsController = new AnimalsController();
      await animalsController.get(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(animalsMockFromDb);
    });
  });

  describe('getById', () => {
    it('should be called with status 200 and return only the animal with the predefined id', async () => {
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);

      const animalsService = new AnimalsService();
      sinon.stub(animalsService, 'getById').resolves({
        status: 'OK',
        data: animalsMockFromDb[0]
      });
    
      const req = {
        params: { id: '1' },
      } as unknown as Request;

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis()
      } as unknown as Response;

      const animalsController = new AnimalsController();
      await animalsController.getById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(animalsMockFromDb[0]);
    });
  });

  describe('create', () => {
    it('should be called with status 201 and create a new animal', async () => {
      sinon.stub(AnimalModelDatabase, 'create').resolves(newAnimalMockFromDB);

      const animalsService = new AnimalsService();
      sinon.stub(animalsService, 'create').resolves({
        status: 'CREATED',
        data: { message: 'animal created', animalId: 2 }
      });
    
      const req = {} as Request;
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis()
      } as unknown as Response;

      const animalsController = new AnimalsController();
      await animalsController.create(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith({ message: 'animal created', animalId: 2 });
    });
  });
  
  describe('update', () => {
    it('should be called with status 200 and update the animal with the predefined id', async () => {
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);
      sinon.stub(AnimalModelDatabase, 'update').resolves([ 1 ]);

      const animalsService = new AnimalsService();
      sinon.stub(animalsService, 'update').resolves({
        status: 'OK',
        data: { message: 'animal updated' }
      });
    
      const req = {
        params: { id: '1' },
      } as unknown as Request;

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis()
      } as unknown as Response;

      const animalsController = new AnimalsController();
      await animalsController.update(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({ message: 'animal updated' });
    });
  });

  describe('delete', () => {
    it('should be called with status 204 and delete the animal with the predefined id', async () => {
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);
      sinon.stub(AnimalModelDatabase, 'destroy').resolves(1);

      const animalsService = new AnimalsService();
      sinon.stub(animalsService, 'delete').resolves({
        status: 'NO_CONTENT',
        data: { message: 'animal deleted' }
      });
    
      const req = {
        params: { id: '1' },
      } as unknown as Request;

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis()
      } as unknown as Response;

      const animalsController = new AnimalsController();
      await animalsController.delete(req, res);

      expect(res.status).to.have.been.calledWith(204);
      expect(res.json).to.have.been.calledWith({ message: 'animal deleted' });
    });
  });
});
