import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectorName } from 'redux/AC'
import nav from './dataNav'
import './styles.css'

class Home extends Component {
  state = {
    selected: null,
    ul: false,
    li: false
  }

  handleLiOver = item => {
    this.setState({
      selected: item.id,
      li: true
    })
  }

  handleLiOut = () => {
    this.setState({
      selected: null
    })
  }

  handleUlOver = () => {
    this.setState({
      ul: true
    })
  }

  handleUlLeave = () => {
    this.setState({
      ul: false,
      li: false
    })
  }

  handleSelector = item => {
    const action = selectorName(item.linkTitle)
    this.props.dispatch(action)
  }

  render() {
    const {ul, li} = this.state
    const nomeNavigation = nav.map((item, id) =>
      <li
        className={`home-nav__li ${this.state.selected === id ? '--selected' : ''}`}
        onMouseOver={() => this.handleLiOver(item)}
        onMouseLeave={() => this.handleLiOut(item)}
        key={item.id}
        >
        <div className="home-nav__container">
          <img
            className="home-nav__img"
            src={item.img}
            alt={item.linkTitle}
          />
        </div>
        <Link
          onClick={() => this.handleSelector(item)}
          className="home-nav__link-title"
          to={item.linkTo}
        >
          {item.linkTitle}
          </Link>
        <div className="home-nav__details">
          <p className="home-nav__text">{item.text}</p>
          <p className="home-nav__tags">{item.tags}</p>
          <Link
            onClick={() => this.handleSelector(item)}
            className="home-nav__link"
            to={item.linkTo}
          >
            {item.linkText}
          </Link>
        </div>
      </li>
    )
    return (
      <section className="home">
        <header className="home-header">
          <div className="home-wrap">
            <h1 className="home-logo">Positron Solo</h1>
          </div>
        </header>
        <div className="home-wrap">
          
          <div className="row">
            <div className="col-3">
              <p>В свое время Бейли читал об этом. Он слышал, как многие выражали недовольство изобретением атомного реактора. Он и сам сетовал на это, когда уставал или когда что-то не ладилось. Человек всегда чем-то недоволен. В угольном веке люди ворчали по поводу изобретения парового двигателя. В одной из пьес Шекспира герой возмущался тем, что кто-то изобрел порох. А через тысячу лет найдутся такие, что будут недовольны изобретением позитронного мозга.</p>
              <p>– Если вы имеете хоть какое-то представление о роботехнике, мистер Бейли, то должны знать, какую гигантскую работу нужно проделать математикам и электронщикам, чтобы создать позитронный мозг.</p>
            </div>
          </div>
          
          <nav
            className={`home-nav
            ${ul ? '--ul-active' : ''}
            ${li ? '--li-active' : ''}`}
          >
            <p className="advertis" />
            <ul
              className="home-nav-list"
              onMouseOver={this.handleUlOver}
              onMouseLeave={this.handleUlLeave}
            >
              {nomeNavigation}
            </ul>
          </nav>

          <div className="row">
              <div className="col-3">
                <p>Ни один из существующих роботов ни при каких обстоятельствах не мог повредить человеческому существу. В этом заключался Первый Закон Роботехники: «Роботу запрещается причинять вред человеческому существу как действием, так и бездействием». Не было ни одного случая, чтобы позитронный мозг построили без этого запрета, заложенного так глубоко в его базовые цепи, что ни одно мыслимое повреждение не могло разрушить его.</p>
                <p>Какая ирония судьбы! Именно на Земле изобрели позитронный мозг, и именно на Земле роботов впервые стали использовать на производстве. На Земле, а не на Внешних Мирах. Хотя Внешние Миры всегда вели себя так, будто роботы были порождением их цивилизации.</p>
                <p>Он хорошо помнил, как однажды по долгу службы ему пришлось посетить завод по производству роботов. Он видел заводскую книгофильмотеку. Она состояла из длинных книгофильмов, каждый из которых содержал математический анализ какого-нибудь одного типа позитронного мозга. Несмотря на сжатость изложения, в среднем требовалось более часа, чтобы просмотреть один такой фильм. И хотя каждый мозг изготавливали в соответствии со строго заданными неизменными техническими параметрами, невозможно было отыскать ни одной пары одинаковых мозговых систем. Это, как понял Бейли, являлось следствием действия принципа неопределенностей Гейзенберга. Поэтому каждый фильм снабжался приложениями, включающими возможные варианты. Да, эта работа была не из легких. Бейли и не собирался этого отрицать.</p>
                <blockquote cite="https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D1%8B">
                  <cite className="home-blockquote">Айзек Азимов, Стальные пещеры</cite>
                </blockquote>
              </div>
            </div>

        </div>
        <p className="artist">Художник - Ferhat Edizkan</p>
      </section>
    )
  }
}

export default connect()(Home)