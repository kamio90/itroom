import React from 'react';

import '../../scss/pages/home/about.scss';
import MeetTheTeam from '../../components/icons/meettheteam';

export default class About extends React.Component {
    render() {
        return (
            <section className="about">
                <h2 className="about__title">Kim jesteśmy</h2>
                <div className="about__content">
                    <div className="about__content__image">
                        <MeetTheTeam />
                    </div>
                    <div className="about__content__wrapper">
                        <div className="about__content__wrapper__row">
                            <h3 className="about__content__wrapper__title">
                                Marka
                            </h3>
                            <p className="about__content__wrapper__description">
                                ITroom to brand należący do firmy ASroom sp
                                z.o.o. Tworzymy zespół, który skupia
                                profesionalistów. Poczynając od branży
                                finansowej, poprzez dystrybucję, wsparcie
                                inżynieryjne na gałężi IT kończąc. Każdy z nas
                                jest profesionalistą w swojej dziedzinie i swoją
                                wiedzą chce służyć klientom.
                            </p>
                        </div>
                        <div className="about__content__wrapper__row">
                            <h3 className="about__content__wrapper__title">
                                Nasza misja
                            </h3>
                            <p className="about__content__wrapper__description">
                                Naszą misją jest tworzenie najnowszych oraz
                                najlepszych produktów w branży IT. Chcemy, aby
                                te produkty były kojarzone z jakością i
                                niezawodnością. Zawsze dążymy do stworzenia
                                produktów, które spełnią oczekiwania rynku i
                                klienta i chcemy, aby nasza marka wspierała na
                                codzień społeczeństwo.
                            </p>
                        </div>
                        <div className="about__content__wrapper__row">
                            <h3 className="about__content__wrapper__title">
                                Aplikacje
                            </h3>
                            <p className="about__content__wrapper__description">
                                We wszystkie tworzone przez nas aplikacje
                                wkładamy serce. Troszczymy się o nie od
                                początku, aż do momentu oddania do użytkowania.
                                Interesujemy się nimi również po ich wdrożeniu,
                                prowadzimy skrupulatne statystyki dzięki, którym
                                wyciągamy wnioski, aby nasze kolejne produkty
                                były doskonalsze i dawały większe wartości
                                dodane dla naszych klientów.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
