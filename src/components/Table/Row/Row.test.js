import { shortenName } from './helpers';

describe ('Get initials from full name test', () => {
  it('Should correctly work on my name', () => {
    const name = 'Konstantin Sergeevich';
    const surname = 'Konovalov';
    const initials = 'Konovalov K.S.';
    expect(initials).toEqual(shortenName(name, surname));
  });
  it('Should not break on null', () => {
    const name = null;
    const surname = null;
    const initials = '';
    expect(initials).toEqual(shortenName(name, surname));
  });
});