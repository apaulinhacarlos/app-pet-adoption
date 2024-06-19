import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { Request, Response } from 'express'

import AnimalsController from '../../../controllers/animals.controller'
import AnimalsService from '../../../services/animals.service'
import { animalsMockFromDb } from '../../mocks/animals.mock'

const { expect } = chai
chai.use(sinonChai)

describe('animals controller - unit test', () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('get', () => {
    it('should be called with status 200 and return all animals', async () => {
      const animalsService = new AnimalsService()
      sinon.stub(animalsService, 'get').resolves({
        status: 'OK',
        data: animalsMockFromDb
      })
    
      const req = {} as Request
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis()
      } as unknown as Response

      const animalsController = new AnimalsController()
      await animalsController.get(req, res)

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(animalsMockFromDb)
    })
  })
})
