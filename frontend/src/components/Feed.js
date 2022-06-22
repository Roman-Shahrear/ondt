import React from 'react'
import OndtBox from './OndtBox';
import './css/Feed.css';
import Post from './Post';
function Feed() {
  return (
    <div className='feed'>
        <OndtBox />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  );
}

export default Feed;