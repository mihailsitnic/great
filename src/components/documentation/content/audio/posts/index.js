import React from 'react';
import Player from '../player'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="title-h2">Loading...</h2>;
  }

  return (
    <ul className='audio__list'>
      {posts.map(item => (
        <li key={item.id} className="audio__li">
            <h3 className="title-h3">{item.title}</h3>
            <Player
              tracks={item.player}
              key={item.id}
            />
        </li>
      ))}
    </ul>
  );
};

export default Posts;