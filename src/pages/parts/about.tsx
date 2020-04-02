import React from 'react';

import '../../scss/pages/home/about.scss';
import MeetTheTeam from '../../components/icons/meettheteam';

export default class About extends React.Component {
    render() {
        return (
            <section className="about">
                <h2 className="about__title">O Naszej marce</h2>
                <div className="about__content">
                    <div className="about__content__image">
                        <MeetTheTeam />
                    </div>
                    <div className="about__content__wrapper">
                        <h3 className="about__content__wrapper__title">
                            Nasza misja
                        </h3>
                        <p className="about__content__wrapper__description">
                            Naszą misją jest tworzenie najnowszych oraz
                            najlepszych produktów w branży IT. Chcemy, aby nasze
                            produkty były kojarzone z wysoką jakością jak i
                            niezawodnością. Dążymy do zbudowania bazy produktów
                            kojarzonych z naszą marką, które będą używane na
                            codzień przez nasze społeczeństwo.
                        </p>
                        <h3 className="about__content__wrapper__title">
                            Aplikacje
                        </h3>
                        <p className="about__content__wrapper__description">
                            We wszystkie tworzone przez nas aplikacje wkładamy
                            serce. Troszczymy się o nie od początku, aż do
                            momentu wypuszczenia ich do produkcji. Często
                            interesujemy się naszymi produktami również po ich
                            oddaniu prowadzimy skrupulatne statystyki dzięki,
                            którym wyciągamy wnioski, aby nasze kolejne produkty
                            były lepsze.
                        </p>
                        <h3 className="about__content__wrapper__title">
                            Marka
                        </h3>
                        <p className="about__content__wrapper__description">
                            Tworzymy markę ITroom grupę handlową ASroom, do
                            której należą sami profesionaliści rozpoczynając od
                            branży finansowej, poprzez branżę dystrybucyjną
                            kończąc na gałężi IT. Każdy z grupy ASroom jest
                            profesionalistą w każdym calu dbający o zadowolenie
                            swoich klientów.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
