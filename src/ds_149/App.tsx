import React, { useState } from 'react'
import {Tabs} from './src/tree/components/tabs/tabs';
import {TABS} from './src/tree/components/constants';
import {Report} from './src/tree/lists/report';
import {FilterLine} from './src/tree/components/filters/filterLine';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';

function App() {
    const [activeTabNum, setActiveTabNum] = useState(TABS.filter(item => item.type === 1).map(item => item.type)[0])

    return(
        <div className="container-fluid text-center">
            <Tabs changeTab={(tab) => setActiveTabNum(tab)}/>
            <FilterLine />
            <Report numTab = {activeTabNum}/>
        </div>
    )
}
export default App;