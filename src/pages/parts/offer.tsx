import React from 'react';
import OfferCard from '../../components/offercard';
import '../../scss/pages/home/offer.scss';
import Web from '../../assets/desk-laptop-macbook-pro-working-69432.jpg';

interface State {
    [index: number]: {
        title?: string;
        description?: string;
        src?: string;
        alt?: string;
    };
}

export default class Offer extends React.Component<{}, State> {
    state = [
        {
            title: 'aa',
            description: 'aa',
            src: Web,
            alt: 'www.itroom.pl - Zdjęcie wyróżniające karte strony internetowe'
        }
    ];

    render() {
        return (
            <section className="offer">
                {this.state.map((value, key) => (
                    <OfferCard
                        key={key}
                        title={value.title}
                        description={value.description}
                        src={value.src}
                        alt={value.src}
                    />
                ))}
            </section>
        );
    }
}
