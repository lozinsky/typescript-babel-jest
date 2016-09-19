import React, { Component } from 'react';

export default class ReactGood extends Component<IReactGoodProps, void> {
	public render(): JSX.Element {
		const { compliments } = this.props;

		return (
			<div className='good'>
				{Object.values(compliments).map((compliment: string, key: number): JSX.Element => (
					<button key={key} className='good__button'>{compliment}</button>
				))}
			</div>
		);
	};
};

interface IReactGoodProps {
	compliments: {
		[name: string]: string;
	}
}