import React from 'react';
import OfferCard from '../../components/offercard';
import '../../scss/pages/home/offer.scss';
import Web from '../../assets/desk-laptop-macbook-pro-working-69432.jpg';
import Mobile from '../../assets/black-iphone-7-on-brown-table-699122.jpg';
import Desctop from '../../assets/apple-devices-books-business-coffee-572056.jpg';
import Server from '../../assets/woman-holding-laptop-beside-glass-wall-1181316.jpg';
import Support from '../../assets/woman-wearing-earpiece-using-white-laptop-computer-210647.jpg';
import Learning from '../../assets/working-woman-technology-computer-7374.jpg';

interface State {
    [index: number]: {
        title?: string;
        description?: string;
        src?: string;
        alt?: string;
        className?: string;
    };
}

export default class Offer extends React.Component<{}, State> {
    state = [
        {
            title: 'Strony Internetowe',
            description:
                'Oferujemy stworzenie idealnej storny internetowej skrojonej na twoje potrzeby',
            src: Web,
            alt:
                'www.itroom.pl - Zdjęcie wyróżniające karte strony internetowe',
            className: '-lightblue'
        },
        {
            title: 'Aplikacje Mobilne',
            description:
                'Oferujemy stworzenie autorskiej aplikacji działającej pod wszytkimi systemami',
            src: Mobile,
            alt: 'www.itroom.pl - Zdjęcie wyróżniające karte aplikacje mobilne',
            className: '-superlightblue'
        },
        {
            title: 'Aplikacje Komputerowe',
            description: 'Oferujemy stworzenie programu komputerowego',
            src: Desctop,
            alt:
                'www.itroom.pl - Zdjęcie wyróżniające karte aplikacje komputerowe',
            className: '-darkpurple'
        },
        {
            title: 'Rozwiązania serwerowe',
            description: 'Oferujemy optymalizacje oraz zabezpieczenie serwerów',
            src: Server,
            alt:
                'www.itroom.pl - Zdjęcie wyróżniające karte rozwiązań serwerowych',
            className: '-darkyellow'
        },
        {
            title: 'Wsparcie IT',
            description: 'Oferujemy wsparcie it dla firm',
            src: Support,
            alt: 'www.itroom.pl - Zdjęcie wyróżniające karte wsparcie it',
            className: '-darkred'
        },
        {
            title: 'Szkolenia IT',
            description: 'Oferujemy szkolenia IT',
            src: Learning,
            alt: 'www.itroom.pl - Zdjęcie wyróżniające karte szkolenia it',
            className: '-darkblue'
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
                        className={value.className}
                    />
                ))}
            </section>
        );
    }
}
