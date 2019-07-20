import { LooggerMiddleware } from './loogger.middleware';

describe('LooggerMiddleware', () => {
  it('should be defined', () => {
    expect(new LooggerMiddleware()).toBeDefined();
  });
});
