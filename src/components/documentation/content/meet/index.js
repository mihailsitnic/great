import React, { Component, Fragment } from 'react';
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import './styles.css';

class Meet extends Component {
  
  render() {
    const value = this.props.data[this.props.match.params.path]

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
                cite={value.meet.blockquoteUrl}
              >
                <p
                  className="blockquote__p">
                    {value.meet.blockquoteParagraph}
                  </p>
                <footer
                  className="blockquote__footer">
                    {value.meet.blockquoteFooter}
                    <cite className="blockquote__cite">
                      {value.meet.blockquoteCite}
                    </cite>
                  </footer>
            </blockquote>
            </article>
          </div>
        </section>
        </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.selectorData
})

export default connect(mapStateToProps)(Meet)

