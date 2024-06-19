import chai from 'chai'
import { Request, Response } from 'express'
import sinon from 'sinon'
import AnimalsController from '../../../controllers/animals.controller';
import AnimalsService from '../../../services/animals.service';
import { animalsMock } from '../../mocks/animals.mock'
const { expect } = chai

describe('AnimalsController', () => {
  afterEach(() => {
    sinon.restore();
  })

  describe('getAll', () => {
    it('should be called with status 200 and return all animals', async () => {
      const animalsService = new AnimalsService()
      sinon.stub(animalsService, 'get').resolves(animalsMock)
    
      const statusStub = sinon.stub().returnsThis()
      const jsonStub = sinon.stub().returnsThis()

      const req = {} as Request
      const res = {
        status: statusStub,
        json: jsonStub
      } as unknown as Response

      const animalsController = new AnimalsController();

      await animalsController.get(req, res)

      expect(statusStub.calledWith(200)).to.be.true
      expect(jsonStub.calledWith(animalsMock)).to.be.true
    })
  })
})
