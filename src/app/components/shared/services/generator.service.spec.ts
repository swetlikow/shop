import { GeneratorService } from './generator.service';

describe('GeneratorService', () => {
  const service: GeneratorService = new GeneratorService();

  it('generate should return random generated string (password)', () => {
    expect(service.generate(5).length).toEqual(5);
  });
});
