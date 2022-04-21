import React from 'react';

import Subheader from './subheader/Subheader'
import MainSection from './main-section/Main-section'
import NewArrivals from './new-arrivals/New-arrivals'
import Popular from './popular/Popular'

const Main = () => {
    return (
        <React.Fragment>
            <main role='main'>
                <Subheader/>
                <MainSection/>
                <NewArrivals/>
                <Popular/>
		    </main>
        </React.Fragment>
    )
}

export default Main;