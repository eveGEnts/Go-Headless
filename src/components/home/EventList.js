import React from 'react';
import EventItem from '../common/EventItem';

function EventList() {
    const events = [
        { id: 1, name: 'Event Name 1', description: 'Short description of event 1.', date: 'Event Date' },
        { id: 2, name: 'Event Name 2', description: 'Short description of event 2.', date: 'Event Date' },
        { id: 3, name: 'Event Name 3', description: 'Short description of event 3.', date: 'Event Date' },
        { id: 4, name: 'Event Name 4', description: 'Short description of event 4.', date: 'Event Date', disabled: true },
        { id: 5, name: 'Event Name 5', description: 'Short description of event 5.', date: 'Event Date' },
        { id: 6, name: 'Event Name 6', description: 'Short description of event 6.', date: 'Event Date' },
        { id: 7, name: 'Event Name 7', description: 'Short description of event 7.', date: 'Event Date' },
        { id: 8, name: 'Event Name 8', description: 'Short description of event 8.', date: 'Event Date' },
        { id: 9, name: 'Event Name 9', description: 'Short description of event 9.', date: 'Event Date' },
        { id: 10, name: 'Event Name 10', description: 'Short description of event 10.', date: 'Event Date' },
        { id: 11, name: 'Event Name 11', description: 'Short description of event 11.', date: 'Event Date' },
        { id: 12, name: 'Event Name 12', description: 'Short description of event 12.', date: 'Event Date' },
        { id: 13, name: 'Event Name 13', description: 'Short description of event 13.', date: 'Event Date' },
        { id: 14, name: 'Event Name 14', description: 'Short description of event 14.', date: 'Event Date' },
        //{ id: 15, name: 'Event Name 15', description: 'Short description of event 15.', date: 'Event Date' },
        //{ id: 16, name: 'Event Name 16', description: 'Short description of event 16.', date: 'Event Date' },
        //{ id: 17, name: 'Event Name 17', description: 'Short description of event 17.', date: 'Event Date' },
        //{ id: 18, name: 'Event Name 18', description: 'Short description of event 18.', date: 'Event Date' },
        //{ id: 19, name: 'Event Name 19', description: 'Short description of event 19.', date: 'Event Date' },
    ];

    return (
        <div className="col-xl-10 col-lg-9 col-md-8">
            <div className="row">
                {events.map(event => (
                    <div key={event.id} className="col-lg-3 col-md-4 col-sm-6 menu-col">
                        <EventItem 
                            imgSrc={event.imgSrc} 
                            eventName={event.name} 
                            disabled={event.disabled || false} 
                            description={event.description} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventList;
