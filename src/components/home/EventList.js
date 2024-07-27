import React from 'react';
import EventItem from '../common/EventItem';
import TestBanner from '../../assets/test.png';

function EventList() {
    const events = [
        { id: 1, banner: TestBanner, name: 'Test event 1',location: 'Test location', time: '2024-07-11', enabled: true, organizer: 'organizer'},
        { id: 2, banner: TestBanner, name: 'Test event 2',location: 'Test location', time: '2024-07-11', enabled: true, organizer: 'organizer'},
        { id: 3, banner: TestBanner, name: 'Test event 3',location: 'Test location', time: '2024-07-11', enabled: true, organizer: 'organizer'},
        { id: 4, banner: TestBanner, name: 'Test event 4',location: 'Test location', time: '2024-07-11', enabled: false, organizer: 'organizer'},
        { id: 5, banner: TestBanner, name: 'Test event 5',location: 'Test location', time: '2024-07-11', enabled: true, organizer: 'organizer'},
        { id: 6, banner: TestBanner, name: 'Test event 6',location: 'Test location', time: '2024-07-11', enabled: true, organizer: 'organizer'},
    ];

    return (
        <div className="col-xl-10 col-lg-9 col-md-8 p-3">

            <h4 className='fw-bold'>Upcoming Events</h4>
            <div className="row">
                {events.map(event => (
                    <div key={event.id} className="col-xl-3 col-lg-4 col-sm-6 menu-col">
                        <EventItem 
                            banner={event.banner} 
                            name={event.name} 
                            location={event.location} 
                            time={event.time} 
                            enabled={event.enabled} 
                            organizer={event.organizer} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventList;
