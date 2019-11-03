import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group';
import Posts from './posts';
import Pagination from '../pagination';
import './styles.css';

const Audio = props => {

  let id
  switch (props.path) {
    case "a":
      id = 0;
      break;
    case "b":
      id = 1;
      break;
    case "c":
      id = 2;
      break;
    case "d":
      id = 3;
      break;
    default:
      id = 0;
  }

  const meet = props.data;
  const key = Object.keys(meet)[id];
  const value = meet[key]

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setPosts(value.audio);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <CSSTransition
        transitionName = "article"
        transitionAppear
        transitionEnterTimeout = {1000}
        transitionLeaveTimeout = {1000}
        transitionAppearTimeout = {1000}
        component = "div"
      >
      <section className="pagination-section">
        <header className="header">
          <div className="wrapper">
            <h1 className="header-title">Аудио</h1>
          </div>
        </header>
        <section className="paper">
          <div className="wrapper">
            <article className="article">
            <Posts posts={currentPosts} loading={loading} />
            </article>
          </div>
        </section>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
          path={props.match.path}
        />
      </section>
      </CSSTransition>
      
    </Fragment>
  );
};

const mapStateToProps = state => ({
  data: state.selectorData,
  path: state.currentPath
})

export default connect(mapStateToProps)(Audio)