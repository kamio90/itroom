import React from 'react';
import '../scss/components/nav.scss';

export default class Nav extends React.Component {
    state = {
        open: false
    };

    menuToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <nav className="nav" role="navigation">
                <div className="nav__logo">
                    <img src="/images/itRoom_logo.png" alt="" />
                </div>
                <div
                    className={`${
                        this.state.open
                            ? 'nav__mobile nav__mobile-active'
                            : 'nav__mobile'
                    }`}
                    onClick={this.menuToggle}
                >
                    <div className="nav__mobile__burger">
                        <span className="nav__mobile__burger__item"></span>
                        <span className="nav__mobile__burger__item"></span>
                        <span className="nav__mobile__burger__item"></span>
                    </div>
                </div>
                <ul
                    className={`${
                        this.state.open
                            ? 'nav__list nav__list-active'
                            : 'nav__list'
                    }`}
                >
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
            </nav>
        );
    }
}
