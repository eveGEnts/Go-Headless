import React from 'react';

import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

import './EventItem.scss';

function EventItem({enabled, banner, name, location, time, shortDescription, organizer, ticketed }) {
    const renderTicketInfo = () => {
        switch (ticketed) {
            case true:
                return <div className="small"><i className="fa-solid fa-ticket fa-fw"></i>&nbsp;Paid tickets</div>;
            case false:
                return <div className="small"><i className="fa-solid fa-ticket fa-fw"></i>&nbsp;Free registration</div>;
            case null:
            default:
                return null;
        }
    };

    let initiallyFavorite = false;
    //if (!enabled) initiallyFavorite = null;

    return (
        <div className={`event-item ${enabled ? '' : 'disabled'}`} role="button" tabIndex="0" aria-disabled={!enabled}>
            
            {/* Banner */}
            <div className="banner-container">
                <img src={banner} alt={name} style={{ width: '100%', height: 'auto' }} />
            </div>

            {/* Brief info */}
            <div className='px-3 pt-3 pb-1'>
                <h5 className="fw-bold text-secondary" id="eventNameLabel">{name}</h5>

                {/* Time */}
                <div className="small mb-1">
                    <i className="fa-regular fa-clock fa-fw" aria-label="Time"></i>&nbsp;{time}
                </div>

                {/* Location */}
                <div className="small mb-1">
                    <i className="fa-solid fa-location-dot fa-fw" aria-label="Location"></i>&nbsp;{location}
                </div>

                {/* Organizer */}
                <div className="small mb-1">
                    <i className="fa-solid fa-users fa-fw" aria-label="Organizer"></i>&nbsp;{organizer}
                </div>

                {/* Short description */}
                <div className="small mb-1">
                    <i className="fa-regular fa-comment fa-fw" aria-label="Short description"></i>&nbsp;{shortDescription}
                </div>
                
                {renderTicketInfo()}
            </div>

            {/* Like button */}
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
