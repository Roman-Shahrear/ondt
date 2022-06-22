import React from 'react';
import OndtHeader from './OndtHeader';
import "./css/Ondt.css";
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function Ondt() {
  return (
    <div className='ondt'>
       <OndtHeader />
        <div className='ondt__contents'>
            <div className='ondt__content'>
              <Sidebar />
              <Feed />
              <Widget />
            </div>
        </div> 
    </div>
  );
}

export default Ondt;