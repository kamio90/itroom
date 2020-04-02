import React from 'react';
import ScrollArea from 'react-scrollbar';
import '../scss/components/portfolioCard.scss';

interface Props {
    src: string;
    alt: string;
    title: string;
    description: string;
    className?: string;
}

export default class PortfolioCard extends React.Component<Props> {
    render() {
        const { src, alt, title, description, className } = this.props;
        return (
            <div className={`portfolio__card portfolio__card${className}`}>
                <div className="laptop">
                    <img src="/images/laptop.png" alt="" />
                    <ScrollArea
                        speed={0.75}
                        horizontal={false}
                        className="portfolio__card__image"
                        smoothScrolling={true}
                    >
                        <img src={src} alt={alt} />
                    </ScrollArea>
                </div>

                <div className="portfolio__card__item">
                    <h2 className="portfolio__card__item__title">{title}</h2>
                    <p className="portfolio__card__item__description">
                        {description}
                    </p>
                </div>
            </div>
        );
    }
}
