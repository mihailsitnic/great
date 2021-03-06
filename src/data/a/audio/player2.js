const url = 'https://alexandr-men.s3.eu-central-1.amazonaws.com/confession-of-different-years/'

const data = [
    {
        name: '01. Александр Мень',
        artist: '16.10.77 Проп. Память сщмч. Дионисия Ареопагита',
        source: `${url}01_16.10.77.mp3`,
        id: Math.random()
    },
    {
        name: '02. Александр Мень',
        artist: '30.10.77 Проп. «О богаче и Лазаре»',
        source: `${url}02_30.10.77.mp3`,
        id: Math.random()
    },
    {
        name: '03. Александр Мень',
        artist: '11.02.79 Проп. «Об Игнатии Богоносце»',
        source: `${url}03_11.02.79.mp3`,
        id: Math.random()
    },
    {
        name: '04. Александр Мень',
        artist: '25.03.79. Проп. Неделя «Крестопоклонная»',
        source: `${url}04_25.03.79.mp3`,
        id: Math.random()
    },
    {
        name: '05. Александр Мень',
        artist: '25.03.79. Проп. О пророке Исайе (На пассии 3-й недели В.П.)',
        source: `${url}05_25.03.79.mp3`,
        id: Math.random()
    },
    {
        name: '06. Александр Мень',
        artist: '08.04.79 Проп. Неделя Марии Египетской. «Путь веры» Просьба Сыновей Заведеевых',
        source: `${url}06_08.04.79.mp3`,
        id: Math.random()
    },
    {
        name: '07. Александр Мень',
        artist: '15.04.79 Проп. Вербное Воскресенье',
        source: `${url}07_15.04.79.mp3`,
        id: Math.random()
    },
    {
        name: '08. Александр Мень',
        artist: '06.05.79 Проп. Память свв. жен-мироносиц и вмч. Георгия Победоносца',
        source: `${url}08_06.05.79.mp3`,
        id: Math.random()
    },
    {
        name: '09. Александр Мень',
        artist: '03.06.79 Проп. Память равноап. царицы Елены',
        source: `${url}09_03.06.79.mp3`,
        id: Math.random()
    },
    {
        name: '10. Александр Мень',
        artist: '17.06.79 Проп. Неделя Всех Святых',
        source: `${url}10_17.06.79.mp3`,
        id: Math.random()
    },
    {
        name: '11. Александр Мень',
        artist: '26.08.79 Проп. Отдание Преображения Господня, память свт. Тихона Задонского',
        source: `${url}11_26.08.79.mp3`,
        id: Math.random()
    },
    {
        name: '12. Александр Мень',
        artist: '02.09.79 Проп. Память пророка Самуила',
        source: `${url}12_02.09.79.mp3`,
        id: Math.random()
    },
    {
        name: '13. Александр Мень',
        artist: '09.09.79 Проп. «Притча о винограднике»',
        source: `${url}13_09.09.79.mp3`,
        id: Math.random()
    },
    {
        name: '14. Александр Мень',
        artist: '16.09.79 Проп. «О брачном пире»',
        source: `${url}14_16.09.79.mp3`,
        id: Math.random()
    },
    {
        name: '15. Александр Мень',
        artist: '02.12.79 Проп. «Как человек загадывает, а Господь творит»',
        source: `${url}15_02.12.79.mp3`,
        id: Math.random()
    },
    {
        name: '16. Александр Мень',
        artist: '19.01.80 Проп. Крещение Господне',
        source: `${url}16_19.01.80.mp3`,
        id: Math.random()
    },
    {
        name: '17. Александр Мень',
        artist: '10.02.80 Проп. Неделя «О Страшном Суде», память прп. Ефрема Сирина',
        source: `${url}17_10.02.80.mp3`,
        id: Math.random()
    },
    {
        name: '18. Александр Мень',
        artist: '30.03.80 Проп. Вербное Воскресенье',
        source: `${url}18_30.03.80.mp3`,
        id: Math.random()
    },
    {
        name: '19. Александр Мень',
        artist: '18.05.80 Проп. Блаженнее давать, нежели брать. Неделя Св. Отцев I Вс. Собора',
        source: `${url}19_18.05.80.mp3`,
        id: Math.random()
    },
    {
        name: '20. Александр Мень',
        artist: '25.05.80 Проп. День Святой Троицы. Пятидесятница',
        source: `${url}20_25.05.80.mp3`,
        id: Math.random()
    },
    {
        name: '21. Александр Мень',
        artist: '01.06.80 Проп. Неделя всех святых',
        source: `${url}21_01.06.80.mp3`,
        id: Math.random()
    },
    {
        name: '22. Александр Мень',
        artist: '17.08.80 Проп. «О богатом юноше»',
        source: `${url}22_17.08.80.mp3`,
        id: Math.random()
    },
    {
        name: '23. Александр Мень',
        artist: '19.08.80 Проп. Преображение Господне',
        source: `${url}23_19.08.80.mp3`,
        id: Math.random()
    },
    {
        name: '24. Александр Мень',
        artist: '28.08.80 Проп. «Успение Пресвятой Богородицы»',
        source: `${url}24_28.08.80.mp3`,
        id: Math.random()
    },
    {
        name: '25. Александр Мень',
        artist: '14.09.80 Проп. Память прп. Симеона и Марфы',
        source: `${url}25_14.09.80.mp3`,
        id: Math.random()
    },
    {
        name: '26. Александр Мень',
        artist: '21.09.80 Проп. Рождество Пресвятой Богородицы',
        source: `${url}26_21.09.80.mp3`,
        id: Math.random()
    },
    {
        name: '27. Александр Мень',
        artist: '27.09.80 Проп. «Воздвижение Креста Господня»',
        source: `${url}27_27.09.80.mp3`,
        id: Math.random()
    },
    {
        name: '28. Александр Мень',
        artist: '28.09.80 Общ. исповедь. Попразднество Воздвижения Креста',
        source: `${url}28_28.09.80.mp3`,
        id: Math.random()
    },
    {
        name: '29. Александр Мень',
        artist: '23.11.80 Проп. «Пробудись спящий».',
        source: `${url}29_23.11.80.mp3`,
        id: Math.random()
    },
    {
        name: '30. Александр Мень',
        artist: '07.12.80 Проп. Память вмц. Екатерины и св. Григория Понтийского.',
        source: `${url}30_07.12.80.mp3`,
        id: Math.random()
    },
    {
        name: '31. Александр Мень',
        artist: '15.11.81 Проп. «О гадаринском бесноватом»',
        source: `${url}31_15.11.81.mp3`,
        id: Math.random()
    },
    {
        name: '32. Александр Мень',
        artist: '29.11.81 Проп. Память ап. и ев. Матфея',
        source: `${url}32_29.11.81.mp3`,
        id: Math.random()
    },
    {
        name: '33. Александр Мень',
        artist: '07.02.82 Проп. Неделя «О мытаре и фарисее». Свт. Григорий Богослов',
        source: `${url}33_07.02.82.mp3`,
        id: Math.random()
    },
    {
        name: '34. Александр Мень',
        artist: '20.02.82 Проп. Суббота мясопустная. «О посмертии»',
        source: `${url}34_20.02.82.mp3`,
        id: Math.random()
    },
    {
        name: '35. Александр Мень',
        artist: '25.02.82 Проп. Память Иверской иконы Божией Матери',
        source: `${url}35_25.02.82.mp3`,
        id: Math.random()
    },
    {
        name: '36. Александр Мень',
        artist: '10.10.82 Проп. «Призвание апостолов»',
        source: `${url}36_10.10.82.mp3`,
        id: Math.random()
    },
    {
        name: '37. Александр Мень',
        artist: '17.10.82 Проп. Об ап. Павле. «Сила моя в немощи совершается»',
        source: `${url}37_17.10.82.mp3`,
        id: Math.random()
    },
    {
        name: '38. Александр Мень',
        artist: '24.10.82 Проп. Об ап. Филиппе',
        source: `${url}38_24.10.82.mp3`,
        id: Math.random()
    },
    {
        name: '39. Александр Мень',
        artist: '29.07.84 Проп. О терпении по апостолу Павлу',
        source: `${url}39_29.07.84.mp3`,
        id: Math.random()
    },
    {
        name: '40. Александр Мень',
        artist: '05.08.84 Проп. «О вере. Об умножении хлебов»',
        source: `${url}40_05.08.84.mp3`,
        id: Math.random()
    },
    {
        name: '41. Александр Мень',
        artist: '30.03.86 Проп. Неделя свт. Григория Паламы',
        source: `${url}41_30.03.86.mp3`,
        id: Math.random()
    },
    {
        name: '42. Александр Мень',
        artist: '27.04.86 Общ. исповедь. Вербное воскресенье',
        source: `${url}42_27.04.86.mp3`,
        id: Math.random()
    },
    {
        name: '43. Александр Мень',
        artist: '27.04.86 Проп. Вербное Воскресенье',
        source: `${url}43_27.04.86.mp3`,
        id: Math.random()
    },
    {
        name: '44. Александр Мень',
        artist: '24.08.86 (?) Проп. «О Христе, идущем по воде»',
        source: `${url}44_24.08.86.mp3`,
        id: Math.random()
    },
    {
        name: '45. Александр Мень',
        artist: '07.09.86 Проп. «О немилосердном заимодавце»',
        source: `${url}45_07.09.86.mp3`,
        id: Math.random()
    },
    {
        name: '46. Александр Мень',
        artist: '11.01.87 (?) Общ. Исповедь. Память прав. Иосифа Обручника',
        source: `${url}46_11.01.87.mp3`,
        id: Math.random()
    },
    {
        name: '47. Александр Мень',
        artist: '29.03.87 Проп. Неделя прп. Иоанна Лествичника. «Восстань спящий»',
        source: `${url}47_29.03.87.mp3`,
        id: Math.random()
    },
    {
        name: '48. Александр Мень',
        artist: '07.04.87 Общ. исповедь. Благовещение Пресвятой Богородицы',
        source: `${url}48_07.04.87.mp3`,
        id: Math.random()
    },
    {
        name: '49. Александр Мень',
        artist: '07.04.87 Проп. Благовещение Пресвятой Богородицы',
        source: `${url}49_07.04.87.mp3`,
        id: Math.random()
    },
    {
        name: '50. Александр Мень',
        artist: '28.06.87 Проп. Память блж. Августина',
        source: `${url}50_28.06.87.mp3`,
        id: Math.random()
    },
    {
        name: '51. Александр Мень',
        artist: '14.08.87 Проп. Начало Успенского поста. Память мучеников Маккавеев',
        source: `${url}51_14.08.87.mp3`,
        id: Math.random()
    },
    {
        name: '52. Александр Мень',
        artist: '16.08.87 Проп. «Нагорная проповедь»',
        source: `${url}52_16.08.87.mp3`,
        id: Math.random()
    },
    {
        name: '53. Александр Мень',
        artist: '28.08.87 Общ. исповедь. «Успение Пресвятой Богородицы»',
        source: `${url}53_28.08.87.mp3`,
        id: Math.random()
    },
    {
        name: '54. Александр Мень',
        artist: '28.08.87 Проп. «Успение Пресвятой Богородицы»',
        source: `${url}54_28.08.87.mp3`,
        id: Math.random()
    },
    {
        name: '55. Александр Мень',
        artist: '30.08.87 Проп. «О богатом юноше и теплохладности в вере», о матери Терезе',
        source: `${url}55_30.08.87.mp3`,
        id: Math.random()
    },
    {
        name: '56. Александр Мень',
        artist: '22.11.87 Проп. «О Церкви».',
        source: `${url}56_22.11.87.mp3`,
        id: Math.random()
    },
    {
        name: '57. Александр Мень',
        artist: '29.11.87 (?) Общ. исповедь. Память ап. и ев. Матфея',
        source: `${url}57_29.11.87.mp3`,
        id: Math.random()
    },
    {
        name: '58. Александр Мень',
        artist: '04.12.87 Проп. «Введение во храм Пр.Богородицы»',
        source: `${url}58_04.12.87.mp3`,
        id: Math.random()
    },
    {
        name: '59. Александр Мень',
        artist: '20.12.87 Проп. Память свт. Амвросия Медиоланского',
        source: `${url}59_20.12.87.mp3`,
        id: Math.random()
    },
    {
        name: '60. Александр Мень',
        artist: '07.01.88 Общ. Исповедь. Рождество Иисуса Христа',
        source: `${url}60_07.01.88.mp3`,
        id: Math.random()
    },
    {
        name: '61. Александр Мень',
        artist: '19.01.88 Общ. исповедь. «Крещение Господне»',
        source: `${url}61_19.01.88.mp3`,
        id: Math.random()
    },
    {
        name: '62. Александр Мень',
        artist: '20.01.88 Проп. «Собор Иоанна Предтечи»',
        source: `${url}62_20.01.88.mp3`,
        id: Math.random()
    },
    {
        name: '63. Александр Мень',
        artist: '31.01.88 Проп. Неделя «О мытаре и фарисее»',
        source: `${url}63_31.01.88.mp3`,
        id: Math.random()
    },
    {
        name: '64. Александр Мень',
        artist: '14.02.88 Проп. Неделя «О Страшном Суде»',
        source: `${url}64_14.02.88.mp3`,
        id: Math.random()
    },
    {
        name: '65. Александр Мень',
        artist: '13.03.88 Проп. Неделя «Крестопоклонная» («Возьми свой крест»)',
        source: `${url}65_13.03.88.mp3`,
        id: Math.random()
    },
    {
        name: '66. Александр Мень',
        artist: '19.05.88 (?) Проп. Вознесение Господне',
        source: `${url}66_19.05.88.mp3`,
        id: Math.random()
    },
    {
        name: '67. Александр Мень',
        artist: '03.07.88 Проп. «О вечном и временном»',
        source: `${url}67_03.07.88.mp3`,
        id: Math.random()
    },
    {
        name: '68. Александр Мень',
        artist: '17.07.88 Проп. Память прп. Андрея Рублева',
        source: `${url}68_17.07.88.mp3`,
        id: Math.random()
    },
    {
        name: '69. Александр Мень',
        artist: '21.08.88 Проп. Память подвижников Зосимы и Савватия Соловецких',
        source: `${url}69_21.08.88.mp3`,
        id: Math.random()
    },
    {
        name: '70. Александр Мень',
        artist: '20.11.88 Общ. исповедь. Память мучеников в Мелитине',
        source: `${url}70_20.11.88.mp3`,
        id: Math.random()
    },
    {
        name: '71. Александр Мень',
        artist: '14.01.89 Общ. исповедь. Обрезание Господне',
        source: `${url}71_14.01.89.mp3`,
        id: Math.random()
    },
    {
        name: '72. Александр Мень',
        artist: '22.02.89 Проп. «О Суде над миром»',
        source: `${url}72_22.02.89.mp3`,
        id: Math.random()
    },
    {
        name: '73. Александр Мень',
        artist: '05.03.89 Проп. Неделя «О Страшном Суде»',
        source: `${url}73_05.03.89.mp3`,
        id: Math.random()
    },
    {
        name: '74. Александр Мень',
        artist: '19.03.89 Проп. Неделя «Торжество Православия»',
        source: `${url}74_19.03.89.mp3`,
        id: Math.random()
    },
    {
        name: '75. Александр Мень',
        artist: '23.04.89 Проп. Вербное воскресенье',
        source: `${url}75_23.04.89.mp3`,
        id: Math.random()
    },
    {
        name: '76. Александр Мень',
        artist: '19.09.89 Проп. «Преображение Господне»',
        source: `${url}76_19.09.89.mp3`,
        id: Math.random()
    },
    {
        name: '77. Александр Мень',
        artist: '04.12.89 Проп. «Введение во храм Пресвятой Богородицы»',
        source: `${url}77_04.12.89.mp3`,
        id: Math.random()
    }
]

export default data