import meet from './meet'
import video from './video'
import books from './books'
import player1 from './audio/player1'
import player2 from './audio/player2'

const aData = {
    id: 0,
    author: 'Александр Мень',
    selector: 'alexandermen',
    meet: meet,
    video: video,
    books: books,
    audio: [
        {
            id: 1,
            title: 'Исповедальные проповеди',
            player: player1,
        },
        {
            id: 2,
            title: 'Проповеди разных лет',
            player: player2,
        }
    ]
}

export default aData;
