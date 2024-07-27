import React from 'react';
import './EventItem.scss';

function EventItem({ imgSrc, eventName, disabled, description }) {
    return (
        <div className={`event-item p-3 ${disabled ? 'disabled' : ''}`} role="button" tabIndex="0" aria-disabled={disabled}>
            <div>
                <img src={imgSrc} alt={eventName} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="fw-bold">{eventName}</div>
            <div className="small text-muted">{description}</div>
        </div>
    );
}

export default EventItem;
