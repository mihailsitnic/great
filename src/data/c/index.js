import meet from './meet'
import player1 from './audio/player1'
import player2 from './audio/player2'
import player3 from './audio/player3'
import player4 from './audio/player4'
import books from './books'

const cData = {
    id: 2,
    author: 'Эрих Фромм',
    selector: 'from',
    meet: meet,
    books: books,
    audio: [
        {
            id: 1,
            title: 'Искусство любить',
            player: player1,
        },
        {
            id: 2,
            title: 'Иметь или быть',
            player: player2,
        },
        {
            id: 3,
            title: 'Бегство от свободы',
            player: player3,
        },
        {
            id: 4,
            title: 'Sonny',
            player: player4
        }
    ]
}

export default cData;
