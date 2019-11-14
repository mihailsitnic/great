const url = 'https://lucius-annaeus-seneca.s3.eu-central-1.amazonaws.com/letters/'

const data = [
    {
        name: '01. Луций Анней Сенека',
        artist: 'Письмо 1',
        source: `${url}L001_01.mp3`,
        id: Math.random()
    },
    {
        name: '02. Луций Анней Сенека',
        artist: 'Письмо 2',
        source: `${url}L002_01.mp3`,
        id: Math.random()
    },
    {
        name: '03. Луций Анней Сенека',
        artist: 'Письмо 3',
        source: `${url}L003_01.mp3`,
        id: Math.random()
    },
    {
        name: '04. Луций Анней Сенека',
        artist: 'Письмо 4',
        source: `${url}L004_01.mp3`,
        id: Math.random()
    },
    {
        name: '05. Луций Анней Сенека',
        artist: 'Письмо 5',
        source: `${url}L005_01.mp3`,
        id: Math.random()
    },
    {
        name: '06. Луций Анней Сенека',
        artist: 'Письмо 6',
        source: `${url}L006_01.mp3`,
        id: Math.random()
    },
    {
        name: '07. Луций Анней Сенека',
        artist: 'Письмо 7',
        source: `${url}L007_01.mp3`,
        id: Math.random()
    },
    {
        name: '08. Луций Анней Сенека',
        artist: 'Письмо 8',
        source: `${url}L008_01.mp3`,
        id: Math.random()
    },
    {
        name: '09. Луций Анней Сенека',
        artist: 'Письмо 9',
        source: `${url}L009_01.mp3`,
        id: Math.random()
    },
    {
        name: '10. Луций Анней Сенека',
        artist: 'Письмо 9.2',
        source: `${url}L009_02.mp3`,
        id: Math.random()
    },
    {
        name: '11. Луций Анней Сенека',
        artist: 'Письмо 9.3',
        source: `${url}L009_03.mp3`,
        id: Math.random()
    },
    {
        name: '12. Луций Анней Сенека',
        artist: 'Письмо 10',
        source: `${url}L010_01.mp3`,
        id: Math.random()
    },
    {
        name: '13. Луций Анней Сенека',
        artist: 'Письмо 11',
        source: `${url}L011_01.mp3`,
        id: Math.random()
    },
    {
        name: '14. Луций Анней Сенека',
        artist: 'Письмо 12',
        source: `${url}L012_01.mp3`,
        id: Math.random()
    },
    {
        name: '15. Луций Анней Сенека',
        artist: 'Письмо 13',
        source: `${url}L013_01.mp3`,
        id: Math.random()
    },
    {
        name: '16. Луций Анней Сенека',
        artist: 'Письмо 13.2',
        source: `${url}L013_02.mp3`,
        id: Math.random()
    },
    {
        name: '17. Луций Анней Сенека',
        artist: 'Письмо 14',
        source: `${url}L014_01.mp3`,
        id: Math.random()
    },
    {
        name: '18. Луций Анней Сенека',
        artist: 'Письмо 14.2',
        source: `${url}L014_02.mp3`,
        id: Math.random()
    },
    {
        name: '19. Луций Анней Сенека',
        artist: 'Письмо 15',
        source: `${url}L015_01.mp3`,
        id: Math.random()
    },
    {
        name: '20. Луций Анней Сенека',
        artist: 'Письмо 16',
        source: `${url}L016_01.mp3`,
        id: Math.random()
    },
    {
        name: '21. Луций Анней Сенека',
        artist: 'Письмо 17',
        source: `${url}L017_01.mp3`,
        id: Math.random()
    },
    {
        name: '22. Луций Анней Сенека',
        artist: 'Письмо 18',
        source: `${url}L018_01.mp3`,
        id: Math.random()
    },
    {
        name: '23. Луций Анней Сенека',
        artist: 'Письмо 19',
        source: `${url}L019_01.mp3`,
        id: Math.random()
    },
    {
        name: '24. Луций Анней Сенека',
        artist: 'Письмо 20',
        source: `${url}L020_01.mp3`,
        id: Math.random()
    },
    {
        name: '25. Луций Анней Сенека',
        artist: 'Письмо 21',
        source: `${url}L021_01.mp3`,
        id: Math.random()
    },
    {
        name: '26. Луций Анней Сенека',
        artist: 'Письмо 22',
        source: `${url}L022_01.mp3`,
        id: Math.random()
    },
    {
        name: '27. Луций Анней Сенека',
        artist: 'Письмо 22.2',
        source: `${url}L022_02.mp3`,
        id: Math.random()
    },
    {
        name: '28. Луций Анней Сенека',
        artist: 'Письмо 23',
        source: `${url}L023_01.mp3`,
        id: Math.random()
    },
    {
        name: '29. Луций Анней Сенека',
        artist: 'Письмо 24',
        source: `${url}L024_01.mp3`,
        id: Math.random()
    },
    {
        name: '30. Луций Анней Сенека',
        artist: 'Письмо 24.2',
        source: `${url}L024_02.mp3`,
        id: Math.random()
    },
    {
        name: '31. Луций Анней Сенека',
        artist: 'Письмо 24.3',
        source: `${url}L024_03.mp3`,
        id: Math.random()
    },
    {
        name: '32. Луций Анней Сенека',
        artist: 'Письмо 25',
        source: `${url}L025_01.mp3`,
        id: Math.random()
    },
    {
        name: '33. Луций Анней Сенека',
        artist: 'Письмо 26',
        source: `${url}L026_01.mp3`,
        id: Math.random()
    },
    {
        name: '34. Луций Анней Сенека',
        artist: 'Письмо 27',
        source: `${url}L027_01.mp3`,
        id: Math.random()
    },
    {
        name: '35. Луций Анней Сенека',
        artist: 'Письмо 28',
        source: `${url}L028_01.mp3`,
        id: Math.random()
    },
    {
        name: '36. Луций Анней Сенека',
        artist: 'Письмо 29',
        source: `${url}L029_01.mp3`,
        id: Math.random()
    },
    {
        name: '37. Луций Анней Сенека',
        artist: 'Письмо 30',
        source: `${url}L030_01.mp3`,
        id: Math.random()
    },
    {
        name: '38. Луций Анней Сенека',
        artist: 'Письмо 30.2',
        source: `${url}L030_02.mp3`,
        id: Math.random()
    },
    {
        name: '39. Луций Анней Сенека',
        artist: 'Письмо 31',
        source: `${url}L031_01.mp3`,
        id: Math.random()
    },
    {
        name: '40. Луций Анней Сенека',
        artist: 'Письмо 32',
        source: `${url}L032_01.mp3`,
        id: Math.random()
    },
    {
        name: '41. Луций Анней Сенека',
        artist: 'Письмо 33',
        source: `${url}L033_01.mp3`,
        id: Math.random()
    },
    {
        name: '42. Луций Анней Сенека',
        artist: 'Письмо 34',
        source: `${url}L034_01.mp3`,
        id: Math.random()
    },
    {
        name: '43. Луций Анней Сенека',
        artist: 'Письмо 35',
        source: `${url}L035_01.mp3`,
        id: Math.random()
    },
    {
        name: '44. Луций Анней Сенека',
        artist: 'Письмо 36',
        source: `${url}L036_01.mp3`,
        id: Math.random()
    },
    {
        name: '45. Луций Анней Сенека',
        artist: 'Письмо 37',
        source: `${url}L037_01.mp3`,
        id: Math.random()
    },
    {
        name: '46. Луций Анней Сенека',
        artist: 'Письмо 38',
        source: `${url}L038_01.mp3`,
        id: Math.random()
    },
    {
        name: '47. Луций Анней Сенека',
        artist: 'Письмо 39',
        source: `${url}L039_01.mp3`,
        id: Math.random()
    },
    {
        name: '48. Луций Анней Сенека',
        artist: 'Письмо 40',
        source: `${url}L040_01.mp3`,
        id: Math.random()
    },
    {
        name: '49. Луций Анней Сенека',
        artist: 'Письмо 41',
        source: `${url}L041_01.mp3`,
        id: Math.random()
    },
    {
        name: '50. Луций Анней Сенека',
        artist: 'Письмо 42',
        source: `${url}L042_01.mp3`,
        id: Math.random()
    },
    {
        name: '51. Луций Анней Сенека',
        artist: 'Письмо 43',
        source: `${url}L043_01.mp3`,
        id: Math.random()
    },
    {
        name: '52. Луций Анней Сенека',
        artist: 'Письмо 44',
        source: `${url}L044_01.mp3`,
        id: Math.random()
    },
    {
        name: '53. Луций Анней Сенека',
        artist: 'Письмо 45',
        source: `${url}L045_01.mp3`,
        id: Math.random()
    },
    {
        name: '54. Луций Анней Сенека',
        artist: 'Письмо 46',
        source: `${url}L046_01.mp3`,
        id: Math.random()
    },
    {
        name: '55. Луций Анней Сенека',
        artist: 'Письмо 47',
        source: `${url}L047_01.mp3`,
        id: Math.random()
    },
    {
        name: '56. Луций Анней Сенека',
        artist: 'Письмо 47.2',
        source: `${url}L047_02.mp3`,
        id: Math.random()
    },
    {
        name: '57. Луций Анней Сенека',
        artist: 'Письмо 48',
        source: `${url}L048_01.mp3`,
        id: Math.random()
    },
    {
        name: '58. Луций Анней Сенека',
        artist: 'Письмо 49',
        source: `${url}L049_01.mp3`,
        id: Math.random()
    },
    {
        name: '59. Луций Анней Сенека',
        artist: 'Письмо 50',
        source: `${url}L050_01.mp3`,
        id: Math.random()
    },
    {
        name: '60. Луций Анней Сенека',
        artist: 'Письмо 51',
        source: `${url}L051_01.mp3`,
        id: Math.random()
    },
    {
        name: '61. Луций Анней Сенека',
        artist: 'Письмо 52',
        source: `${url}L052_01.mp3`,
        id: Math.random()
    },
    {
        name: '62. Луций Анней Сенека',
        artist: 'Письмо 53',
        source: `${url}L053_01.mp3`,
        id: Math.random()
    },
    {
        name: '63. Луций Анней Сенека',
        artist: 'Письмо 54',
        source: `${url}L054_01.mp3`,
        id: Math.random()
    },
    {
        name: '64. Луций Анней Сенека',
        artist: 'Письмо 55',
        source: `${url}L055_01.mp3`,
        id: Math.random()
    },
    {
        name: '65. Луций Анней Сенека',
        artist: 'Письмо 56',
        source: `${url}L056_01.mp3`,
        id: Math.random()
    },
    {
        name: '66. Луций Анней Сенека',
        artist: 'Письмо 56.2',
        source: `${url}L056_02.mp3`,
        id: Math.random()
    },
    {
        name: '67. Луций Анней Сенека',
        artist: 'Письмо 57',
        source: `${url}L057_01.mp3`,
        id: Math.random()
    },
    {
        name: '68. Луций Анней Сенека',
        artist: 'Письмо 58',
        source: `${url}L058_01.mp3`,
        id: Math.random()
    },
    {
        name: '69. Луций Анней Сенека',
        artist: 'Письмо 58.2',
        source: `${url}L058_02.mp3`,
        id: Math.random()
    },
    {
        name: '70. Луций Анней Сенека',
        artist: 'Письмо 58.3',
        source: `${url}L058_03.mp3`,
        id: Math.random()
    },
    {
        name: '71. Луций Анней Сенека',
        artist: 'Письмо 58.4',
        source: `${url}L058_04.mp3`,
        id: Math.random()
    },
    {
        name: '72. Луций Анней Сенека',
        artist: 'Письмо 59',
        source: `${url}L059_01.mp3`,
        id: Math.random()
    },
    {
        name: '73. Луций Анней Сенека',
        artist: 'Письмо 59',
        source: `${url}L059_02.mp3`,
        id: Math.random()
    },
    {
        name: '74. Луций Анней Сенека',
        artist: 'Письмо 60',
        source: `${url}L060_01.mp3`,
        id: Math.random()
    },
    {
        name: '75. Луций Анней Сенека',
        artist: 'Письмо 61',
        source: `${url}L061_01.mp3`,
        id: Math.random()
    },
    {
        name: '76. Луций Анней Сенека',
        artist: 'Письмо 62',
        source: `${url}L062_01.mp3`,
        id: Math.random()
    },
    {
        name: '77. Луций Анней Сенека',
        artist: 'Письмо 63',
        source: `${url}L063_01.mp3`,
        id: Math.random()
    },
    {
        name: '78. Луций Анней Сенека',
        artist: 'Письмо 63.2',
        source: `${url}L063_02.mp3`,
        id: Math.random()
    },
    {
        name: '79. Луций Анней Сенека',
        artist: 'Письмо 64',
        source: `${url}L064_01.mp3`,
        id: Math.random()
    },
    {
        name: '80. Луций Анней Сенека',
        artist: 'Письмо 65',
        source: `${url}L065_01.mp3`,
        id: Math.random()
    },
    {
        name: '81. Луций Анней Сенека',
        artist: 'Письмо 65.2',
        source: `${url}L065_02.mp3`,
        id: Math.random()
    },
    {
        name: '82. Луций Анней Сенека',
        artist: 'Письмо 65.3',
        source: `${url}L065_03.mp3`,
        id: Math.random()
    },
    {
        name: '83. Луций Анней Сенека',
        artist: 'Письмо 66',
        source: `${url}L066_01.mp3`,
        id: Math.random()
    },
    {
        name: '84. Луций Анней Сенека',
        artist: 'Письмо 66.2',
        source: `${url}L066_02.mp3`,
        id: Math.random()
    },
    {
        name: '85. Луций Анней Сенека',
        artist: 'Письмо 66.3',
        source: `${url}L066_03.mp3`,
        id: Math.random()
    },
    {
        name: '86. Луций Анней Сенека',
        artist: 'Письмо 66.4',
        source: `${url}L066_04.mp3`,
        id: Math.random()
    },
    {
        name: '87. Луций Анней Сенека',
        artist: 'Письмо 66.5',
        source: `${url}L066_05.mp3`,
        id: Math.random()
    },
    {
        name: '88. Луций Анней Сенека',
        artist: 'Письмо 66.6',
        source: `${url}L066_06.mp3`,
        id: Math.random()
    },
    {
        name: '89. Луций Анней Сенека',
        artist: 'Письмо 66.7',
        source: `${url}L066_07.mp3`,
        id: Math.random()
    },
    {
        name: '90. Луций Анней Сенека',
        artist: 'Письмо 67',
        source: `${url}L067_01.mp3`,
        id: Math.random()
    },
    {
        name: '91. Луций Анней Сенека',
        artist: 'Письмо 67.2',
        source: `${url}L067_02.mp3`,
        id: Math.random()
    },
    {
        name: '92. Луций Анней Сенека',
        artist: 'Письмо 68',
        source: `${url}L068_01.mp3`,
        id: Math.random()
    },
    {
        name: '93. Луций Анней Сенека',
        artist: 'Письмо 69',
        source: `${url}L069_01.mp3`,
        id: Math.random()
    },
    {
        name: '94. Луций Анней Сенека',
        artist: 'Письмо 70',
        source: `${url}L070_01.mp3`,
        id: Math.random()
    },
    {
        name: '95. Луций Анней Сенека',
        artist: 'Письмо 70.2',
        source: `${url}L070_02.mp3`,
        id: Math.random()
    },
    {
        name: '96. Луций Анней Сенека',
        artist: 'Письмо 70.3',
        source: `${url}L070_03.mp3`,
        id: Math.random()
    },
    {
        name: '97. Луций Анней Сенека',
        artist: 'Письмо 71',
        source: `${url}L071_01.mp3`,
        id: Math.random()
    },
    {
        name: '98. Луций Анней Сенека',
        artist: 'Письмо 71.2',
        source: `${url}L071_02.mp3`,
        id: Math.random()
    },
    {
        name: '99. Луций Анней Сенека',
        artist: 'Письмо 71.3',
        source: `${url}L071_03.mp3`,
        id: Math.random()
    },
    {
        name: '100. Луций Анней Сенека',
        artist: 'Письмо 71.4',
        source: `${url}L071_04.mp3`,
        id: Math.random()
    },
    {
        name: '101. Луций Анней Сенека',
        artist: 'Письмо 71.5',
        source: `${url}L071_05.mp3`,
        id: Math.random()
    },
    {
        name: '102. Луций Анней Сенека',
        artist: 'Письмо 72',
        source: `${url}L072_01.mp3`,
        id: Math.random()
    },
    {
        name: '103. Луций Анней Сенека',
        artist: 'Письмо 73',
        source: `${url}L073_01.mp3`,
        id: Math.random()
    },
    {
        name: '104. Луций Анней Сенека',
        artist: 'Письмо 73.2',
        source: `${url}L073_02.mp3`,
        id: Math.random()
    },
    {
        name: '105. Луций Анней Сенека',
        artist: 'Письмо 74',
        source: `${url}L074_01.mp3`,
        id: Math.random()
    },
    {
        name: '106. Луций Анней Сенека',
        artist: 'Письмо 74.2',
        source: `${url}L074_02.mp3`,
        id: Math.random()
    },
    {
        name: '107. Луций Анней Сенека',
        artist: 'Письмо 74.3',
        source: `${url}L074_03.mp3`,
        id: Math.random()
    },
    {
        name: '108. Луций Анней Сенека',
        artist: 'Письмо 74.4',
        source: `${url}L074_04.mp3`,
        id: Math.random()
    },
    {
        name: '109. Луций Анней Сенека',
        artist: 'Письмо 75',
        source: `${url}L075_01.mp3`,
        id: Math.random()
    },
    {
        name: '110. Луций Анней Сенека',
        artist: 'Письмо 75.2',
        source: `${url}L075_02.mp3`,
        id: Math.random()
    },
    {
        name: '111. Луций Анней Сенека',
        artist: 'Письмо 76',
        source: `${url}L076_01.mp3`,
        id: Math.random()
    },
    {
        name: '112. Луций Анней Сенека',
        artist: 'Письмо 76.2',
        source: `${url}L076_02.mp3`,
        id: Math.random()
    },
    {
        name: '113. Луций Анней Сенека',
        artist: 'Письмо 76.3',
        source: `${url}L076_03.mp3`,
        id: Math.random()
    },
    {
        name: '114. Луций Анней Сенека',
        artist: 'Письмо 76.4',
        source: `${url}L076_04.mp3`,
        id: Math.random()
    },
    {
        name: '115. Луций Анней Сенека',
        artist: 'Письмо 77',
        source: `${url}L077_01.mp3`,
        id: Math.random()
    },
    {
        name: '116. Луций Анней Сенека',
        artist: 'Письмо 77.2',
        source: `${url}L077_02.mp3`,
        id: Math.random()
    },
    {
        name: '117. Луций Анней Сенека',
        artist: 'Письмо 78',
        source: `${url}L078_01.mp3`,
        id: Math.random()
    },
    {
        name: '118. Луций Анней Сенека',
        artist: 'Письмо 78.2',
        source: `${url}L078_02.mp3`,
        id: Math.random()
    },
    {
        name: '119. Луций Анней Сенека',
        artist: 'Письмо 78.3',
        source: `${url}L078_03.mp3`,
        id: Math.random()
    },
    {
        name: '120. Луций Анней Сенека',
        artist: 'Письмо 79',
        source: `${url}L079_01.mp3`,
        id: Math.random()
    },
    {
        name: '121. Луций Анней Сенека',
        artist: 'Письмо 79.2',
        source: `${url}L079_02.mp3`,
        id: Math.random()
    },
    {
        name: '122. Луций Анней Сенека',
        artist: 'Письмо 80',
        source: `${url}L080_01.mp3`,
        id: Math.random()
    },
    {
        name: '123. Луций Анней Сенека',
        artist: 'Письмо 81',
        source: `${url}L081_01.mp3`,
        id: Math.random()
    },
    {
        name: '124. Луций Анней Сенека',
        artist: 'Письмо 81.2',
        source: `${url}L081_02.mp3`,
        id: Math.random()
    },
    {
        name: '125. Луций Анней Сенека',
        artist: 'Письмо 81.3',
        source: `${url}L081_03.mp3`,
        id: Math.random()
    },
    {
        name: '126. Луций Анней Сенека',
        artist: 'Письмо 81.4',
        source: `${url}L081_04.mp3`,
        id: Math.random()
    },
    {
        name: '127. Луций Анней Сенека',
        artist: 'Письмо 82',
        source: `${url}L082_01.mp3`,
        id: Math.random()
    },
    {
        name: '128. Луций Анней Сенека',
        artist: 'Письмо 82.2',
        source: `${url}L082_02.mp3`,
        id: Math.random()
    },
    {
        name: '129. Луций Анней Сенека',
        artist: 'Письмо 82.3',
        source: `${url}L082_03.mp3`,
        id: Math.random()
    },
    {
        name: '130. Луций Анней Сенека',
        artist: 'Письмо 83',
        source: `${url}L083_01.mp3`,
        id: Math.random()
    },
    {
        name: '131. Луций Анней Сенека',
        artist: 'Письмо 83.2',
        source: `${url}L083_02.mp3`,
        id: Math.random()
    },
    {
        name: '132. Луций Анней Сенека',
        artist: 'Письмо 83.3',
        source: `${url}L083_03.mp3`,
        id: Math.random()
    },
    {
        name: '133. Луций Анней Сенека',
        artist: 'Письмо 84',
        source: `${url}L084_01.mp3`,
        id: Math.random()
    },
    {
        name: '134. Луций Анней Сенека',
        artist: 'Письмо 85',
        source: `${url}L085_01.mp3`,
        id: Math.random()
    },
    {
        name: '135. Луций Анней Сенека',
        artist: 'Письмо 85.2',
        source: `${url}L085_02.mp3`,
        id: Math.random()
    },
    {
        name: '136. Луций Анней Сенека',
        artist: 'Письмо 85.3',
        source: `${url}L085_03.mp3`,
        id: Math.random()
    },
    {
        name: '137. Луций Анней Сенека',
        artist: 'Письмо 85.4',
        source: `${url}L085_04.mp3`,
        id: Math.random()
    },
    {
        name: '138. Луций Анней Сенека',
        artist: 'Письмо 85.5',
        source: `${url}L085_05.mp3`,
        id: Math.random()
    },
    {
        name: '139. Луций Анней Сенека',
        artist: 'Письмо 86',
        source: `${url}L086_01.mp3`,
        id: Math.random()
    },
    {
        name: '140. Луций Анней Сенека',
        artist: 'Письмо 86.2',
        source: `${url}L086_02.mp3`,
        id: Math.random()
    },
    {
        name: '141. Луций Анней Сенека',
        artist: 'Письмо 87',
        source: `${url}L087_01.mp3`,
        id: Math.random()
    },
    {
        name: '142. Луций Анней Сенека',
        artist: 'Письмо 87.2',
        source: `${url}L087_02.mp3`,
        id: Math.random()
    },
    {
        name: '143. Луций Анней Сенека',
        artist: 'Письмо 87.3',
        source: `${url}L087_03.mp3`,
        id: Math.random()
    },
    {
        name: '144. Луций Анней Сенека',
        artist: 'Письмо 87.4',
        source: `${url}L087_04.mp3`,
        id: Math.random()
    },
    {
        name: '145. Луций Анней Сенека',
        artist: 'Письмо 87.5',
        source: `${url}L087_05.mp3`,
        id: Math.random()
    },
    {
        name: '146. Луций Анней Сенека',
        artist: 'Письмо 88',
        source: `${url}L088_01.mp3`,
        id: Math.random()
    },
    {
        name: '147. Луций Анней Сенека',
        artist: 'Письмо 88.2',
        source: `${url}L088_02.mp3`,
        id: Math.random()
    },
    {
        name: '148. Луций Анней Сенека',
        artist: 'Письмо 88.3',
        source: `${url}L088_03.mp3`,
        id: Math.random()
    },
    {
        name: '149. Луций Анней Сенека',
        artist: 'Письмо 88.4',
        source: `${url}L088_04.mp3`,
        id: Math.random()
    },
    {
        name: '150. Луций Анней Сенека',
        artist: 'Письмо 88.5',
        source: `${url}L088_05.mp3`,
        id: Math.random()
    },
    {
        name: '151. Луций Анней Сенека',
        artist: 'Письмо 88.6',
        source: `${url}L088_06.mp3`,
        id: Math.random()
    },
    {
        name: '152. Луций Анней Сенека',
        artist: 'Письмо 89',
        source: `${url}L089_01.mp3`,
        id: Math.random()
    },
    {
        name: '153. Луций Анней Сенека',
        artist: 'Письмо 89.2',
        source: `${url}L089_02.mp3`,
        id: Math.random()
    },
    {
        name: '154. Луций Анней Сенека',
        artist: 'Письмо 89.3',
        source: `${url}L089_03.mp3`,
        id: Math.random()
    },
    {
        name: '155. Луций Анней Сенека',
        artist: 'Письмо 89.4',
        source: `${url}L089_04.mp3`,
        id: Math.random()
    },
    {
        name: '156. Луций Анней Сенека',
        artist: 'Письмо 90',
        source: `${url}L090_01.mp3`,
        id: Math.random()
    },
    {
        name: '157. Луций Анней Сенека',
        artist: 'Письмо 90.2',
        source: `${url}L090_02.mp3`,
        id: Math.random()
    },
    {
        name: '158. Луций Анней Сенека',
        artist: 'Письмо 90.3',
        source: `${url}L090_03.mp3`,
        id: Math.random()
    },
    {
        name: '159. Луций Анней Сенека',
        artist: 'Письмо 90.4',
        source: `${url}L090_04.mp3`,
        id: Math.random()
    },
    {
        name: '160. Луций Анней Сенека',
        artist: 'Письмо 90.5',
        source: `${url}L090_05.mp3`,
        id: Math.random()
    },
    {
        name: '161. Луций Анней Сенека',
        artist: 'Письмо 90.6',
        source: `${url}L090_06.mp3`,
        id: Math.random()
    },
    {
        name: '162. Луций Анней Сенека',
        artist: 'Письмо 90.7',
        source: `${url}L090_07.mp3`,
        id: Math.random()
    },
    {
        name: '163. Луций Анней Сенека',
        artist: 'Письмо 90.8',
        source: `${url}L090_08.mp3`,
        id: Math.random()
    },
    {
        name: '164. Луций Анней Сенека',
        artist: 'Письмо 91',
        source: `${url}L091_01.mp3`,
        id: Math.random()
    },
    {
        name: '165. Луций Анней Сенека',
        artist: 'Письмо 91.2',
        source: `${url}L091_02.mp3`,
        id: Math.random()
    },
    {
        name: '166. Луций Анней Сенека',
        artist: 'Письмо 91.3',
        source: `${url}L091_03.mp3`,
        id: Math.random()
    },
    {
        name: '167. Луций Анней Сенека',
        artist: 'Письмо 92',
        source: `${url}L092_01.mp3`,
        id: Math.random()
    },
    {
        name: '168. Луций Анней Сенека',
        artist: 'Письмо 92.2',
        source: `${url}L092_02.mp3`,
        id: Math.random()
    },
    {
        name: '169. Луций Анней Сенека',
        artist: 'Письмо 92.3',
        source: `${url}L092_03.mp3`,
        id: Math.random()
    },
    {
        name: '170. Луций Анней Сенека',
        artist: 'Письмо 92.4',
        source: `${url}L092_04.mp3`,
        id: Math.random()
    },
    {
        name: '171. Луций Анней Сенека',
        artist: 'Письмо 92.5',
        source: `${url}L092_05.mp3`,
        id: Math.random()
    },
    {
        name: '172. Луций Анней Сенека',
        artist: 'Письмо 92.6',
        source: `${url}L092_06.mp3`,
        id: Math.random()
    },
    {
        name: '173. Луций Анней Сенека',
        artist: 'Письмо 93',
        source: `${url}L093_01.mp3`,
        id: Math.random()
    },
    {
        name: '174. Луций Анней Сенека',
        artist: 'Письмо 93.2',
        source: `${url}L093_02.mp3`,
        id: Math.random()
    },
    {
        name: '175. Луций Анней Сенека',
        artist: 'Письмо 94',
        source: `${url}L094_01.mp3`,
        id: Math.random()
    },
    {
        name: '176. Луций Анней Сенека',
        artist: 'Письмо 94.2',
        source: `${url}L094_02.mp3`,
        id: Math.random()
    },
    {
        name: '177. Луций Анней Сенека',
        artist: 'Письмо 94.3',
        source: `${url}L094_03.mp3`,
        id: Math.random()
    },
    {
        name: '178. Луций Анней Сенека',
        artist: 'Письмо 94.4',
        source: `${url}L094_04.mp3`,
        id: Math.random()
    },
    {
        name: '179. Луций Анней Сенека',
        artist: 'Письмо 94.5',
        source: `${url}L094_05.mp3`,
        id: Math.random()
    },
    {
        name: '180. Луций Анней Сенека',
        artist: 'Письмо 94.6',
        source: `${url}L094_06.mp3`,
        id: Math.random()
    },
    {
        name: '181. Луций Анней Сенека',
        artist: 'Письмо 94.7',
        source: `${url}L094_07.mp3`,
        id: Math.random()
    },
    {
        name: '182. Луций Анней Сенека',
        artist: 'Письмо 94.8',
        source: `${url}L094_08.mp3`,
        id: Math.random()
    },
    {
        name: '183. Луций Анней Сенека',
        artist: 'Письмо 94.9',
        source: `${url}L094_09.mp3`,
        id: Math.random()
    },
    {
        name: '184. Луций Анней Сенека',
        artist: 'Письмо 94.10',
        source: `${url}L094_10.mp3`,
        id: Math.random()
    },
    {
        name: '185. Луций Анней Сенека',
        artist: 'Письмо 94.11',
        source: `${url}L094_11.mp3`,
        id: Math.random()
    },
    {
        name: '186. Луций Анней Сенека',
        artist: 'Письмо 95',
        source: `${url}L095_01.mp3`,
        id: Math.random()
    },
    {
        name: '187. Луций Анней Сенека',
        artist: 'Письмо 95.2',
        source: `${url}L095_02.mp3`,
        id: Math.random()
    },
    {
        name: '188. Луций Анней Сенека',
        artist: 'Письмо 95.3',
        source: `${url}L095_03.mp3`,
        id: Math.random()
    },
    {
        name: '189. Луций Анней Сенека',
        artist: 'Письмо 95.4',
        source: `${url}L095_04.mp3`,
        id: Math.random()
    },
    {
        name: '190. Луций Анней Сенека',
        artist: 'Письмо 95.5',
        source: `${url}L095_05.mp3`,
        id: Math.random()
    },
    {
        name: '191. Луций Анней Сенека',
        artist: 'Письмо 95.6',
        source: `${url}L095_06.mp3`,
        id: Math.random()
    },
    {
        name: '192. Луций Анней Сенека',
        artist: 'Письмо 95.7',
        source: `${url}L095_07.mp3`,
        id: Math.random()
    },
    {
        name: '193. Луций Анней Сенека',
        artist: 'Письмо 95.8',
        source: `${url}L095_08.mp3`,
        id: Math.random()
    },
    {
        name: '194. Луций Анней Сенека',
        artist: 'Письмо 95.9',
        source: `${url}L095_09.mp3`,
        id: Math.random()
    },
    {
        name: '195. Луций Анней Сенека',
        artist: 'Письмо 95.10',
        source: `${url}L095_10.mp3`,
        id: Math.random()
    },
    {
        name: '196. Луций Анней Сенека',
        artist: 'Письмо 95.11',
        source: `${url}L095_11.mp3`,
        id: Math.random()
    },
    {
        name: '197. Луций Анней Сенека',
        artist: 'Письмо 95.12',
        source: `${url}L095_12.mp3`,
        id: Math.random()
    },
    {
        name: '198. Луций Анней Сенека',
        artist: 'Письмо 96',
        source: `${url}L096_01.mp3`,
        id: Math.random()
    },
    {
        name: '199. Луций Анней Сенека',
        artist: 'Письмо 97',
        source: `${url}L097_01.mp3`,
        id: Math.random()
    },
    {
        name: '200. Луций Анней Сенека',
        artist: 'Письмо 97.2',
        source: `${url}L097_02.mp3`,
        id: Math.random()
    },
    {
        name: '201. Луций Анней Сенека',
        artist: 'Письмо 98',
        source: `${url}L098_01.mp3`,
        id: Math.random()
    },
    {
        name: '202. Луций Анней Сенека',
        artist: 'Письмо 98.2',
        source: `${url}L098_02.mp3`,
        id: Math.random()
    },
    {
        name: '203. Луций Анней Сенека',
        artist: 'Письмо 98.3',
        source: `${url}L098_03.mp3`,
        id: Math.random()
    },
    {
        name: '204. Луций Анней Сенека',
        artist: 'Письмо 99',
        source: `${url}L099_01.mp3`,
        id: Math.random()
    },
    {
        name: '205. Луций Анней Сенека',
        artist: 'Письмо 99.2',
        source: `${url}L099_02.mp3`,
        id: Math.random()
    },
    {
        name: '206. Луций Анней Сенека',
        artist: 'Письмо 99.3',
        source: `${url}L099_03.mp3`,
        id: Math.random()
    },
    {
        name: '207. Луций Анней Сенека',
        artist: 'Письмо 99.4',
        source: `${url}L099_04.mp3`,
        id: Math.random()
    },
    {
        name: '208. Луций Анней Сенека',
        artist: 'Письмо 99.5',
        source: `${url}L099_05.mp3`,
        id: Math.random()
    },
    {
        name: '209. Луций Анней Сенека',
        artist: 'Письмо 100',
        source: `${url}L100_01.mp3`,
        id: Math.random()
    },
    {
        name: '210. Луций Анней Сенека',
        artist: 'Письмо 100.2',
        source: `${url}L100_02.mp3`,
        id: Math.random()
    },
    {
        name: '211. Луций Анней Сенека',
        artist: 'Письмо 101',
        source: `${url}L101_01.mp3`,
        id: Math.random()
    },
    {
        name: '212. Луций Анней Сенека',
        artist: 'Письмо 101.2',
        source: `${url}L101_02.mp3`,
        id: Math.random()
    },
    {
        name: '213. Луций Анней Сенека',
        artist: 'Письмо 102',
        source: `${url}L102_01.mp3`,
        id: Math.random()
    },
    {
        name: '214. Луций Анней Сенека',
        artist: 'Письмо 102.2',
        source: `${url}L102_02.mp3`,
        id: Math.random()
    },
    {
        name: '215. Луций Анней Сенека',
        artist: 'Письмо 102.3',
        source: `${url}L102_03.mp3`,
        id: Math.random()
    },
    {
        name: '216. Луций Анней Сенека',
        artist: 'Письмо 102.4',
        source: `${url}L102_04.mp3`,
        id: Math.random()
    },
    {
        name: '217. Луций Анней Сенека',
        artist: 'Письмо 102.5',
        source: `${url}L102_05.mp3`,
        id: Math.random()
    },
    {
        name: '218. Луций Анней Сенека',
        artist: 'Письмо 103',
        source: `${url}L103_01.mp3`,
        id: Math.random()
    },
    {
        name: '219. Луций Анней Сенека',
        artist: 'Письмо 104',
        source: `${url}L104_01.mp3`,
        id: Math.random()
    },
    {
        name: '220. Луций Анней Сенека',
        artist: 'Письмо 104.2',
        source: `${url}L104_02.mp3`,
        id: Math.random()
    },
    {
        name: '221. Луций Анней Сенека',
        artist: 'Письмо 104.3',
        source: `${url}L104_03.mp3`,
        id: Math.random()
    },
    {
        name: '222. Луций Анней Сенека',
        artist: 'Письмо 104.4',
        source: `${url}L104_04.mp3`,
        id: Math.random()
    },
    {
        name: '223. Луций Анней Сенека',
        artist: 'Письмо 104.5',
        source: `${url}L104_05.mp3`,
        id: Math.random()
    },
    {
        name: '224. Луций Анней Сенека',
        artist: 'Письмо 105',
        source: `${url}L105_01.mp3`,
        id: Math.random()
    },
    {
        name: '225. Луций Анней Сенека',
        artist: 'Письмо 106',
        source: `${url}L106_01.mp3`,
        id: Math.random()
    },
    {
        name: '226. Луций Анней Сенека',
        artist: 'Письмо 107',
        source: `${url}L107_01.mp3`,
        id: Math.random()
    },
    {
        name: '227. Луций Анней Сенека',
        artist: 'Письмо 108',
        source: `${url}L108_01.mp3`,
        id: Math.random()
    },
    {
        name: '228. Луций Анней Сенека',
        artist: 'Письмо 108.2',
        source: `${url}L108_02.mp3`,
        id: Math.random()
    },
    {
        name: '229. Луций Анней Сенека',
        artist: 'Письмо 108.3',
        source: `${url}L108_03.mp3`,
        id: Math.random()
    },
    {
        name: '230. Луций Анней Сенека',
        artist: 'Письмо 108.4',
        source: `${url}L108_04.mp3`,
        id: Math.random()
    },
    {
        name: '231. Луций Анней Сенека',
        artist: 'Письмо 108.5',
        source: `${url}L108_05.mp3`,
        id: Math.random()
    },
    {
        name: '232. Луций Анней Сенека',
        artist: 'Письмо 109',
        source: `${url}L109_01.mp3`,
        id: Math.random()
    },
    {
        name: '233. Луций Анней Сенека',
        artist: 'Письмо 109.2',
        source: `${url}L109_02.mp3`,
        id: Math.random()
    },
    {
        name: '234. Луций Анней Сенека',
        artist: 'Письмо 110',
        source: `${url}L110_01.mp3`,
        id: Math.random()
    },
    {
        name: '235. Луций Анней Сенека',
        artist: 'Письмо 110.2',
        source: `${url}L110_02.mp3`,
        id: Math.random()
    },
    {
        name: '236. Луций Анней Сенека',
        artist: 'Письмо 110.3',
        source: `${url}L110_03.mp3`,
        id: Math.random()
    },
    {
        name: '237. Луций Анней Сенека',
        artist: 'Письмо 111',
        source: `${url}L111_01.mp3`,
        id: Math.random()
    },
    {
        name: '238. Луций Анней Сенека',
        artist: 'Письмо 112',
        source: `${url}L112_01.mp3`,
        id: Math.random()
    },
    {
        name: '239. Луций Анней Сенека',
        artist: 'Письмо 113',
        source: `${url}L113_01.mp3`,
        id: Math.random()
    },
    {
        name: '240. Луций Анней Сенека',
        artist: 'Письмо 113.2',
        source: `${url}L113_02.mp3`,
        id: Math.random()
    },
    {
        name: '241. Луций Анней Сенека',
        artist: 'Письмо 113.3',
        source: `${url}L113_03.mp3`,
        id: Math.random()
    },
    {
        name: '242. Луций Анней Сенека',
        artist: 'Письмо 113.4',
        source: `${url}L113_04.mp3`,
        id: Math.random()
    },
    {
        name: '243. Луций Анней Сенека',
        artist: 'Письмо 113.5',
        source: `${url}L113_05.mp3`,
        id: Math.random()
    },
    {
        name: '244. Луций Анней Сенека',
        artist: 'Письмо 114',
        source: `${url}L114_01.mp3`,
        id: Math.random()
    },
    {
        name: '245. Луций Анней Сенека',
        artist: 'Письмо 114.2',
        source: `${url}L114_02.mp3`,
        id: Math.random()
    },
    {
        name: '246. Луций Анней Сенека',
        artist: 'Письмо 114.3',
        source: `${url}L114_03.mp3`,
        id: Math.random()
    },
    {
        name: '247. Луций Анней Сенека',
        artist: 'Письмо 114.4',
        source: `${url}L114_04.mp3`,
        id: Math.random()
    },
    {
        name: '248. Луций Анней Сенека',
        artist: 'Письмо 114.5',
        source: `${url}L114_05.mp3`,
        id: Math.random()
    },
    {
        name: '249. Луций Анней Сенека',
        artist: 'Письмо 115',
        source: `${url}L115_01.mp3`,
        id: Math.random()
    },
    {
        name: '250. Луций Анней Сенека',
        artist: 'Письмо 115.2',
        source: `${url}L115_02.mp3`,
        id: Math.random()
    },
    {
        name: '251. Луций Анней Сенека',
        artist: 'Письмо 115.3',
        source: `${url}L115_03.mp3`,
        id: Math.random()
    },
    {
        name: '252. Луций Анней Сенека',
        artist: 'Письмо 116',
        source: `${url}L116_01.mp3`,
        id: Math.random()
    },
    {
        name: '253. Луций Анней Сенека',
        artist: 'Письмо 117',
        source: `${url}L117_01.mp3`,
        id: Math.random()
    },
    {
        name: '254. Луций Анней Сенека',
        artist: 'Письмо 117.2',
        source: `${url}L117_02.mp3`,
        id: Math.random()
    },
    {
        name: '255. Луций Анней Сенека',
        artist: 'Письмо 117.3',
        source: `${url}L117_03.mp3`,
        id: Math.random()
    },
    {
        name: '256. Луций Анней Сенека',
        artist: 'Письмо 117.4',
        source: `${url}L117_04.mp3`,
        id: Math.random()
    },
    {
        name: '257. Луций Анней Сенека',
        artist: 'Письмо 117.5',
        source: `${url}L117_05.mp3`,
        id: Math.random()
    },
    {
        name: '258. Луций Анней Сенека',
        artist: 'Письмо 118',
        source: `${url}L118_01.mp3`,
        id: Math.random()
    },
    {
        name: '259. Луций Анней Сенека',
        artist: 'Письмо 118.2',
        source: `${url}L118_02.mp3`,
        id: Math.random()
    },
    {
        name: '260. Луций Анней Сенека',
        artist: 'Письмо 119',
        source: `${url}L119_01.mp3`,
        id: Math.random()
    },
    {
        name: '261. Луций Анней Сенека',
        artist: 'Письмо 119.2',
        source: `${url}L119_02.mp3`,
        id: Math.random()
    },
    {
        name: '262. Луций Анней Сенека',
        artist: 'Письмо 120',
        source: `${url}L120_01.mp3`,
        id: Math.random()
    },
    {
        name: '263. Луций Анней Сенека',
        artist: 'Письмо 120.2',
        source: `${url}L120_02.mp3`,
        id: Math.random()
    },
    {
        name: '264. Луций Анней Сенека',
        artist: 'Письмо 120',
        source: `${url}L120_03.mp3`,
        id: Math.random()
    },
    {
        name: '265. Луций Анней Сенека',
        artist: 'Письмо 120.2',
        source: `${url}L120_04.mp3`,
        id: Math.random()
    },
    {
        name: '266. Луций Анней Сенека',
        artist: 'Письмо 121',
        source: `${url}L121_01.mp3`,
        id: Math.random()
    },
    {
        name: '267. Луций Анней Сенека',
        artist: 'Письмо 121.2',
        source: `${url}L121_02.mp3`,
        id: Math.random()
    },
    {
        name: '268. Луций Анней Сенека',
        artist: 'Письмо 121.3',
        source: `${url}L121_03.mp3`,
        id: Math.random()
    },
    {
        name: '269. Луций Анней Сенека',
        artist: 'Письмо 121.4',
        source: `${url}L121_04.mp3`,
        id: Math.random()
    },
    {
        name: '270. Луций Анней Сенека',
        artist: 'Письмо 122',
        source: `${url}L122_01.mp3`,
        id: Math.random()
    },
    {
        name: '271. Луций Анней Сенека',
        artist: 'Письмо 122.2',
        source: `${url}L122_02.mp3`,
        id: Math.random()
    },
    {
        name: '272. Луций Анней Сенека',
        artist: 'Письмо 122.3',
        source: `${url}L122_03.mp3`,
        id: Math.random()
    },
    {
        name: '273. Луций Анней Сенека',
        artist: 'Письмо 123',
        source: `${url}L123_01.mp3`,
        id: Math.random()
    },
    {
        name: '274. Луций Анней Сенека',
        artist: 'Письмо 123.2',
        source: `${url}L123_02.mp3`,
        id: Math.random()
    },
    {
        name: '275. Луций Анней Сенека',
        artist: 'Письмо 124',
        source: `${url}L124_01.mp3`,
        id: Math.random()
    },
    {
        name: '276. Луций Анней Сенека',
        artist: 'Письмо 124.2',
        source: `${url}L124_02.mp3`,
        id: Math.random()
    },
    {
        name: '277. Луций Анней Сенека',
        artist: 'Письмо 124.3',
        source: `${url}L124_03.mp3`,
        id: Math.random()
    }
]

export default data