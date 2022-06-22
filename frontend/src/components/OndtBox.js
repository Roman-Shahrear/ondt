import { Avatar } from '@material-ui/core';
import React from 'react';
import './css/OndtBox.css';

function OndtBox() {
  return (
    <div className='ondtBox'>
        <div className='ondtbox__info'>
            <Avatar />
        </div>
        <div className='ondtBox__ondt'>
        <h5>What is your question or link?</h5>
        </div>
    </div>
  )
}

export default OndtBox;