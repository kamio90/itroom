import React from 'react';
import '../scss/components/offercard.scss';
import { Modal } from './modal';

interface Props {
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
}

export default class OfferCard extends React.Component<Props, {}> {
    state = {
        show: false
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    render() {
        const {
            title,
            description,
            src,
            className,
            modalTitle,
            modalDescription,
            modalClassName,
            svg
        } = this.props;
        return (
            <>
                <div className="card" onClick={this.showModal}>
                    <div
                        className={`card__background card__background${className}`}
                        style={{ backgroundImage: `url(${src})` }}
                    ></div>
                    <div className="card__inner">
                        <h3 className="card__inner__title">{title}</h3>
                        <h4 className="card__inner__description">
                            {description}
                        </h4>
                    </div>
                </div>

                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <div
                        className={`modal__inner__photo modal__inner__photo${modalClassName}`}
                    >
                        {svg}
                    </div>
                    <div
                        className={`modal__inner__description modal__inner__description${modalClassName}`}
                    >
                        <h2 className="modal__inner__title">{modalTitle}</h2>
                        <p>{modalDescription}</p>
                    </div>
                </Modal>
            </>
        );
    }
}
