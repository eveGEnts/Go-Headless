import React, { useState } from 'react';

/**
 * Renders a favorite icon that can be toggled on and off.
 * The icon is visible and can be interacted with if `initiallyFavorite` is not null.
 * 
 * @param {boolean|null} initiallyFavorite - Initial state of the favorite icon. If null, the icon will not be displayed.
 * @returns {JSX.Element|null} A clickable icon if `initiallyFavorite` is not null, otherwise null.
 */

function FavoriteIcon({ initiallyFavorite = false }) {
    const [isFavorite, setIsFavorite] = useState(initiallyFavorite);

    const toggleFavorite = () => setIsFavorite(!isFavorite);

    // Do not display the icon if initiallyFavorite is null
    if (initiallyFavorite === null) {
        return null;
    }

    return (
        <i className={`text-danger fa${isFavorite ? 's' : 'r'} fa-heart favorite-icon ${isFavorite ? 'favorite' : ''}`}
           onClick={toggleFavorite}
           aria-label={isFavorite ? 'Unmark as favorite' : 'Mark as favorite'}
           role="button" 
        />
    );
}

export default FavoriteIcon;
