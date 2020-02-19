import React from 'react';

import '../../scss/pages/home/hero.scss';
import heroBg from '../../assets/sky-space-milky-way-stars-110854.jpg';

export default class Hero extends React.Component {
    render() {
        return (
            <header
                className="header"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <h1 className="header__title">Nowoczesna Marka</h1>
                <h3 className="header__description">
                    Stworzona oraz dopasowywana pod upodobania klientów
                </h3>
            </header>
        );
    }
}
