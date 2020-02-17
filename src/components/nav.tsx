import React from 'react';
import '../scss/nav/nav.scss';
import Button from './button';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="nav" role="navigation">
                <div className="nav__logo">a</div>
                <ul className="nav__list">a</ul>
                <Button className="nav__btn" content="Zamów połączenie" />
            </nav>
        );
    }
}
