import SimpleUserModelDatabase from '../../src/database/models/SimpleUser';

export const simpleUserMock = {
  "id": 1,
  "email": "user@example.com",
  "password": "hash",
  "roleId": 1,
}

export const simpleUserMockFromDB = SimpleUserModelDatabase.build(simpleUserMock);
