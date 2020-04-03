import React from 'react';

import '../../scss/pages/home/hero.scss';
import heroBg from '../../assets/both-hands-stained-with-paints-1161542.jpg';

export default class Hero extends React.Component {
    render() {
        return (
            <header
                className="header"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg})`
                }}
            >
                <h1 className="header__title">
                    <span className="header__title__flicker--fast">No</span>wo
                    <span className="header__title__flicker">czes</span>na Mar
                    <span className="header__title__flicker">ka</span>
                </h1>
            </header>
        );
    }
}
