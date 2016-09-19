import Creeping from '../creeping';

describe('Common creeping', () => {
	it('Async sleep', () => {
		const creeper = new Creeping('Sam');

		return creeper.say().then(message => {
			expect(message).toBe('meh, hello, Sam');
		});
	});
});