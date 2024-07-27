import React from 'react';

function EventList() {
    const events = [
        { id: 1, name: 'Event Name 1', description: 'Short description of event 1.', date: 'Event Date' },
        { id: 2, name: 'Event Name 2', description: 'Short description of event 2.', date: 'Event Date' },
        { id: 3, name: 'Event Name 1', description: 'Short description of event 1.', date: 'Event Date' },
        { id: 4, name: 'Event Name 2', description: 'Short description of event 2.', date: 'Event Date' }
    ];

    return (
        <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {events.map(event => (
                    <div key={event.id} className="col">
                        <div className="card h-100">
                            <img src="path_to_event_image.jpg" className="card-img-top" alt="Event Image" />
                            <div className="card-body">
                                <h5 className="card-title">{event.name}</h5>
                                <p className="card-text">{event.description}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">{event.date}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventList;
