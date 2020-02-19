import React from 'react';

interface Props {
    title?: string;
    description?: string;
}

export default class OfferCard extends React.Component<Props, {}> {
    render() {
        const { title, description } = this.props;
        return (
            <div className="card">
                <h3>{title}</h3>
                <h4>{description}</h4>
            </div>
        );
    }
}
