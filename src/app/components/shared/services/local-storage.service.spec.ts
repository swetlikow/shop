import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let user: User = new User(1, 'svietlikov', 'andrii_svietlikov@epam.com');

  beforeEach(() => {
    service = new LocalStorageService();
  });

  it('getCurrentUser should return currentUser (from localStorage)', () => {
    service.setCurrentUser(user);
    expect(service.getCurrentUser().login).toBe('svietlikov');
  });
});
