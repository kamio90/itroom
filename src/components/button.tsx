import React from 'react';

interface Props {
    className?: string;
    content?: string;
}

export default class Button extends React.Component<Props, {}> {
    render() {
        const { className, content } = this.props;
        return (
            <button type="button" className={className}>
                {content}
            </button>
        );
    }
}
