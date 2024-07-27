import React from 'react';
import { SuperHeader, Navbar } from '../components/common/Navbar';
import Footer from '../components/common/Footer';

import FilterSidebar from '../components/home/FilterSidebar';
import EventList from '../components/home/EventList';

function Home() {
    return (
        <div>
            <SuperHeader />
            <Navbar />

            <div className="container-fluid">
                <div className="row pt-3 ps-3 pe-1">
                    <FilterSidebar />
                    <EventList />
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Home;