import React from 'react';

import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

//import '../FavoriteIcon/FavoriteIcon_HomePage.scss';
import './EventItem.scss';

function EventItem({ banner, name, location, time, enabled, organizer, ticketed }) {
    const renderTicketInfo = () => {
        switch (ticketed) {
            case true:
                return <div className="small"><i className="fa-solid fa-ticket"></i>&nbsp;Paid ticket</div>;
            case false:
                return <div className="small"><i className="fa-solid fa-ticket"></i>&nbsp;Free registration</div>;
            case null:
            default:
                return null; // Do not render anything if ticketed is null
        }
    };

    let initiallyFavorite = false;
    if (!enabled) initiallyFavorite = null;

    return (
        <div className={`event-item ${enabled ? '' : 'disabled'}`} role="button" tabIndex="0" aria-disabled={!enabled}>
            <div className="banner-container">
                <img src={banner} alt={name} style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className='px-3 pt-3 pb-1'>
                <h5 className="fw-bold text-secondary" id="eventNameLabel">{name}</h5>
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
            <div className="d-flex justify-content-center mb-3">
                <FavoriteIcon 
                    initiallyFavorite={initiallyFavorite} 
                    favoriteNumber={0}
                    enabled={enabled}
                />
            </div>
        </div>
    );
}

export default EventItem;
