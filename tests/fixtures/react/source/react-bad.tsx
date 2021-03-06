import React, { Component } from 'react';

class ReactBad extends Component<IReactBadProps, void> {
    public render(): JSX.Element {
        const { insults } = this.props;

        return (
            <div className='bad'>
                {Object.values(insults).map((insult: string) => {
                    throw insult;
                })}
            </div>
        );
    };
};

interface IReactBadProps {
    insults: {
        [name: string]: string;
    };
};

export default ReactBad;