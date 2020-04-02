import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../../scss/pages/home/footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <h2 className="footer__title">Nasz team</h2>
                    <div className="footer__wrapper">
                        <div className="footer__wrapper__person">
                            <h3 className="footer__wrapper__person__name">
                                Kamil
                            </h3>
                            <div className="footer__wrapper__person__item">
                                <p className="footer__wrapper__person__item__description">
                                    <FontAwesomeIcon icon={faPhone} />
                                </p>
                                <a
                                    className="footer__wrapper__person__item__content"
                                    href="tel:+48519599990"
                                >
                                    519599990
                                </a>
                            </div>
                            <div className="footer__wrapper__person__item">
                                <p className="footer__wrapper__person__item__description">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </p>
                                <a
                                    className="footer__wrapper__person__item__content"
                                    href="mailto:kamil@itroom.pl"
                                >
                                    kamil@itroom.pl
                                </a>
                            </div>
                            <div className="footer__wrapper__person__item">
                                <p className="footer__wrapper__person__item__description">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </p>
                                <a
                                    className="footer__wrapper__person__item__content"
                                    href="https://www.linkedin.com/in/kamilmusia%C5%82/"
                                >
                                    https://www.linkedin.com/in/kamilmusia%C5%82/
                                </a>
                            </div>
                        </div>
                        <div className="footer__wrapper__person">
                            <h3 className="footer__wrapper__person__name">
                                Marcin
                            </h3>
                            <div className="footer__wrapper__person__item">
                                <p className="footer__wrapper__person__item__description">
                                    <FontAwesomeIcon icon={faPhone} />
                                </p>
                                <a
                                    className="footer__wrapper__person__item__content"
                                    href="tel:+48730024171"
                                >
                                    730024171
                                </a>
                            </div>
                            <div className="footer__wrapper__person__item">
                                <p className="footer__wrapper__person__item__description">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </p>
                                <a
                                    className="footer__wrapper__person__item__content"
                                    href="mailto:marcin@itroom.pl"
                                >
                                    marcin@itroom.pl
                                </a>
                            </div>
                            <div className="footer__wrapper__person__item">
                                <p className="footer__wrapper__person__item__description">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </p>
                                <a
                                    className="footer__wrapper__person__item__content"
                                    href="https://www.linkedin.com/in/marcingasiorek91/"
                                >
                                    https://www.linkedin.com/in/marcingasiorek91/
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}
