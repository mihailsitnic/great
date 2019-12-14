import React from 'react'
import { Redirect, Link } from "react-router-dom"

const Page404 = () => {
    return (
        <section className="page-404">
            <Redirect to="/404" />
            <h1 className="title-404">Страница не найдена</h1>
            <Link className="link-back" to="/">На главную</Link>
        </section>
    )
}

export default Page404
