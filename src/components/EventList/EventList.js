import React, { useState } from 'react';
import EventItem from '../EventItem/EventItem';
import eventData from '../../services/eventData';

function EventList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(5);

    const pageCount = Math.ceil(eventData.length / eventsPerPage);
    const lastEventIndex = currentPage * eventsPerPage;
    const firstEventIndex = lastEventIndex - eventsPerPage;
    const currentEvents = eventData.slice(firstEventIndex, lastEventIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="col-xl-10 col-lg-9 col-md-8 p-3">
            <h4 className='fw-bold'>Explore Events</h4>
            <div className="row">
                {currentEvents.map(event => (
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
            <nav>
                <ul className="pagination">
                    <li className="page-item" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                        <a className="page-link" href="#!">Previous</a>
                    </li>
                    {Array.from({ length: pageCount }, (_, index) => (
                        <li key={index + 1} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                            <a className="page-link" href="#!" onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </a>
                        </li>
                    ))}
                    <li className="page-item" onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageCount}>
                        <a className="page-link" href="#!">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default EventList;
