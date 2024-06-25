import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { describe, afterEach, it } from 'mocha';

import AnimalsController from '../../../src/controllers/animals.controller';
import AnimalsService from '../../../src/services/animals.service';
import { animalsMockFromDb, newAnimalMock, newAnimalMockFromDB } from '../../mocks/animals.mock';
import AnimalModelDatabase from '../../../src/database/models/Animal';
import AnimalsModel from '../../../src/models/animals.model';

const { expect } = chai;
chai.use(sinonChai);

describe('ANIMALS SERVICE - UNIT TEST', () => {
  afterEach(function () {
    sinon.restore();
  });

  describe('get', () => {
    it('should be returned with status OK and data animals', async () => {
      sinon.stub(AnimalModelDatabase, 'findAll').resolves(animalsMockFromDb);
    
      const animalsService = new AnimalsService();
      const result = await animalsService.get();

      expect(result.status).to.equal('OK');
      expect(result.data).to.equal(animalsMockFromDb);
    });
  });

  describe('getById', () => {
    it('should be returned with status OK and data with only the animal with the predefined id', async () => {
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);

      const animalsService = new AnimalsService();
      const result = await animalsService.getById(1);

      expect(result.status).to.equal('OK');
      expect(result.data).to.deep.equal(animalsMockFromDb[0]);
    });
  });

  describe('create', () => {
    it('should be returned with status CREATED and data { message: animal created } with id of the new animal', async () => {
      sinon.stub(AnimalModelDatabase, 'create').resolves(newAnimalMockFromDB);

      const { id, ...newAnimalMockWithoutId } = newAnimalMock;

      const animalsService = new AnimalsService();
      const result = await animalsService.create(newAnimalMockWithoutId);

      expect(result.status).to.equal('CREATED');
      expect(result.data).to.deep.equal({ message: 'animal created', animalId: 2 });
    });
  });
  
  describe('update', () => {
    it('should be returned with status OK and data { message: animal updated }', async () => {
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);
      sinon.stub(AnimalModelDatabase, 'update').resolves([ 1 ]);

      const { id, ...newAnimalMockWithoutId } = newAnimalMock;

      const animalsService = new AnimalsService();
      const result = await animalsService.update(1, newAnimalMockWithoutId);

      expect(result.status).to.equal('OK');
      expect(result.data).to.deep.equal({ message: 'animal updated' });
    });
  });

  describe('delete', () => {
    it('should be returnec with status NO_CONTENT and data { message: animal updated }', async () => {
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);
      sinon.stub(AnimalModelDatabase, 'destroy').resolves(1);

      const animalsService = new AnimalsService();
      const result = await animalsService.delete(1);

      expect(result.status).to.equal('NO_CONTENT');
      expect(result.data).to.deep.equal({ message: 'animal deleted' });
    });
  });
});