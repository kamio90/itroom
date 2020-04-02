import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import '../scss/components/modal.scss';

interface Props {
    handleClose: () => void;
    show: boolean;
    children: React.ReactNode;
}

export const Modal: React.FC<Props> = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal modal--open' : 'modal modal--close';

    return (
        <div className={showHideClassName}>
            <section className="modal__inner">
                {children}
                <button className="modal__inner__close" onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </section>
        </div>
    );
};
