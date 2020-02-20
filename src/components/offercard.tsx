import React from 'react';
import '../scss/components/offercard.scss';

interface Props {
    title?: string;
    description?: string;
    src?: string;
    alt?: string;
    className?: string;
}

export default class OfferCard extends React.Component<Props, {}> {
    render() {
        const { title, description, src, className } = this.props;
        return (
            <div className="card">
                <div
                    className={`card__background card__background${className}`}
                    style={{ backgroundImage: `url(${src})` }}
                ></div>
                <div className="card__inner">
                    <h3 className="card__inner__title">{title}</h3>
                    <h4 className="card__inner__description">{description}</h4>
                </div>
            </div>
        );
    }
}
