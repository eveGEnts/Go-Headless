import React from 'react';
import '../../custom.scss';
import institution_logo from '../../assets/test_uni_logo.png';

const SuperHeader = () => {
    return (
        <header className="bg-white super-header">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <a href="#">
                        <img src={institution_logo} alt="Institution Logo" style={{ height: '75px' }} />
                    </a>
                    <h5 className="mb-0 fw-bold">Event Management Platform</h5>
                </div>
            </div>
        </header>
    );
};

export default SuperHeader;
