const url = 'https://erich-fromm.s3.eu-central-1.amazonaws.com/escape-from-freedom/'

const data = [
    {
        name: '01. Эрих Фромм',
        artist: 'Предисловие к 1-му изданию',
        source: `${url}0_1_01.mp3`,
        id: Math.random()
    },
    {
        name: '02. Эрих Фромм',
        artist: 'Предисловие к 1-му изданию',
        source: `${url}0_1_02.mp3`,
        id: Math.random()
    },
    {
        name: '03. Эрих Фромм',
        artist: 'Предисловие к 25-му изданию',
        source: `${url}0_2_01.mp3`,
        id: Math.random()
    },
    {
        name: '04. Эрих Фромм',
        artist: 'Предисловие к 25-му изданию',
        source: `${url}0_2_02.mp3`,
        id: Math.random()
    },
    {
        name: '05. Эрих Фромм',
        artist: 'Предисловие к 25-му изданию',
        source: `${url}0_2_03.mp3`,
        id: Math.random()
    },
    {
        name: '06. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_01.mp3`,
        id: Math.random()
    },
    {
        name: '07. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_02.mp3`,
        id: Math.random()
    },
    {
        name: '08. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_03.mp3`,
        id: Math.random()
    },
    {
        name: '09. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_04.mp3`,
        id: Math.random()
    },
    {
        name: '10. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_05.mp3`,
        id: Math.random()
    },
    {
        name: '11. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_06.mp3`,
        id: Math.random()
    },
    {
        name: '12. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_07.mp3`,
        id: Math.random()
    },
    {
        name: '13. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_08.mp3`,
        id: Math.random()
    },
    {
        name: '14. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_09.mp3`,
        id: Math.random()
    },
    {
        name: '15. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_10.mp3`,
        id: Math.random()
    },
    {
        name: '16. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_11.mp3`,
        id: Math.random()
    },
    {
        name: '17. Эрих Фромм',
        artist: 'Глава 1. Свобода - психологическая проблема?',
        source: `${url}1_1_12.mp3`,
        id: Math.random()
    },
    {
        name: '18. Эрих Фромм',
        artist: 'Глава 2. Обособление индивида и двойственность свободы',
        source: `${url}2_1_01.mp3`,
        id: Math.random()
    },
    {
        name: '19. Эрих Фромм',
        artist: 'Глава 2. Обособление индивида и двойственность свободы',
        source: `${url}2_1_02.mp3`,
        id: Math.random()
    },
    {
        name: '20. Эрих Фромм',
        artist: 'Глава 2. Обособление индивида и двойственность свободы',
        source: `${url}2_1_03.mp3`,
        id: Math.random()
    },
    {
        name: '21. Эрих Фромм',
        artist: 'Глава 2. Обособление индивида и двойственность свободы',
        source: `${url}2_1_04.mp3`,
        id: Math.random()
    },
    {
        name: '22. Эрих Фромм',
        artist: 'Глава 2. Обособление индивида и двойственность свободы',
        source: `${url}2_1_05.mp3`,
        id: Math.random()
    },
    {
        name: '23. Эрих Фромм',
        artist: 'Глава 2. Обособление индивида и двойственность свободы',
        source: `${url}2_1_06.mp3`,
        id: Math.random()
    },
    {
        name: '24. Эрих Фромм',
        artist: 'Глава 2. Обособление индивида и двойственность свободы',
        source: `${url}2_1_07.mp3`,
        id: Math.random()
    },
    {
        name: '25. Эрих Фромм',
        artist: 'Глава 2. Обособление индивида и двойственность свободы',
        source: `${url}2_1_08.mp3`,
        id: Math.random()
    },
    {
        name: '26. Эрих Фромм',
        artist: 'Глава 2. Обособление индивида и двойственность свободы',
        source: `${url}2_1_09.mp3`,
        id: Math.random()
    },
    {
        name: '27. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_1_01.mp3`,
        id: Math.random()
    },
    {
        name: '28. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_1_02.mp3`,
        id: Math.random()
    },
    {
        name: '29. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_1_03.mp3`,
        id: Math.random()
    },
    {
        name: '30. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_1_04.mp3`,
        id: Math.random()
    },
    {
        name: '31. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_1_05.mp3`,
        id: Math.random()
    },
    {
        name: '32. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_1_06.mp3`,
        id: Math.random()
    },
    {
        name: '33. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_1_07.mp3`,
        id: Math.random()
    },
    {
        name: '34. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_1_08.mp3`,
        id: Math.random()
    },
    {
        name: '35. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_1_09.mp3`,
        id: Math.random()
    },
    {
        name: '36. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_1_10.mp3`,
        id: Math.random()
    },
    {
        name: '37. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_1_11.mp3`,
        id: Math.random()
    },
    {
        name: '38. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_01.mp3`,
        id: Math.random()
    },
    {
        name: '39. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_02.mp3`,
        id: Math.random()
    },
    {
        name: '40. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_03.mp3`,
        id: Math.random()
    },
    {
        name: '41. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_04.mp3`,
        id: Math.random()
    },
    {
        name: '42. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_05.mp3`,
        id: Math.random()
    },
    {
        name: '43. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_06.mp3`,
        id: Math.random()
    },
    {
        name: '44. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_07.mp3`,
        id: Math.random()
    },
    {
        name: '45. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_08.mp3`,
        id: Math.random()
    },
    {
        name: '46. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_09.mp3`,
        id: Math.random()
    },
    {
        name: '47. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_10.mp3`,
        id: Math.random()
    },
    {
        name: '48. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_11.mp3`,
        id: Math.random()
    },
    {
        name: '49. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_12.mp3`,
        id: Math.random()
    },
    {
        name: '50. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_13.mp3`,
        id: Math.random()
    },
    {
        name: '51. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_14.mp3`,
        id: Math.random()
    },
    {
        name: '52. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_15.mp3`,
        id: Math.random()
    },
    {
        name: '53. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_16.mp3`,
        id: Math.random()
    },
    {
        name: '54. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_17.mp3`,
        id: Math.random()
    },
    {
        name: '55. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_18.mp3`,
        id: Math.random()
    },
    {
        name: '56. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_19.mp3`,
        id: Math.random()
    },
    {
        name: '57. Эрих Фромм',
        artist: 'Глава 3. Свобода в эпоху реформации',
        source: `${url}3_2_20.mp3`,
        id: Math.random()
    },
    {
        name: '58. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_01.mp3`,
        id: Math.random()
    },
    {
        name: '59. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_02.mp3`,
        id: Math.random()
    },
    {
        name: '60. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_03.mp3`,
        id: Math.random()
    },
    {
        name: '61. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_04.mp3`,
        id: Math.random()
    },
    {
        name: '62. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_05.mp3`,
        id: Math.random()
    },
    {
        name: '63. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_06.mp3`,
        id: Math.random()
    },
    {
        name: '64. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_07.mp3`,
        id: Math.random()
    },
    {
        name: '65. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_08.mp3`,
        id: Math.random()
    },
    {
        name: '66. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_09.mp3`,
        id: Math.random()
    },
    {
        name: '67. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_10.mp3`,
        id: Math.random()
    },
    {
        name: '68. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_11.mp3`,
        id: Math.random()
    },
    {
        name: '69. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_12.mp3`,
        id: Math.random()
    },
    {
        name: '70. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_13.mp3`,
        id: Math.random()
    },
    {
        name: '71. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_14.mp3`,
        id: Math.random()
    },
    {
        name: '72. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_15.mp3`,
        id: Math.random()
    },
    {
        name: '73. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_16.mp3`,
        id: Math.random()
    },
    {
        name: '74. Эрих Фромм',
        artist: 'Глава 4. Два аспекта свободы для современного человека',
        source: `${url}4_1_17.mp3`,
        id: Math.random()
    },
    {
        name: '75. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_0_01.mp3`,
        id: Math.random()
    },
    {
        name: '76. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_0_02.mp3`,
        id: Math.random()
    },
    {
        name: '77. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_0_03.mp3`,
        id: Math.random()
    },
    {
        name: '78. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_01.mp3`,
        id: Math.random()
    },
    {
        name: '79. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_02.mp3`,
        id: Math.random()
    },
    {
        name: '80. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_03.mp3`,
        id: Math.random()
    },
    {
        name: '81. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_04.mp3`,
        id: Math.random()
    },
    {
        name: '82. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_05.mp3`,
        id: Math.random()
    },
    {
        name: '83. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_06.mp3`,
        id: Math.random()
    },
    {
        name: '84. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_07.mp3`,
        id: Math.random()
    },
    {
        name: '85. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_08.mp3`,
        id: Math.random()
    },
    {
        name: '86. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_09.mp3`,
        id: Math.random()
    },
    {
        name: '87. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_10.mp3`,
        id: Math.random()
    },
    {
        name: '88. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_11.mp3`,
        id: Math.random()
    },
    {
        name: '89. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_12.mp3`,
        id: Math.random()
    },
    {
        name: '90. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_13.mp3`,
        id: Math.random()
    },
    {
        name: '91. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_14.mp3`,
        id: Math.random()
    },
    {
        name: '92. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_15.mp3`,
        id: Math.random()
    },
    {
        name: '93. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_16.mp3`,
        id: Math.random()
    },
    {
        name: '94. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_17.mp3`,
        id: Math.random()
    },
    {
        name: '95. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_18.mp3`,
        id: Math.random()
    },
    {
        name: '96. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_19.mp3`,
        id: Math.random()
    },
    {
        name: '97. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_1_20.mp3`,
        id: Math.random()
    },
    {
        name: '98. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_2_01.mp3`,
        id: Math.random()
    },
    {
        name: '99. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_2_02.mp3`,
        id: Math.random()
    },
    {
        name: '100. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_2_03.mp3`,
        id: Math.random()
    },
    {
        name: '101. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_3_01.mp3`,
        id: Math.random()
    },
    {
        name: '102. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_3_02.mp3`,
        id: Math.random()
    },
    {
        name: '103. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_3_03.mp3`,
        id: Math.random()
    },
    {
        name: '104. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_3_04.mp3`,
        id: Math.random()
    },
    {
        name: '105. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_3_05.mp3`,
        id: Math.random()
    },
    {
        name: '106. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_3_06.mp3`,
        id: Math.random()
    },
    {
        name: '107. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_3_07.mp3`,
        id: Math.random()
    },
    {
        name: '108. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_3_08.mp3`,
        id: Math.random()
    },
    {
        name: '109. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_3_09.mp3`,
        id: Math.random()
    },
    {
        name: '110. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_3_10.mp3`,
        id: Math.random()
    },
    {
        name: '111. Эрих Фромм',
        artist: 'Глава 5. Механизмы "бегства"',
        source: `${url}5_3_11.mp3`,
        id: Math.random()
    },
    {
        name: '112. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_01.mp3`,
        id: Math.random()
    },
    {
        name: '113. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_02.mp3`,
        id: Math.random()
    },
    {
        name: '114. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_03.mp3`,
        id: Math.random()
    },
    {
        name: '115. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_04.mp3`,
        id: Math.random()
    },
    {
        name: '116. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_05.mp3`,
        id: Math.random()
    },
    {
        name: '117. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_06.mp3`,
        id: Math.random()
    },
    {
        name: '118. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_07.mp3`,
        id: Math.random()
    },
    {
        name: '119. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_08.mp3`,
        id: Math.random()
    },
    {
        name: '120. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_09.mp3`,
        id: Math.random()
    },
    {
        name: '121. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_10.mp3`,
        id: Math.random()
    },
    {
        name: '122. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_11.mp3`,
        id: Math.random()
    },
    {
        name: '123. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_12.mp3`,
        id: Math.random()
    },
    {
        name: '124. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_13.mp3`,
        id: Math.random()
    },
    {
        name: '125. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_14.mp3`,
        id: Math.random()
    },
    {
        name: '126. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_15.mp3`,
        id: Math.random()
    },
    {
        name: '127. Эрих Фромм',
        artist: 'Глава 6. Психология нацизма',
        source: `${url}6_1_16.mp3`,
        id: Math.random()
    },
    {
        name: '128. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_1_01.mp3`,
        id: Math.random()
    },
    {
        name: '129. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_1_02.mp3`,
        id: Math.random()
    },
    {
        name: '130. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_1_03.mp3`,
        id: Math.random()
    },
    {
        name: '131. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_1_04.mp3`,
        id: Math.random()
    },
    {
        name: '132. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_1_05.mp3`,
        id: Math.random()
    },
    {
        name: '133. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_1_06.mp3`,
        id: Math.random()
    },
    {
        name: '134. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_1_07.mp3`,
        id: Math.random()
    },
    {
        name: '135. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_1_08.mp3`,
        id: Math.random()
    },
    {
        name: '136. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_1_09.mp3`,
        id: Math.random()
    },
    {
        name: '137. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_2_01.mp3`,
        id: Math.random()
    },
    {
        name: '138. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_2_02.mp3`,
        id: Math.random()
    },
    {
        name: '139. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_2_03.mp3`,
        id: Math.random()
    },
    {
        name: '140. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_2_04.mp3`,
        id: Math.random()
    },
    {
        name: '141. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_2_05.mp3`,
        id: Math.random()
    },
    {
        name: '142. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_2_06.mp3`,
        id: Math.random()
    },
    {
        name: '143. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_2_07.mp3`,
        id: Math.random()
    },
    {
        name: '144. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_2_08.mp3`,
        id: Math.random()
    },
    {
        name: '145. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_2_09.mp3`,
        id: Math.random()
    },
    {
        name: '146. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_2_10.mp3`,
        id: Math.random()
    },
    {
        name: '147. Эрих Фромм',
        artist: 'Глава 7. Свобода и демократия',
        source: `${url}7_2_11.mp3`,
        id: Math.random()
    },
    {
        name: '148. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_01.mp3`,
        id: Math.random()
    },
    {
        name: '149. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_02.mp3`,
        id: Math.random()
    },
    {
        name: '150. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_03.mp3`,
        id: Math.random()
    },
    {
        name: '151. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_04.mp3`,
        id: Math.random()
    },
    {
        name: '152. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_05.mp3`,
        id: Math.random()
    },
    {
        name: '153. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_06.mp3`,
        id: Math.random()
    },
    {
        name: '154. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_07.mp3`,
        id: Math.random()
    },
    {
        name: '155. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_08.mp3`,
        id: Math.random()
    },
    {
        name: '156. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_09.mp3`,
        id: Math.random()
    },
    {
        name: '157. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_10.mp3`,
        id: Math.random()
    },
    {
        name: '158. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_11.mp3`,
        id: Math.random()
    },
    {
        name: '159. Эрих Фромм',
        artist: 'Приложение. Человеческий характер и социальный процесс',
        source: `${url}8_1_12.mp3`,
        id: Math.random()
    },
]

export default data