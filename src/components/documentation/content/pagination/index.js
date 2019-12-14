import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './styles.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, ...props }) => {
  const path = props.location.pathname.slice(0, -2)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginationList = totalPosts > postsPerPage &&
    <ul className='pagination__list row'>
      {pageNumbers.map(number => (
        <li
          key={number}
          className={`pagination__li col ${currentPage === number ? 'pagination__li--active' : ''}`}
        >
          <Link
            onClick={() => paginate(number)}
            to={`${path}/${number}`}
            className="pagination__link"
          >
            {number}
          </Link>
        </li>
      ))}
    </ul>

  return (
    <nav className="nav-expenses row">
      {paginationList}
    </nav>
  )
}

export default withRouter(Pagination)