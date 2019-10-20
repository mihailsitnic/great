const data = [
    {
        name: '01. Александр Мень',
        artist: '7 января 1987 года - Рождество Христово',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/01_07011987.mp3',
    },
    {
        name: '02. Александр Мень',
        artist: '7 января 1988 года – Рождество Христово',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/02_07011988.mp3',
    },
    {
        name: '03. Александр Мень',
        artist: '11 января 1987 года – Неделя по рождестве Христовом, прав. Иосифа Обручника',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/03_11011987.mp3',
    },
    {
        name: '04. Александр Мень',
        artist: '19 января 1988 года - Святое Богоявление, Крещение Господне',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/04_19011988.mp3',
    },
    {
        name: '05. Александр Мень',
        artist: '8 февраля 1987 года - Неделя о мытаре и фарисее',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/05_08021987.mp3',
    },
    {
        name: '06. Александр Мень',
        artist: '15 февраля 1988 года - Сретение Господне',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/06_15021988.mp3',
    },
    {
        name: '07. Александр Мень',
        artist: '9 марта 1986 года - Неделя о Страшном суде',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/07_09031986.mp3',
    },
    {
        name: '08. Александр Мень',
        artist: '22 февраля 1987 года - Неделя о Страшном суде',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/08_22021987.mp3',
    },
    {
        name: '09. Александр Мень',
        artist: '12 марта 1989 года – Воспоминание Адамова изгнания. Прощеное воскресенье',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/09_12031989.mp3',
    },
    {
        name: '10. Александр Мень',
        artist: '28 февраля 1988 года - Неделя 1-я Великого поста, Торжество Православия',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/10_28021988.mp3',
    },
    {
        name: '11. Александр Мень',
        artist: '22 марта 1987 года - Неделя 3-я Великого поста, Крестопоклонная',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/11_22031987.mp3',
    },
    {
        name: '12. Александр Мень',
        artist: '6 апреля 1986 года - Неделя 3-я Великого поста, пассия на Крестопоклонной',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/12_06041986.mp3',
    },
    {
        name: '13. Александр Мень',
        artist: '29 марта 1987 года - Неделя 4-я Великого поста, прп. Иоанна Лествичника',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/13_29031987.mp3',
    },
    {
        name: '14. Александр Мень',
        artist: '20 марта 1988 года - Неделя 4-я Великого поста, прп. Иоанна Лествичника',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/14_20031988.mp3',
    },
    {
        name: '15. Александр Мень',
        artist: '8 апреля 1984 года - Неделя 5-я Великого поста, прп. Марии Египетской',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/15_08041984.mp3',
    },
    {
        name: '16. Александр Мень',
        artist: '5 апреля 1987 года - Неделя 5-я Великого поста, прп. Марии Египетской',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/16_05041987.mp3',
    },
    {
        name: '17. Александр Мень',
        artist: '7 апреля 1987 года - Благовещение Пресвятой Богородицы',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/17_07041987.mp3',
    },
    {
        name: '18. Александр Мень',
        artist: '27 апреля 1986 года - Вход Господень в Иерусалим, Вербное воскресенье',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/18_27041986.mp3',
    },
    {
        name: '19. Александр Мень',
        artist: '3 апреля 1980 года - Великий Четверг, воспоминание Тайной Вечери',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/19_03041980.mp3',
    },
    {
        name: '20. Александр Мень',
        artist: '23 апреля 1981 года - Великий Четверг, воспоминание Тайной Вечери',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/20_23041981.mp3',
    },
    {
        name: '21. Александр Мень',
        artist: '10 мая 1987 года - Неделя 4-я по Пасхе, о расслабленном',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/21_10051987.mp3',
    },
    {
        name: '22. Александр Мень',
        artist: '17 мая 1987 года - Неделя 5-я по Пасхе, о самаряныне',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/22_17051987.mp3',
    },
    {
        name: '23. Александр Мень',
        artist: '23 мая 1982 года - Неделя 6-я по Пасхе, о слепом, апостола Симона Зилота',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/23_23051982.mp3',
    },
    {
        name: '24. Александр Мень',
        artist: '29 мая 1988 года - День Святой Троицы. Пятидесятница',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/24_29051988.mp3',
    },
    {
        name: '25. Александр Мень',
        artist: '8 июня 1987 года - День Святого Духа',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/25_08061987.mp3',
    },
    {
        name: '26. Александр Мень',
        artist: '10 июля 1983 года - Неделя 2-я по Пятидесятнице, всех святых в земле Российской просиявших',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/26_10071983.mp3',
    },
    {
        name: '27. Александр Мень',
        artist: '12 июля 1987 года – святых первоверховных апостолов Петра и Павла',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/27_12071987.mp3',
    },
    {
        name: '27. Александр Мень',
        artist: '12 июля 1988 года – святых первоверховных апостолов Петра и Павла',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/28_12071988.mp3',
    },
    {
        name: '29. Александр Мень',
        artist: '19 августа 1987 года - Преображение Господне',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/29_19081987.mp3',
    },
    {
        name: '30. Александр Мень',
        artist: '23 августа 1987 года - попразднство Преображения Господня',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/30_23081987.mp3',
    },
    {
        name: '31. Александр Мень',
        artist: '28 августа 1987 года - Успение Пресвятой Богородицы',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/31_28081987.mp3',
    },
    {
        name: '32. Александр Мень',
        artist: '21 сентября 1980 года - Рождество Пресвятой Богородицы',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/32_21091980.mp3',
    },
    {
        name: '33. Александр Мень',
        artist: '21 сентября 1987 года - Рождество Пресвятой Богородицы',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/33.21091987.mp3',
    },
    {
        name: '34. Александр Мень',
        artist: '8 октября 1986 года - Преставление прп. Сергия, игумена Радонежского',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/34_08101986.mp3',
    },
    {
        name: '35. Александр Мень',
        artist: '18 октября 1987 года. «Каждый раз, когда мы с вами приходим к Святой чаше…»',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/35_18101987.mp3',
    },
    {
        name: '36. Александр Мень',
        artist: '1 ноября 1987 года. «Сегодня мы идем к Тебе…»',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/36_01111987.mp3',
    },
    {
        name: '37. Александр Мень',
        artist: '2 ноября 1986 года. «Дом Божий, куда мы собираемся на молитву…»',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/37_02111986.mp3',
    },
    {
        name: '38. Александр Мень',
        artist: '6 ноября 1988 года - Празднование иконы Божией Матери «Всех скорбящих радость»',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/38_06111988.mp3',
    },
    {
        name: '39. Александр Мень',
        artist: '16 ноября 1986 года. «Сегодня мы с вами приходим в эту Небесную Врачебницу…»',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/39_16111986.mp3',
    },
    {
        name: '40. Александр Мень',
        artist: '29 ноября 1987 года - апостола и евангелиста Матфея',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/40_29111987.mp3',
    },
    {
        name: '41. Александр Мень',
        artist: '30 ноября 1986 года. «Снова нас Господь собрал…»',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/41_30111986.mp3',
    },
    {
        name: '42. Александр Мень',
        artist: '4 декабря 1988 года - Введение во Храм Пресвятой Богородицы.',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/42_04121988.mp3',
    },
    {
        name: '43. Александр Мень',
        artist: 'Даты нет. «Мы пришли в праздничный день…»',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/43_no_date.mp3',
    },
    {
        name: '44. Александр Мень',
        artist: 'Даты нет. «Дай нам подойти к Твоей Святой Чаше…»',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/44_no_date.mp3',
    },
    {
        name: '45. Александр Мень',
        artist: '1982г. «Спаситель говорил Никодиму…»',
        source: 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession/45_1982.mp3',
    },
]

export default data