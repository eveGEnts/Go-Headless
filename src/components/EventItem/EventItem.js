import React, { useState } from 'react';
import './EventItem.scss';

function EventItem({ banner, name, location, time, enabled, organizer, ticketed }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => setIsFavorite(!isFavorite);

    const renderTicketInfo = () => {
        switch(ticketed) {
            case true:
                return <div className="small"><i className="fa-solid fa-ticket"></i>&nbsp;Paid ticket</div>;
            case false:
                return <div className="small"><i className="fa-solid fa-ticket"></i>&nbsp;Free registration</div>;
            case null:
            default:
                return null; // Do not render anything if ticketed is null
        }
    };

    return (
        <div className={`event-item ${enabled ? '' : 'disabled'}`} role="button" tabIndex="0" aria-disabled={!enabled}>

            {/* Event Banner */}
            <div className="banner-container">
                <img src={banner} alt={name} style={{ width: '100%', height: 'auto' }} />
                <i className={`text-danger fa${isFavorite ? 's' : 'r'} fa-heart favorite-icon ${isFavorite ? 'favorite' : ''}`}
                   onClick={toggleFavorite}
                   aria-label={isFavorite ? 'Unmark as favorite' : 'Mark as favorite'}
                   role="button">
                </i>
            </div>

            {/* Event Information */}
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
                {renderTicketInfo()}
            </div>
        </div>
    );
}

export default EventItem;
