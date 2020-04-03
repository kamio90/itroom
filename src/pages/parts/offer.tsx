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
                'Oferujemy tworzenie stron internetowych pod potrzeby i oczekiwania klienta',
            src: Web,
            alt:
                'www.itroom.pl - Zdjęcie wyróżniające karte strony internetowe',
            className: '-lightblue',
            modalTitle: 'Kreatywne strony internetowe',
            modalDescription:
                'Tworzymy indywidualne projekty stron internetowych. Zaczynając od prostych nie skomplikpowanych stron poprzez nowoczesne progresive web app na sklepach internetowych kończąc. W swojej pracy używamy najnowszych technologi oraz trendów stosowanych w webdevelopencie. Powierzając nam piecze nad Waszym projektem masz pewność, że będzie zrobiony od podstaw do końca.',
            modalSrc: Web,
            modalAlt:
                'www.itroom.pl - Zdjęcie wyróżniające modal strony internetowe',
            modalClassName: '-lightblue',
            svg: <WebPage />
        },
        {
            title: 'Aplikacje Mobilne',
            description:
                'Tworzymy autorskie aplikacje mobilne zgodnie z trendami rynkowymi i potrzebami klienta',
            src: Mobile,
            alt: 'www.itroom.pl - Zdjęcie wyróżniające karte aplikacje mobilne',
            className: '-superlightblue',
            modalTitle: 'Kreatywne aplikacje mobilne',
            modalDescription:
                'Masz genialny pomysł na aplikację? Pozwól nam go wykonać. W aktualnych czasach każdy korzysta z rozmaitych aplikacji mobilnych, więc Twój pomysł na super aplikacje może przerodzić się w wielki biznes. Czy to gra czy to aplikacja nasz team dołoży wszelkich starań, aby dostarczyć przyszłym użytkownikom jak najlepszych wrażeń. Tworzymy aplikcaję w technologi Cross-Platform co znaczy, że aplikacja będzie dostępna na urządzeniach Android i IOS',
            modalSrc: Mobile,
            modalAlt:
                'www.itroom.pl - Zdjęcie wyróżniające modal aplikacje mobilne',
            modalClassName: '-superlightblue',
            svg: <MobileApplication />
        },
        {
            title: 'Aplikacje Komputerowe',
            description:
                'Staramy się wspierać naszych klientów w ich potrzebach związanych z aplikacjami komputerowymi',
            src: Desctop,
            alt:
                'www.itroom.pl - Zdjęcie wyróżniające karte aplikacje komputerowe',
            className: '-darkpurple',
            modalTitle: 'Kreatywne aplikacje komputerowe',
            modalDescription:
                'Na codzien korzystamy z wielu aplikacji komputerowych, internetowych i moblinych. Często irytując się ich niekompatibilnością. Nasz Team pomoże udrożnić przpływ danych, dostosować aplikację do twoich potrzeb lub stworzyć nową.',
            modalSrc: Desctop,
            modalAlt:
                'www.itroom.pl - Zdjęcie wyróżniające modal aplikacje komputerowe',
            modalClassName: '-darkpurple',
            svg: <ComputerApplication />
        },
        {
            title: 'Rozwiązania serwerowe',
            description:
                'Wszytko związane z chmurą i optymalizacją i bezpieczeństwem serwerów',
            src: Server,
            alt:
                'www.itroom.pl - Zdjęcie wyróżniające karte rozwiązań serwerowych',
            className: '-darkyellow',
            modalTitle: 'Kreatywne rozwiązania serwerowe',
            modalDescription:
                'Pomagamy wejść w nową e-rzeczywistość, czyli praca zdalna, praca w chmurze Rozwiązujemy problemy związane z serwerami. Pomagamy w optymalizacji, poprawnej konfiguracji i właściwym bezpieczeństwie danych.',
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
                'Masz problem z komputerem, systemem operacyjnym, chcesz zarchiwizować dane czy zoptymlizować pracę w sieci. Skontaktuj się z nami',
            modalSrc: Support,
            modalAlt: 'www.itroom.pl - Zdjęcie wyróżniające modal wsparcie IT',
            modalClassName: '-darkred',
            svg: <ItSupport />
        },
        {
            title: 'Szkolenia IT',
            description:
                'Na naszych szkoleniach nauczysz się podstaw programowania, tajemnic związanych z back-end i front-end',
            src: Learning,
            alt: 'www.itroom.pl - Zdjęcie wyróżniające karte szkolenia it',
            className: '-darkblue',
            modalTitle: 'Kreatywne szkolenia IT',
            modalDescription:
                'Szkolimy zarówno z obsługi podstawowych programów komputerowych np MSOffice, jak również przekazujemy specialistyczną wiedzę dotyczącą programowania front-end i back-end.',
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
