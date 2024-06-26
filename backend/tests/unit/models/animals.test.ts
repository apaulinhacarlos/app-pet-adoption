import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { describe, afterEach, it } from 'mocha';

import { animalsMockFromDb, newAnimalMock, newAnimalMockFromDB } from '../../mocks/animals.mock';
import AnimalModelDatabase from '../../../src/database/models/Animal';
import AnimalsModel from '../../../src/models/animals.model';

const { expect } = chai;
chai.use(sinonChai);

describe('ANIMALS MODEL - UNIT TEST', () => {
  afterEach(function () {
    sinon.restore();
  });

  describe('get', () => {
    it('should be returned with all animals', async () => {
      sinon.stub(AnimalModelDatabase, 'findAll').resolves(animalsMockFromDb);
    
      const animalsModel = new AnimalsModel();
      const result = await animalsModel.get();

      expect(result).to.equal(animalsMockFromDb);
    });
  });

  describe('getById', () => {
    it('should be returned with status OK and data with only the animal with the predefined id', async () => {
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);

      const animalsModel = new AnimalsModel();
      const result = await animalsModel.getById(1);

      expect(result).to.deep.equal(animalsMockFromDb[0]);
    });
  });

  describe('create', () => {
    it('should be returned with status CREATED and data { message: animal created } with id of the new animal', async () => {
      sinon.stub(AnimalModelDatabase, 'create').resolves(newAnimalMockFromDB);

      const { id, ...newAnimalMockWithoutId } = newAnimalMock;

      const animalsModel = new AnimalsModel();
      const result = await animalsModel.create(newAnimalMockWithoutId);

      expect(result).to.deep.equal(newAnimalMockFromDB);
    });
  });
  
  describe('update', () => {
    it('should be returned with status OK and data { message: animal updated }', async () => {
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);
      sinon.stub(AnimalModelDatabase, 'update').resolves([ 1 ]);

      const { id, ...newAnimalMockWithoutId } = newAnimalMock;

      const animalsModel = new AnimalsModel();
      const result = await animalsModel.update(1, newAnimalMockWithoutId);

      expect(result).to.be.undefined;
    });
  });

  describe('delete', () => {
    it('should be returnec with status NO_CONTENT and data { message: animal updated }', async () => {
      sinon.stub(AnimalModelDatabase, 'findByPk').resolves(animalsMockFromDb[0]);
      sinon.stub(AnimalModelDatabase, 'destroy').resolves(1);

      const animalsModel = new AnimalsModel();
      const result = await animalsModel.delete(1);

      expect(result).to.be.undefined;
    });
  });
});