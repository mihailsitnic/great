import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="title-h2">Loading...</h2>;
  }

  return (
    <ul className='video__list'>
      {posts.map(item => {
        if (item.tag === 'youtube') {
          return (
            <li key={item.id} className="video__li">
                <h4 className="title-h4">{item.title}</h4>
                <iframe
                    className="iframe"
                    src={`https://www.youtube.com/embed/${item.url}`}
                    frameBorder="0"
                    title={item.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </li>
          )
        } else if (item.tag === 'ted') {
          return (
            <li key={item.id} className="video__li">
              <h4 className="title-h4">{item.title}</h4>
              <iframe
                className="iframe"
                title={item.title}
                src={`https://embed.ted.com/talks/${item.url}`}
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              />
                <ul className="video-description">
                  {item.description.map(item =>
                    <li key={item.id} className="video-description__li">
                      {item.text}
                    </li>
                  )}
                </ul>
            </li>
          )
        }
        return <div />
      })}
    </ul>
  );
};

export default Posts;
