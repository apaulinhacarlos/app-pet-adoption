// import chai from 'chai';
// import sinon from 'sinon';
// import chaiHttp from 'chai-http';
// import { describe, it } from 'mocha';
// import { Express } from 'express';

// import { app } from '../../app'; // Importa a instância do Express
// import AnimalModelDatabase from '../../database/models/Animal';
// import { animalMockFromDb } from '../mocks/animals.mock';

// chai.use(chaiHttp);
// const { expect } = chai;

// describe('animals route', function () {
//   it('should return all animals', async function () {
//     sinon.stub(AnimalModelDatabase, 'findAll').resolves(animalMockFromDb);

//     const apiResponse = await chai.request(app as Express).get('/animals');

//     expect(apiResponse.status).to.equal(200);
//     expect(apiResponse.body).to.be.an('array');
//   });
// });
