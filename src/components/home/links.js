import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Links = () => {
  return (
    <div className="card card-primary card-outline mb-3">
      <div className="card-header">
        <h3 className="card-title">
          <i className="fa-solid fa-compass"></i>&nbsp;Quick Links
        </h3>
      </div>
      <div className="card-body">
        <div className="row menu-row">
          <div className="col-md-4 menu-col">
            <div className="menu-option p-3" onClick={() => {}}>
              <div><i className="fa fa-calendar-week fa-super"></i></div>
              <div>Event List</div>
            </div>
          </div>
          <div className="col-md-4 menu-col">
            <div className="menu-option p-3" onClick={() => {}}>
              <div><i className="fa fa-calendar-check fa-super"></i></div>
              <div>Event Calendar</div>
            </div>
          </div>
          <div className="col-md-4 menu-col">
            <div className="menu-option p-3" onClick={() => {}}>
              <div><i className="fa fa-calendar-plus fa-super"></i></div>
              <div>Add Event</div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Links;