import React from 'react';
import EventItem from '../common/EventItem';

function EventList() {
    const events = [
        { id: 1, name: 'Event Name 1', description: 'Short description of event 1.', date: 'Event Date' },
        { id: 2, name: 'Event Name 2', description: 'Short description of event 2.', date: 'Event Date' },
        { id: 3, name: 'Event Name 1', description: 'Short description of event 1.', date: 'Event Date' },
        { id: 4, name: 'Event Name 2', description: 'Short description of event 2.', date: 'Event Date' }
    ];

    return (
        <div className="col-xl-10 col-lg-9 col-md-8">
            <div className="row">
                {events.map(event => (
                    <div key={event.id} className="col-lg-3 col-md-4 col-sm-6 menu-col">
                        <EventItem 
                            imgSrc={event.imgSrc} 
                            label={event.name} 
                            disabled={event.disabled || false} 
                            description={`Access: ${event.accessLevel} - ${event.description}`} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventList;
