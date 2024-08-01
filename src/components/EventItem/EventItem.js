import React, { useState } from 'react';
import './EventItem.scss';

function EventItem({ banner, name, location, time, enabled, organizer }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={`event-item ${enabled ? '' : 'disabled'}`} role="button" tabIndex="0" aria-disabled={!enabled}>
            <div className="banner-container">
                <img src={banner} alt={name} style={{ width: '100%', height: 'auto' }} />
                <i className={`fa${isFavorite ? 's' : 'r'} fa-heart favorite-icon`}
                   onClick={toggleFavorite}
                   style={{ color: 'var(--bs-danger)' }}
                   aria-label={isFavorite ? 'Unmark as favorite' : 'Mark as favorite'}
                   role="button">
                </i>
            </div>
            <div className='p-3'>
                <h5 className="fw-bold text-secondary">{name}</h5>
                <div className="small mb-1">
                    <i className="fa-regular fa-clock" aria-label="Event time"></i>&nbsp;{time}
                </div>
                <div className="small mb-1">
                    <i className="fa-solid fa-location-dot" aria-label="Event location"></i>&nbsp;{location}
                </div>
                <div className="small mb-1">
                    <i className="fa-solid fa-users" aria-label="Event organizer"></i>&nbsp;{organizer}
                </div>
            </div>
        </div>
    );
}

export default EventItem;
