import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import {
  AssignmentTurnedInOutlined,
  PeopleAltOutlined,
  NotificationsOutlined,
  ExpandMore,
  Search,
} from '@material-ui/icons';
import { Avatar, Button, Input } from '@material-ui/core';
import './css/OndtHeader.css';
import {Modal} from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CloseIcon from '@material-ui/icons/Close';

function OndtHeader() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState();
  const close =<CloseIcon />;
  return (
    <div className='oHeader'>
      <div className='oHeader-content'>
        <div className='oHeader__logo'>
          <img src = "https://i0.wp.com/www.tutorsondemand.com/wp-content/uploads/2021/07/logo-JPG__2_-removebg-preview-2.png?resize=150%2C150&ssl=1"
          alt ="logo"
          />
        </div>
            <div className='oHeader__icons'>
              <div className='oHeader__icon'>
                <HomeIcon />
              </div>
              <div className='oHeader__icon'>
                <FeaturedPlayListOutlinedIcon/>
              </div>
              <div className='oHeader__icon'>
                <AssignmentTurnedInOutlined/>
              </div>
              <div className='oHeader__icon'>
                <PeopleAltOutlined/>
              </div>
              <div className='oHeader__icon'>
                <NotificationsOutlined/>
              </div>
            </div>
            <div className='oHeader_input'>
              <Search />
              <input type = "text" placeholder='Search question' />
            </div>
            <div className='oHeader_Rem'>
              <Avatar />
            </div>
            <Button onClick= {() => setIsModalOpen(true)}>Add Question</Button>
            <Modal 
            open ={isModalOpen}
              closeIcon={close}
              onClose={() => setIsModalOpen(false)}
              closeOnEsc
              center
              closeOnOverlayClick={false}
              styles={{
                overlay:{
                  height: 'auto',
                },
              }}
            >
              <div className='modal__title'>
                <h5> Add Question </h5>
                <h5> Share Link </h5>
              </div>
              <div className='modal__info'>
                <Avatar className='avatar'/>
                <div className='modal_scop'>
                  <PeopleAltOutlined />
                  <p>Public</p>
                  <ExpandMore />
                </div>
              </div>
              <div className='modal__Field'>
                <Input type='text' placeholder="start your question with
                'What','How','Why' etc"/>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
                >
                  <Input 
                  type='text'
                  value={inputUrl}
                  onChange = {(e) => setInputUrl(e.target.value)}
                  style={{
                    margin: '5px 0',
                    border: '1px solid lightgray',
                    padding: '10px',
                    outline: '2px solid #000',
                  }}
                  placeholder='Optional: inclue a link
                   that gives context'
                  />
                  {inputUrl !== "" && <img style={{
                    height: '40vh',
                    objectFit:'contain',
                  }} src={inputUrl} 
                  alt="displayimage" />}
                </div>
              </div>
              <div className='modal_buttons'>
                <button className='cancel' onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type='submit' className='add'>
                  Add Question
                </button>
                
              </div>
            </Modal>
      </div>
    </div>
  );
}

export default OndtHeader;