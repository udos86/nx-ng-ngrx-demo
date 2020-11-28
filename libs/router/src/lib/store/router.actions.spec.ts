import { navigate } from './router.actions';

describe('loadRouters', () => {
  it('should return an action', () => {
    expect(navigate({ commands: [] }).type).toBe('[Router] Navigate');
  });
});
