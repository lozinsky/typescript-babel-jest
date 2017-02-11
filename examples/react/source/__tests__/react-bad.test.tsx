import React from 'react';
import renderer from 'react-test-renderer';

import ReactBad from '../react-bad';

describe('React bad', () => {
	it('bad button should throw an error on line 10', () => {
		const insults = {
			STUPID: 'stupid',
			IDIOT: 'idiot',
			ASS: 'ass',
		};

		const tree = renderer.create(
			<ReactBad insults={insults} />
		).toJSON();
	})
});