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
            title: 'www.dentroom.pl',
            description:
                'Strona internetowa dla gabinetu stomatologicznego. Strona typu onepage. Białe i niebieskie kolory sprzyjają branży dentystycznej. Wisienką na torcie są delikatne animacje, które dodają uroku. Prosta, a zarazem bardzo profesionalna strona to nasze motto. Zapraszamy serdecznie do skorzystania z profesionalnych usług stomatologicznych oferowanych przez firmę dentroom.',
            className: ''
        },
        {
            src: GabinetBogusia,
            alt:
                'www.itroom.pl - zdjęcie wyróżniające sekcje realizacje gabinetbogusia',
            title: 'www.gabinetbogusia.pl',
            description:
                'Strona internetowa dla gabinetu stomatologicznego. Strona typu onepage. Białe i niebieskie kolory sprzyjają branży dentystycznej. Wisienką na torcie są delikatne animacje, które dodają uroku. Prosta, a zarazem bardzo profesionalna strona to nasze motto. Zapraszamy serdecznie do skorzystania z profesionalnych usług stomatologicznych oferowanych przez firmę dentroom.',
            className: '-left'
        },
        {
            src: Michalscy,
            alt:
                'www.itroom.pl - zdjęcie wyróżniające sekcje realizacje michalscy',
            title: 'www.michalscy.pl',
            description:
                'Strona internetowa dla gabinetu stomatologicznego. Strona typu onepage. Białe i niebieskie kolory sprzyjają branży dentystycznej. Wisienką na torcie są delikatne animacje, które dodają uroku. Prosta, a zarazem bardzo profesionalna strona to nasze motto. Zapraszamy serdecznie do skorzystania z profesionalnych usług stomatologicznych oferowanych przez firmę dentroom.',
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
