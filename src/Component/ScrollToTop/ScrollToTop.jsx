import React from 'react'

import { faJetFighterUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollToTop = () => {

    const handleClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <div className='scroll_to_top' onClick={handleClick}>
                <button> <FontAwesomeIcon icon={faJetFighterUp} size="2xl" style={{ color: 'deeppink' }} /> </button>
            </div>
        </div>
    )
}

export default ScrollToTop