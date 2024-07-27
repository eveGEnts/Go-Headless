import React from 'react';
import { SuperHeader, Navbar } from '../components/common/Navbar';
import Footer from '../components/common/Footer';

import FilterSidebar from '../components/home/FilterSidebar';
import EventList from '../components/home/EventList';

function Home() {
    return (
        <div className="container-fluid">
            <SuperHeader />
            <Navbar />

            <div className="row">
                <FilterSidebar />
                <EventList />
            </div>

            <Footer />
        </div>
    );
}


export default Home;