import React from 'react';
import '../scss/components/offercard.scss';

interface Props {
    title?: string;
    description?: string;
    src?: string;
    alt?: string;
}

export default class OfferCard extends React.Component<Props, {}> {
    render() {
        const { title, description, src } = this.props;
        return (
            <div className="card" style={{ backgroundImage: `url(${src})` }}>
                <h3 className="card__title">{title}</h3>
                <h4 className="card__description">{description}</h4>
            </div>
        );
    }
}
