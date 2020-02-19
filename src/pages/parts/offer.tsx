import React from 'react';
import OfferCard from '../../components/offercard';

interface State {
    [index: number]: {
        title?: string;
        description?: string;
    };
}

export default class Offer extends React.Component<{}, State> {
    state = [
        {
            title: 'aa',
            description: 'aa'
        }
    ];

    render() {
        return (
            <>
                {this.state.map((value, key) => (
                    <OfferCard
                        key={key}
                        title={value.title}
                        description={value.description}
                    />
                ))}
            </>
        );
    }
}
