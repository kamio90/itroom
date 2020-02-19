import React from 'react';
import '../scss/components/nav.scss';
import Button from './button';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="nav" role="navigation">
                <div className="nav__logo"></div>
                <ul className="nav__list">
                    <li className="nav__list__item">
                        <a href="foo" className="nav__list__item__link">
                            O nas
                        </a>
                    </li>
                    <li className="nav__list__item">
                        <a href="foo" className="nav__list__item__link">
                            Realizacje
                        </a>
                    </li>
                    <li className="nav__list__item">
                        <a href="foo" className="nav__list__item__link">
                            Usługi
                        </a>
                    </li>
                    <li className="nav__list__item">
                        <a href="foo" className="nav__list__item__link">
                            Kontakt
                        </a>
                    </li>
                </ul>
                <Button className="nav__btn" content="Zamów połączenie" />
            </nav>
        );
    }
}
