import navImg from 'img/home-nav'

const nav = [
    {
        id: 0,
        switch: 'a',
        img: navImg.img01,
        linkTitle: 'Александр Мень',
        text: 'Алекса́ндр Влади́мирович Мень — протоиерей Русской православной церкви, богослов, проповедник, автор книг по богословию, истории христианства и других религий, по основам христианского вероучения, православному богослужению.',
        tags: '#Христианство',
        linkText: 'Ссылка',
        linkTo: '/a/meet',
        selector: 'alexandermen'
    },
    {
        id: 1,
        switch: 'b',
        img: navImg.img02,
        linkTitle: 'Луций Анней Сенека',
        text: 'Лу́ций Анне́й Се́не́ка — римский философ-стоик, поэт и государственный деятель. Воспитатель Нерона и один из крупнейших представителей стоицизма.',
        tags: '#Философия',
        linkText: 'Ссылка',
        linkTo: '/b/meet',
        selector: 'seneca'
    },
    {
        id: 2,
        switch: 'c',
        img: navImg.img03,
        linkTitle: 'Эрих Фромм',
        text: 'Э́рих Зелигманн Фромм — немецкий социолог, философ, социальный психолог, психоаналитик, представитель Франкфуртской школы, один из основателей неофрейдизма и фрейдомарксизма.',
        tags: '#Психология',
        linkText: 'Ссылка',
        linkTo: '/c/meet',
        selector: 'from'
    },
    {
        id: 3,
        switch: 'd',
        img: navImg.img04,
        linkTitle: 'Think about it',
        text: 'Миссия состоит в распространении прекрасных уникальных идей.',
        tags: '#Идеи',
        linkText: 'Ссылка',
        linkTo: '/d/meet',
        selector: 'ideas'
    }
]

export default nav