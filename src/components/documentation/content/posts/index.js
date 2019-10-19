import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="title-h2">Loading...</h2>;
  }

  return (
    <ul className='video__list'>
      {posts.map(item => (
        <li key={item.id} className="video__li">
            <h4 className="title-h4">{item.title}</h4>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${item.url}`}
                frameBorder="0"
                title={item.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </li>
      ))}
    </ul>
  );
};

export default Posts;