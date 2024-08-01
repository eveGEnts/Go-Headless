import React, { useState } from 'react';
import EventItem from '../EventItem/EventItem';
import eventData from '../../services/eventData';

function EventList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage, setEventsPerPage] = useState(10);

    const pageCount = Math.ceil(eventData.length / eventsPerPage);
    const lastEventIndex = currentPage * eventsPerPage;
    const firstEventIndex = lastEventIndex - eventsPerPage;
    const currentEvents = eventData.slice(firstEventIndex, lastEventIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handlePerPageChange = (e) => {
        setEventsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page to avoid out-of-range page number
    };

    // Function to calculate page numbers to show
    const getPageNumbers = () => {
        const pageNumbers = [];
        let start = Math.max(currentPage - 2, 1);
        let end = Math.min(start + 4, pageCount);

        if (end === pageCount) { // Adjust the start if end is at the last page
            start = Math.max(end - 4, 1);
        }

        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    return (
        <div className="col-xl-10 col-lg-9 col-md-8 p-3">
            <h4 className='fw-bold'>Explore Events ({eventData.length} records)</h4>
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
                            ticketed={event.ticketed}
                        />
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center '>
                    <select className="form-select form-select-sm" value={eventsPerPage} onChange={handlePerPageChange} style={{maxWidth: '75px'}}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    <span className="ms-2" style={{width: '150px'}}>events per page</span>
                </div>
                <div>
                    <nav>
                        <ul className="pagination mb-0">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <a className="page-link" href="#!" onClick={() => paginate(currentPage - 1)}>
                                    <i class="fa-solid fa-caret-left"></i>
                                </a>
                            </li>
                            {getPageNumbers().map(number => (
                                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                    <a className="page-link" href="#!" onClick={() => paginate(number)}>
                                        {number}
                                    </a>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === pageCount ? 'disabled' : ''}`}>
                                <a className="page-link" href="#!" onClick={() => paginate(currentPage + 1)}>
                                    <i class="fa-solid fa-caret-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    
                </div>
            </div>
        </div>
    );
}

export default EventList;
