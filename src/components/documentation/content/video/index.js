import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'
import Posts from './posts'
import BurgerMenu from '../../../burger-menu'
import Pagination from '../pagination'
import './styles.css'

const VideoComponent = props => {
  const currentData = props.data[props.match.params.path]

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      setPosts(currentData.video)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
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
            <h1 className="header-title">Видео</h1>
            <BurgerMenu path={props.match.params.path} />
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
        />
      </section>
      </CSSTransition>
      
    </>
  )
}

const mapStateToProps = state => ({
  data: state.selectorData
})

export default connect(mapStateToProps)(VideoComponent)