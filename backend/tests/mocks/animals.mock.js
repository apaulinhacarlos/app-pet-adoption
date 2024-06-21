"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.animalsMockFromDb = exports.animalsMock = void 0;
const Animal_1 = __importDefault(require("../../src/database/models/Animal"));
exports.animalsMock = [
    {
        "id": 1,
        "name": "Abeia",
        "specie": "cat",
        "gender": "female",
        "yearOfBirth": 2012,
        "description": "Abeia é uma gata muito carinhosa e brincalhona. Ela adora brincar com bolinhas de papel e caixas de papelão.",
        "imageUrl": "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "videoUrl": "https://www.youtube.com/watch?v=J---aiyznGQ",
        "availableForAdoption": true,
        "isAdopted": false
    },
    {
        "id": 2,
        "name": "Vaquinha",
        "specie": "cat",
        "gender": "female",
        "yearOfBirth": 2012,
        "description": "Vaquinha é uma gata muito carinhosa e brincalhona. Ela adora brincar com bolinhas de papel e caixas de papelão.",
        "imageUrl": "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "videoUrl": "https://www.youtube.com/watch?v=J---aiyznGQ",
        "availableForAdoption": true,
        "isAdopted": false
    },
];
exports.animalsMockFromDb = Animal_1.default.bulkBuild(exports.animalsMock);
//# sourceMappingURL=animals.mock.js.map