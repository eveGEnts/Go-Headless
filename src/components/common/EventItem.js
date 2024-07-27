import React from 'react';
import './EventItem.scss';

function EventItem({ imgSrc, label, disabled, description }) {
    return (
        <div className={`event-item p-3 ${disabled ? 'disabled' : ''}`} role="button" tabIndex="0" aria-disabled={disabled}>
            <div>
                <img src={imgSrc} alt={label} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="fw-bold">{label}</div>
            <div className="small text-secondary fw-bold">{description}</div>
        </div>
    );
}

export default EventItem;
