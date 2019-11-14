import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, path, ...props }) => {
  // console.log('props ======== ', props)
  // currentPage = 2
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginationList = totalPosts > 1 &&
    <ul className='pagination__list row'>
      {pageNumbers.map(number => (
        <li key={number} className='pagination__li col'>
          <Link
            onClick={() => paginate(number)}
            to={`${props}/${number}`}
            className={`pagination__link ${currentPage === number ? 'pagination__link--active' : ''}`}
          >
            {number}
          </Link>
        </li>
      ))}
    </ul>;

  return (
    <nav className="nav-expenses row">
      {paginationList}
    </nav>
  );
};

export default withRouter(Pagination);