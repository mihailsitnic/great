import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="title-h2">Loading...</h2>;
  }

  return (
    <ul className='books__list'>
      {posts.map(item => (
        <li key={item.id} className="row book-item">
            <div className="col-3">
            <img className="book-img" src={item.img} alt={item.title} />
          </div>
          <div className="col-9">
            <h3 className="title-h4">{item.title}</h3>
            <p className="book-description">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
