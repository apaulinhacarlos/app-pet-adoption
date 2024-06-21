"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const sinon_1 = __importDefault(require("sinon"));
const sinon_chai_1 = __importDefault(require("sinon-chai"));
const animals_controller_1 = __importDefault(require("../../../src/controllers/animals.controller"));
const animals_service_1 = __importDefault(require("../../../src/services/animals.service"));
const animals_mock_1 = require("../../mocks/animals.mock");
const { expect } = chai_1.default;
chai_1.default.use(sinon_chai_1.default);
describe('animals controller - unit test', () => {
    afterEach(() => {
        sinon_1.default.restore();
    });
    describe('get', () => {
        it('should be called with status 200 and return all animals', async () => {
            const animalsService = new animals_service_1.default();
            sinon_1.default.stub(animalsService, 'get').resolves({
                status: 'OK',
                data: animals_mock_1.animalsMockFromDb
            });
            const req = {};
            const res = {
                status: sinon_1.default.stub().returnsThis(),
                json: sinon_1.default.stub().returnsThis()
            };
            const animalsController = new animals_controller_1.default();
            await animalsController.get(req, res);
            expect(res.status).to.have.been.calledWith(200);
            expect(res.json).to.have.been.calledWith(animals_mock_1.animalsMockFromDb);
        });
    });
});
//# sourceMappingURL=animals.test.js.map