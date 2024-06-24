import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { describe, afterEach, it } from 'node:test';

import AnimalsController from '../../../src/controllers/animals.controller';
import AnimalsService from '../../../src/services/animals.service';
import { animalsMockFromDb } from '../../mocks/animals.mock';
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

    it('should be called with status 404 and error message if no animals are found', async () => {
      // not implemented
    });
  });

  describe('getById', () => {
    it('should be called with status 200 and return only the animal with the predefined id', async () => {
      // not implemented
    });

    it('should be called with status 404 and error message if the animal is not found', async () => {
      // not implemented
    });
  });

  describe('create', () => {
    it('should be called with status 201 and create a new animal', async () => {
      // not implemented
    });

    it('should be called with status 400 and error message if the request body is invalid', async () => {
      // not implemented
    });
  });

  describe('update', () => {
    it('should be called with status 200 and update the animal with the predefined id', async () => {
      // not implemented
    });

    it('should be called with status 404 if the animal to update is not found', async () => {
      // not implemented
    });
  });

  describe('delete', () => {
    it('should be called with status 204 and delete the animal with the predefined id', async () => {
      // not implemented
    });

    it('should be called with status 404 if the animal to delete is not found', async () => {
      // not implemented
    });
  });
});
