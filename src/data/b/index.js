import meet from './meet'
import books from './books'
import player1 from './audio/player1'

const bData = {
    id: 1,
    author: 'Луций Анней Сенека',
    selector: 'seneca',
    meet: meet,
    books: books,
    audio: [
        {
            id: 1,
            title: 'Нравственные письма к Луцилию',
            player: player1,
        }
    ]
}

export default bData