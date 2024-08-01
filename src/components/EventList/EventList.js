import React, { useState } from 'react';
import EventItem from '../EventItem/EventItem';
import eventData from '../../services/eventData';

function EventList() {

    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage, setEventsPerPage] = useState(10);

    // Calculate the number of pages needed
    const pageCount = Math.ceil(eventData.length / eventsPerPage);
    // Determine the indices for slicing the event data for current display
    const lastEventIndex = currentPage * eventsPerPage;
    const firstEventIndex = lastEventIndex - eventsPerPage;
    // Slice the event data array to get only the events for the current page
    const currentEvents = eventData.slice(firstEventIndex, lastEventIndex);

    // Handler to change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // Handler to change the number of events per page
    const handlePerPageChange = (e) => {
        setEventsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page when changing number of items per page
    };

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
            {/* Pagination and Items Per Page Controls */}
            <div className="d-flex justify-content-between align-items-center my-4">
                {/* Items Per Page Selector */}
                <div>
                    <select className="form-select" value={eventsPerPage} onChange={handlePerPageChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    <span className="ms-2">Items per page | Total: {eventData.length}</span>
                </div>
                {/* Pagination Navigation */}
                <div>
                    <nav>
                        <ul className="pagination mb-0">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <a className="page-link" href="#!" onClick={() => paginate(currentPage - 1)}>Previous</a>
                            </li>
                            {Array.from({ length: pageCount }, (_, index) => (
                                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <a className="page-link" href="#!" onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </a>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === pageCount ? 'disabled' : ''}`}>
                                <a className="page-link" href="#!" onClick={() => paginate(currentPage + 1)}>Next</a>
                            </li>
                        </ul>
                    </nav>
                    <span className="ms-2">Page {currentPage} of {pageCount}</span>
                </div>
            </div>
        </div>
    );
}

export default EventList;
