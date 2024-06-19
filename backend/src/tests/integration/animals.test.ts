import chai from 'chai'
import sinon from 'sinon'
import chaiHttp from 'chai-http'

import { app } from '../../app' // Importa a instância do Express
import AnimalModelDatabase from '../../database/models/Animal'
import { animalsMockFromDb, animalsMock } from '../mocks/animals.mock'

chai.use(chaiHttp)
const { expect } = chai

describe('animals route - integration test', function () {
  it('should be called with status 200 and return all animals', async function () {
    sinon.stub(AnimalModelDatabase, 'findAll').resolves(animalsMockFromDb)

    const apiResponse = await chai.request(app).get('/animals')

    expect(apiResponse.status).to.equal(200)
    expect(apiResponse.body).to.deep.equal(animalsMock)

  });
});
