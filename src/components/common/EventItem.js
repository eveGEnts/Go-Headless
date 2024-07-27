import React from 'react';
import './EventItem.scss';

function EventItem({ banner, name, location, time, enabled, organizer }) {
    return (
        <div className={`event-item ${enabled ? '' : 'disabled'}`} role="button" tabIndex="0" aria-disabled={!enabled}>
            <div>
                <img src={banner} alt={name} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className='p-3'>
                <h5 className="fw-bold text-secondary">{name}</h5>
                <div className="small mb-1"><i class="fa-regular fa-clock"></i>&nbsp;{time}</div>
                <div className="small mb-1"><i class="fa-solid fa-location-dot"></i>&nbsp;{location}</div>
                <div className="small mb-1"><i class="fa-solid fa-users"></i>&nbsp;{organizer}</div>
            </div>

        </div>
    );
}

export default EventItem;
