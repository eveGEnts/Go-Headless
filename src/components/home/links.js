import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './links.scss';
import evegents_logo from '../../assets/eveGEnts_logo.svg';

const MenuOption = ({ iconClass, label, disabled }) => {
    return (
        <div className={`menu-option p-3 ${disabled ? 'disabled' : ''}`} role="button" tabIndex="0" aria-disabled={disabled}>
            <div><i className={`fa ${iconClass} fa-super`}></i></div>
            <div className="fw-bold">{label}</div>
         </div>
    );
};
  
const Links = () => {
    return (
        <div className="outer-container">
            <div className="container">

                <div className="row">
                    <div className="col-12 text-center">
                        <img src={evegents_logo} className="mb-2" alt="eveGEnts Logo" style={{maxWidth: '400px'}} />
                        <h3 className='fw-bold text-primary'>Welcome to eveGEnts</h3>
                    </div>
                </div>

                <div className="row menu-row">
                    <div className="col-md-4 menu-col">
                        <MenuOption iconClass="fa-tasks" label="Organizer Module" disabled={false} />
                    </div>
                    <div className="col-md-4 menu-col">
                        <MenuOption iconClass="fa-calendar-check" label="Event Pages" disabled={false} />
                    </div>
                    <div className="col-md-4 menu-col">
                        <MenuOption iconClass="fa-shield-halved" label="System Administration" disabled={true} />
                    </div>
                </div>

                { /*
                <div className="row menu-row">
                    <div className="col-md-4 menu-col">
                        <MenuOption iconClass="fa-tasks" label="Organizer Module" disabled={false} />
                    </div>
                    <div className="col-md-4 menu-col">
                        <MenuOption iconClass="fa-calendar-check" label="Event Pages" disabled={false} />
                    </div>
                    <div className="col-md-4 menu-col">
                        <MenuOption iconClass="fa-shield-halved" label="System Administration" disabled={true} />
                    </div>
                </div>
                */ }

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