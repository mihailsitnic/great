import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, path }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="nav-expenses row">
      <ul className='pagination__list row'>
        {pageNumbers.map(number => (
          <li key={number} className='pagination__li col'>
            <Link
                onClick={() => paginate(number)}
                to={path}
                className={`pagination__link ${currentPage === number ? 'pagination__link--active' : ''}`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;