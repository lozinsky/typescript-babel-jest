import Creeping from '../creeping';

describe('Common creeping', () => {
    const creeper = new Creeping('Sam');

    it('async sleep', () => {
        return creeper.say().then(message => {
            expect(message).toBe('meh, hello, Sam');
        });
    });

    it('code', () => {
        const code = creeper.showMeYourSelf().toString();

        expect(code).toContain('var WOW = [\'wow\'];');
        expect(code).toContain('hi[hi[\"smile\"] = 0]');
        expect(code).toContain('WOW[hi.smile]).map(function (yo)');
    });
});