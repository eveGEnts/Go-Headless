import React from 'react';

const SuperHeader = () => {
    return (
        <header className="super-header fixed-top bg-white" style={{ padding: '5px' }}>
            <div className="container-fluid">

                {/* Left part: University or other institution logo */}
                <div className="d-flex justify-content-between">
                    
                    <a href="/path-to-logo">
                        <img src="/static/logo.png" alt="Institution Logo" style={{ height: '100px' }} />
                    </a>
                    
                    <h5 className="mb-0">App Name</h5>

                </div>

                {/* Right part: App name */}
                
            </div>
        </header>
    );
};

export default SuperHeader;
