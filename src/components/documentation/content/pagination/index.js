import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import icons from '../../../../img/icons'
import './styles.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, ...props }) => {
  const path = props.location.pathname.slice(0, -2)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginationList = totalPosts >= postsPerPage &&
    <div className="pagination">
      <p className="pagination__number">
        <span className="pagination__number-txt">0{currentPage}</span>
        <span className="pagination__number-txt--active">/ 0{pageNumbers.length}</span>
      </p>
    </div>



  return (
    <>
      <div className="pagination__line">
        <div className="pagination__line--active" style={{width: currentPage / pageNumbers.length * 100 + '%'}} />
      </div>
      <div className="pagination__nav row">
          <Link
            to={`${path}/${currentPage > 1 ? currentPage -1 : 1}`}
            onClick={() => currentPage > 1 ? paginate(currentPage -1) : null}
            className="pagination__left col-6"
          >
            <div className="pagination-list">{paginationList}</div>
            <img
              src={icons.arrowRight}
              alt="img"
              className="pagination__arrow--left"
            />
          </Link>

          <Link
            to={`${path}/${currentPage + 1}`}
            to={`${path}/${currentPage < pageNumbers.length ? currentPage +1 : currentPage}`}
            onClick={() => currentPage < pageNumbers.length ? paginate(currentPage +1) : null}
            className="pagination__right col-6"
          >
            <img
              src={icons.arrowRight}
              alt="img"
              className="pagination__arrow--right"
            />
          </Link>
      </div>
    </>
  )
}

export default withRouter(Pagination)