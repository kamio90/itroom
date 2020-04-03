import React from 'react';
import OfferCard from '../../components/offercard';
import '../../scss/pages/home/offer.scss';
import Web from '../../assets/desk-laptop-macbook-pro-working-69432.jpg';
import Mobile from '../../assets/black-iphone-7-on-brown-table-699122.jpg';
import Desctop from '../../assets/apple-devices-books-business-coffee-572056.jpg';
import Server from '../../assets/woman-holding-laptop-beside-glass-wall-1181316.jpg';
import Support from '../../assets/woman-wearing-earpiece-using-white-laptop-computer-210647.jpg';
import Learning from '../../assets/working-woman-technology-computer-7374.jpg';
import WebPage from '../../components/icons/webpage';
import ComputerApplication from '../../components/icons/computerapplications';
import ItSupport from '../../components/icons/itsupport';
import MobileApplication from '../../components/icons/mobileapplications';
import Teacher from '../../components/icons/teacher';
import ServerIcon from '../../components/icons/servericon';

interface State {
    [index: number]: {
        title?: string;
        description?: string;
        src?: string;
        alt?: string;
        className?: string;
        modalTitle?: string;
        modalDescription?: string;
        modalSrc?: string;
        modalAlt?: string;
        modalClassName?: string;
        svg?: JSX.Element;
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
            className: '-lightblue',
            modalTitle: 'Kreatywne strony internetowe',
            modalDescription:
                'Tworzymy indywidualne projekty stron internetowych. Zaczynając na projektach dla małych firm, poprzez sklepy internetowe kończąc na zawansowanych serwisach internetowych. W swojej pracy używamy najnowszych technologi oraz najnowszych trendów stosowanych w webdevelopencie. Powierzając nam piecze nad twoim projektem masz pewność, że będzie zrobiony od podstaw oraz doprowadzony do końca idealnie.',
            modalSrc: Web,
            modalAlt:
                'www.itroom.pl - Zdjęcie wyróżniające modal strony internetowe',
            modalClassName: '-lightblue',
            svg: <WebPage />
        },
        {
            title: 'Aplikacje Mobilne',
            description:
                'Oferujemy stworzenie autorskiej aplikacji działającej pod wszytkimi systemami',
            src: Mobile,
            alt: 'www.itroom.pl - Zdjęcie wyróżniające karte aplikacje mobilne',
            className: '-superlightblue',
            modalTitle: 'Kreatywne aplikacje mobilne',
            modalDescription:
                'Masz genialny pomysł na aplikację? Pozwól nam go wykonać. W aktualnych czasach każdy korzysta z rozmaitych aplikacji mobilnych, więc twój pomysł na super aplikacje może przerodzić się w wielki biznes. Czy to gra czy to aplikacja nasz team dołoży wszelkich starań, aby dostarczyć przyszłym użytkownikom jak najlepszych wrażeń. Tworzymy aplikcaję w technologi Cross-Platform. Co to dla ciebie znaczy, że ta sama aplikacja będzie dostępna zarówno na urządzenia z systemem operacyjmym android jak i IOS',
            modalSrc: Mobile,
            modalAlt:
                'www.itroom.pl - Zdjęcie wyróżniające modal aplikacje mobilne',
            modalClassName: '-superlightblue',
            svg: <MobileApplication />
        },
        {
            title: 'Aplikacje Komputerowe',
            description: 'Oferujemy stworzenie programu komputerowego',
            src: Desctop,
            alt:
                'www.itroom.pl - Zdjęcie wyróżniające karte aplikacje komputerowe',
            className: '-darkpurple',
            modalTitle: 'Kreatywne aplikacje komputerowe',
            modalDescription:
                'Korzystamy z wielu aplikacji komputerowych, które ułatwiają nam życie w codziennych czynnościach. Nasza ekipa pomoże Ci rowinąć aktualne aplikacje lub stworzyć zupełnie nową. Możemy połączyć twoją aktualną aplikacje mobilną z aplikacją komputerową, aby uzyskać płyny strumień danych.',
            modalSrc: Desctop,
            modalAlt:
                'www.itroom.pl - Zdjęcie wyróżniające modal aplikacje komputerowe',
            modalClassName: '-darkpurple',
            svg: <ComputerApplication />
        },
        {
            title: 'Rozwiązania serwerowe',
            description: 'Oferujemy optymalizacje oraz zabezpieczenie serwerów',
            src: Server,
            alt:
                'www.itroom.pl - Zdjęcie wyróżniające karte rozwiązań serwerowych',
            className: '-darkyellow',
            modalTitle: 'Kreatywne rozwiązania serwerowe',
            modalDescription:
                'Rozwiązujemy problemy związane z serwerami jak i tak zwaną warstwą backend aplikacji. W dobie wyzyskiwania danych przez osoby nie porządane twoje serwery oraz bazy danych narażone są na przeróżne ataki pozwól nam zająć się bezpieczeństwem twojej aplikacji.',
            modalSrc: Server,
            modalAlt:
                'www.itroom.pl - Zdjęcie wyróżniające modal strony internetowe',
            modalClassName: '-darkyellow',
            svg: <ServerIcon />
        },
        {
            title: 'Wsparcie IT',
            description: 'Oferujemy wsparcie it dla firm',
            src: Support,
            alt: 'www.itroom.pl - Zdjęcie wyróżniające karte wsparcie it',
            className: '-darkred',
            modalTitle: 'Kreatywne wsparcie IT',
            modalDescription:
                'Twoi pracownicy nie radzą sobie z obsługą komputera? Mają problem z formatowaniem tekstu w Word? Czy też nie mieją korzystać z excela? Nie przejmuj się nasza firma przyjedzie do Ciebie, przeprowadzi szkolenie z zarządania komputerem, zarządania zasobami pakietu office czy też naprawi twój zawirusowany komputer.',
            modalSrc: Support,
            modalAlt: 'www.itroom.pl - Zdjęcie wyróżniające modal wsparcie IT',
            modalClassName: '-darkred',
            svg: <ItSupport />
        },
        {
            title: 'Szkolenia IT',
            description: 'Oferujemy szkolenia IT',
            src: Learning,
            alt: 'www.itroom.pl - Zdjęcie wyróżniające karte szkolenia it',
            className: '-darkblue',
            modalTitle: 'Kreatywne szkolenia IT',
            modalDescription:
                'Nasi szkoleniowcy oferują profesionalne podejście do szkoleń programistycznych. Nauczą cię podstaw programowania, wspomogą cię na twojej drodze programistycznej oraz pokażą ci najnowsze trendy związane z branżą IT. Nie zostaniesz sam po naszych szkoleniach w każdym momencie możesz się do nas zwrócić z zapytaniem i zawsze będziemy Ci pomagać.',
            modalSrc: Learning,
            modalAlt: 'www.itroom.pl - Zdjęcie wyróżniające modal szkolenia IT',
            modalClassName: '-darkblue',
            svg: <Teacher />
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
                        modalTitle={value.modalTitle}
                        modalDescription={value.modalDescription}
                        modalAlt={value.modalAlt}
                        modalSrc={value.modalSrc}
                        modalClassName={value.modalClassName}
                        svg={value.svg}
                    />
                ))}
            </section>
        );
    }
}
