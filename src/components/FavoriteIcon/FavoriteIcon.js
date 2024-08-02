import React, { useState } from 'react';

/**
 * Renders a favorite icon that can be toggled on and off.
 * The icon is visible and can be interacted with if `initiallyFavorite` is not null.
 *
 * @param {boolean} initiallyFavorite - Initial state of the favorite icon.
 * @param {number} favoriteNumber - Display number next to the favorite icon.
 * @param {boolean} enabled - Determines if the icon can be interacted with.
 * @returns {JSX.Element} A clickable icon.
 */

function FavoriteIcon({ initiallyFavorite = false, favoriteNumber = 0, enabled = true }) {
    const [isFavorite, setIsFavorite] = useState(initiallyFavorite);

    const toggleFavorite = () => {
        if (enabled) {
            setIsFavorite(!isFavorite);
        }
    };

    // The button style depends on both enabled and isFavorite.
    let buttonStyle = 'btn-danger';
    if (enabled) {
        buttonStyle = isFavorite ? 'btn-danger' : 'btn-outline-danger';
    } else {
        buttonStyle = isFavorite ? 'btn-dark' : 'btn-outline-dark';
    }

    return (
        <div className='d-flex align-items-center fw-bold'>
            <button 
                className={`btn ${buttonStyle}`}
                onClick={toggleFavorite}
                aria-label={isFavorite ? 'Unmark as favorite' : 'Mark as favorite'}
                disabled={!enabled}
            >
                <i className={`fa${isFavorite ? 's' : 'r'} fa-heart`} />
                &nbsp; {favoriteNumber}
            </button>
            
        </div>
    );
}

export default FavoriteIcon;
