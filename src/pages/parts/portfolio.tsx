import React from 'react';
import PortfolioCard from '../../components/portfolioCard';
import Dentroom from '../../assets/dentroom.png';
import GabinetBogusia from '../../assets/gabinetbogusia.png';
import Michalscy from '../../assets/michalscy.png';

import '../../scss/pages/home/portfolio.scss';

interface State {
    [index: number]: {
        src: string;
        alt: string;
        title: string;
        description: string;
        className?: string;
    };
}

export default class Portfolio extends React.Component<{}, State> {
    state = [
        {
            src: Dentroom,
            alt:
                'www.itroom.pl - zdjęcie wyróżniające sekcje realizacje dentroom',
            title: 'dentroom.pl',
            description:
                'Kompleksowa obsługa gabinetu dentystycznego począwszy od wizualizacji - strona internetowa, konfiguracja sieci, zabezpieczenia, wsparcie IT, zdalny monitoring i kontrola dostępu.',
            className: ''
        },
        {
            src: GabinetBogusia,
            alt:
                'www.itroom.pl - zdjęcie wyróżniające sekcje realizacje gabinetbogusia',
            title: 'gabinetbogusia.pl',
            description:
                'Obsługa wizualna firmy z branży kosmetycznej. Zgodnie z życzeniem klienta i jego oczekiwaniami zaimplementowano sprawdzony i dobrze sprawdzony system CMS, który umożliwia samodzielne modyfikowanie treści',
            className: '-left'
        },
        {
            src: Michalscy,
            alt:
                'www.itroom.pl - zdjęcie wyróżniające sekcje realizacje michalscy',
            title: 'michalscy.pl',
            description:
                'Branża cukiernicza to było wyzwanie... Indywidualne potrzeby klienta zostały przełożone na ekran komputera przez co wszyscy możemy podziwiać jego doskonałe wypieki',
            className: ''
        }
    ];

    render() {
        return (
            <section className="portfolio">
                {this.state.map((value, key) => (
                    <PortfolioCard
                        src={value.src}
                        alt={value.alt}
                        title={value.title}
                        description={value.description}
                        className={value.className}
                        key={key}
                    />
                ))}
            </section>
        );
    }
}
