import { expect } from 'chai';
import getHttpStatus from '../../../src/utils/http.map';

describe('GET HTTP STATUS - UNIT TEST', () => {
  it('should return the correct HTTP status code for several cases', () => {
    const testCases = [
      { status: 'SUCCESS', expected: 200 },
      { status: 'CREATED', expected: 201 },
      { status: 'NO_CONTENT', expected: 204 },
      { status: 'BAD_REQUEST', expected: 400 },
      { status: 'UNAUTHORIZED', expected: 401 },
      { status: 'NOT_FOUND', expected: 404 },
      { status: 'CONFLICT', expected: 409 },
      { status: 'INTERNAL_SERVER_ERROR', expected: 500 },
    ];

    testCases.forEach(({ status, expected }) => {
      const result = getHttpStatus(status);
      expect(result).to.equal(expected);
    });
  });

  it('should return HTTP status code 500 for others errors', () => {
    const status = 'BATATINHA';

    const result = getHttpStatus(status);

    expect(result).to.equal(500);
  });

  
});