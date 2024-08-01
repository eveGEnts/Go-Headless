import React, { useState } from 'react';

function FavoriteIcon({ initiallyFavorite = false }) {
    const [isFavorite, setIsFavorite] = useState(initiallyFavorite);

    const toggleFavorite = () => setIsFavorite(!isFavorite);

    return (
        <i className={`text-danger fa${isFavorite ? 's' : 'r'} fa-heart favorite-icon ${isFavorite ? 'favorite' : ''}`}
           onClick={toggleFavorite}
           aria-label={isFavorite ? 'Unmark as favorite' : 'Mark as favorite'}
           role="button" 
        />
    );
}

export default FavoriteIcon;
