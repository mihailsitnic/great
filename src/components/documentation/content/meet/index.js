import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import icons from '../../../../img/icons'
import './styles.css'

function Meet(props) {

  const renderLink = () => {
    const path = props.match.params.path;
    return path === 'a' || path === 'd' ? <Link className="go" to={`/${path}/video/1`}>Вперёд<img src={icons.arrowRight} alt="img"/></Link> : <Link className="go" to={`/${path}/audio/1`}>Вперёд<img src={icons.arrowRight} alt="img"/></Link>
  }
  
  const currentData = props.data[props.match.params.path]

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
      <div>
        <header className="header">
          <div className="wrapper">
            <h1 className="header-title">Знакомство</h1>
          </div>
        </header>
        <section className="paper">
        <div className="wrapper">
          <article className="article">
            <blockquote
              className="blockquote"
              cite={currentData.meet.blockquoteUrl}
            >
              <p className="blockquote__p">
                  {currentData.meet.blockquoteParagraph}
              </p>
              <footer className="blockquote__footer">
                  {currentData.meet.blockquoteFooter}
                  <cite className="blockquote__cite">
                    {currentData.meet.blockquoteCite}
                  </cite>
                </footer>
            </blockquote>
            {renderLink()}
          </article>
          
        </div>
      </section>
      </div>
      </CSSTransition>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  data: state.selectorData
})

export default connect(mapStateToProps)(Meet)

