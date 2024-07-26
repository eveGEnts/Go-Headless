import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './links.scss';

const Links = () => {
  return (
    <div className="container">
        <div className="row menu-row">

            <div className="col-md-4 menu-col">
                <div className="menu-option p-3" onClick={() => {}}>
                    <div><i className="fa fa-tasks fa-super"></i></div>
                    <div className='fw-bold'>Organizer Module</div>
                </div>
            </div>

            <div className="col-md-4 menu-col">
                <div className="menu-option p-3" onClick={() => {}}>
                    <div><i className="fa fa-calendar-check fa-super"></i></div>
                    <div className='fw-bold'>Event Pages</div>
                </div>
            </div>

            <div className="col-md-4 menu-col">
                <div className="menu-option p-3" onClick={() => {}}>
                    <div><i className="fa fa-shield-halved fa-super"></i></div>
                    <div className='fw-bold'>System Administration</div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Links;

/*
            
          <div className="col-md-4 menu-col">
            <div className="menu-option p-3" onClick={() => {}}>
              <div><i className="fa-solid fa-cloud-arrow-up fa-super"></i></div>
              <div>Import Event</div>
            </div>
          </div>
          <div className="col-md-4 menu-col">
            <div className="menu-option p-3" onClick={() => {}}>
              <div><i className="fa-solid fa-hand fa-super"></i></div>
              <div>Banner Request</div>
            </div>
          </div>
          <div className="col-md-4 menu-col">
            <div className="menu-option p-3" onClick={() => {}}>
              <div><i className="fa fa-panorama fa-super"></i></div>
              <div>Event Graphics Summary</div>
            </div>
          </div>
          <div className="col-md-4 menu-col">
            <div className="menu-option p-3" onClick={() => {}}>
              <div><i className="fa fa-thumbs-up fa-super"></i></div>
              <div>Banner Request Approval</div>
            </div>
          </div>
          <div className="col-md-4 menu-col">
            <div className="menu-option p-3" onClick={() => {}}>
              <div><i className="fa fa-file fa-super"></i></div>
              <div>Asset Management</div>
            </div>
          </div>
          <div className="col-md-4 menu-col">
            <div className="menu-option p-3" onClick={() => {}}>
              <div><i className="fa fa-id-badge fa-super"></i></div>
              <div>User Profile</div>
            </div>
          </div>
          */