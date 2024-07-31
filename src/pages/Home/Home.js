import React from 'react';
import { SuperHeader, Navbar } from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

import FilterSidebar from '../../components/home/FilterSidebar';
import EventList from '../../components/home/EventList';

function Home() {
    return (
        <div id="app">

            <SuperHeader />
            <Navbar />
            
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <FilterSidebar />
                        <EventList />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}


export default Home;