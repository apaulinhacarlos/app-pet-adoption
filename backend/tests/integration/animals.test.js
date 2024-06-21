"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const sinon_1 = __importDefault(require("sinon"));
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = require("../../src/app"); // Importa a instância do Express
const Animal_1 = __importDefault(require("../../src/database/models/Animal"));
const animals_mock_1 = require("../mocks/animals.mock");
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('animals route - integration test', function () {
    it('should be called with status 200 and return all animals', async function () {
        sinon_1.default.stub(Animal_1.default, 'findAll').resolves(animals_mock_1.animalsMockFromDb);
        const apiResponse = await chai_1.default.request(app_1.app).get('/animals');
        expect(apiResponse.status).to.equal(200);
        expect(apiResponse.body).to.deep.equal(animals_mock_1.animalsMock);
    });
});
//# sourceMappingURL=animals.test.js.map