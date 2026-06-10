const players = [
  "Fredrik",
  "William",
  "Magnus",
  "Niklas",
  "Anders",
  "Nils",
  "Rasmus",
  "Axel",
  "Måns",
];

const flags = {
  Algeriet: "🇩🇿",
  Argentina: "🇦🇷",
  Australien: "🇦🇺",
  "Österrike": "🇦🇹",
  Belgien: "🇧🇪",
  "Bosnien och Hercegovina": "🇧🇦",
  Brasilien: "🇧🇷",
  Canada: "🇨🇦",
  "Kap Verde": "🇨🇻",
  Colombia: "🇨🇴",
  Kroatien: "🇭🇷",
  Curaçao: "🇨🇼",
  "Tjeckien": "🇨🇿",
  "DR Kongo": "🇨🇩",
  Ecuador: "🇪🇨",
  Egypten: "🇪🇬",
  England: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",
  Frankrike: "🇫🇷",
  Tyskland: "🇩🇪",
  Ghana: "🇬🇭",
  Haiti: "🇭🇹",
  Iran: "🇮🇷",
  Irak: "🇮🇶",
  "Elfenbenskusten": "🇨🇮",
  Japan: "🇯🇵",
  Jordanien: "🇯🇴",
  Mexico: "🇲🇽",
  Marocko: "🇲🇦",
  "Nederländerna": "🇳🇱",
  "Nya Zeeland": "🇳🇿",
  Norge: "🇳🇴",
  Panama: "🇵🇦",
  Paraguay: "🇵🇾",
  Portugal: "🇵🇹",
  Qatar: "🇶🇦",
  "Saudiarabien": "🇸🇦",
  Skottland: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
  Senegal: "🇸🇳",
  "Sydafrika": "🇿🇦",
  "Sydkorea": "🇰🇷",
  Spanien: "🇪🇸",
  Sverige: "🇸🇪",
  Schweiz: "🇨🇭",
  Tunisien: "🇹🇳",
  Turkiet: "🇹🇷",
  USA: "🇺🇸",
  Uruguay: "🇺🇾",
  Uzbekistan: "🇺🇿",
};

const schedule = [
  ["A", 1, "2026-06-11", "21:00", "Mexico", "Sydafrika", "Estadio Azteca, Mexico City"],
  ["A", 2, "2026-06-12", "04:00", "Sydkorea", "Tjeckien", "Estadio Akron, Zapopan"],
  ["B", 3, "2026-06-12", "21:00", "Canada", "Bosnien och Hercegovina", "BMO Field, Toronto"],
  ["D", 4, "2026-06-13", "03:00", "USA", "Paraguay", "SoFi Stadium, Inglewood"],
  ["B", 8, "2026-06-13", "21:00", "Qatar", "Schweiz", "Levi's Stadium, Santa Clara"],
  ["C", 7, "2026-06-14", "00:00", "Brasilien", "Marocko", "MetLife Stadium, East Rutherford"],
  ["C", 5, "2026-06-14", "03:00", "Haiti", "Skottland", "Gillette Stadium, Foxborough"],
  ["D", 6, "2026-06-14", "06:00", "Australien", "Turkiet", "BC Place, Vancouver"],
  ["E", 10, "2026-06-14", "19:00", "Tyskland", "Curaçao", "NRG Stadium, Houston"],
  ["F", 11, "2026-06-14", "22:00", "Nederländerna", "Japan", "AT&T Stadium, Arlington"],
  ["E", 9, "2026-06-15", "01:00", "Elfenbenskusten", "Ecuador", "Lincoln Financial Field, Philadelphia"],
  ["F", 12, "2026-06-15", "04:00", "Sverige", "Tunisien", "Estadio BBVA, Guadalupe"],
  ["H", 14, "2026-06-15", "18:00", "Spanien", "Kap Verde", "Mercedes-Benz Stadium, Atlanta"],
  ["G", 16, "2026-06-15", "21:00", "Belgien", "Egypten", "Lumen Field, Seattle"],
  ["H", 13, "2026-06-16", "00:00", "Saudiarabien", "Uruguay", "Hard Rock Stadium, Miami Gardens"],
  ["G", 15, "2026-06-16", "03:00", "Iran", "Nya Zeeland", "SoFi Stadium, Inglewood"],
  ["I", 17, "2026-06-16", "21:00", "Frankrike", "Senegal", "MetLife Stadium, East Rutherford"],
  ["I", 18, "2026-06-17", "00:00", "Irak", "Norge", "Gillette Stadium, Foxborough"],
  ["J", 19, "2026-06-17", "03:00", "Argentina", "Algeriet", "Arrowhead Stadium, Kansas City"],
  ["J", 20, "2026-06-17", "06:00", "Österrike", "Jordanien", "Levi's Stadium, Santa Clara"],
  ["K", 23, "2026-06-17", "19:00", "Portugal", "DR Kongo", "NRG Stadium, Houston"],
  ["L", 22, "2026-06-17", "22:00", "England", "Kroatien", "AT&T Stadium, Arlington"],
  ["L", 21, "2026-06-18", "01:00", "Ghana", "Panama", "Toronto Stadium, Toronto"],
  ["K", 24, "2026-06-18", "04:00", "Uzbekistan", "Colombia", "Estadio Azteca, Mexico City"],
  ["A", 25, "2026-06-18", "18:00", "Tjeckien", "Sydafrika", "Mercedes-Benz Stadium, Atlanta"],
  ["B", 26, "2026-06-18", "21:00", "Schweiz", "Bosnien och Hercegovina", "SoFi Stadium, Inglewood"],
  ["B", 27, "2026-06-19", "00:00", "Canada", "Qatar", "BC Place, Vancouver"],
  ["A", 28, "2026-06-19", "03:00", "Mexico", "Sydkorea", "Estadio Akron, Zapopan"],
  ["D", 32, "2026-06-19", "21:00", "USA", "Australien", "Lumen Field, Seattle"],
  ["C", 30, "2026-06-20", "00:00", "Skottland", "Marocko", "Gillette Stadium, Foxborough"],
  ["C", 29, "2026-06-20", "03:00", "Brasilien", "Haiti", "Lincoln Financial Field, Philadelphia"],
  ["D", 31, "2026-06-20", "06:00", "Turkiet", "Paraguay", "Levi's Stadium, Santa Clara"],
  ["F", 35, "2026-06-20", "19:00", "Nederländerna", "Sverige", "NRG Stadium, Houston"],
  ["E", 33, "2026-06-20", "22:00", "Tyskland", "Elfenbenskusten", "BMO Field, Toronto"],
  ["E", 34, "2026-06-21", "02:00", "Ecuador", "Curaçao", "Arrowhead Stadium, Kansas City"],
  ["F", 36, "2026-06-21", "06:00", "Tunisien", "Japan", "Estadio BBVA, Guadalupe"],
  ["H", 38, "2026-06-21", "18:00", "Spanien", "Saudiarabien", "Mercedes-Benz Stadium, Atlanta"],
  ["G", 39, "2026-06-21", "21:00", "Belgien", "Iran", "SoFi Stadium, Inglewood"],
  ["H", 37, "2026-06-22", "00:00", "Uruguay", "Kap Verde", "Hard Rock Stadium, Miami Gardens"],
  ["G", 40, "2026-06-22", "03:00", "Nya Zeeland", "Egypten", "BC Place, Vancouver"],
  ["J", 43, "2026-06-22", "19:00", "Argentina", "Österrike", "AT&T Stadium, Arlington"],
  ["I", 42, "2026-06-22", "23:00", "Frankrike", "Irak", "Lincoln Financial Field, Philadelphia"],
  ["I", 41, "2026-06-23", "02:00", "Norge", "Senegal", "MetLife Stadium, East Rutherford"],
  ["J", 44, "2026-06-23", "05:00", "Jordanien", "Algeriet", "Levi's Stadium, Santa Clara"],
  ["K", 47, "2026-06-23", "19:00", "Portugal", "Uzbekistan", "NRG Stadium, Houston"],
  ["L", 45, "2026-06-23", "22:00", "England", "Ghana", "Gillette Stadium, Foxborough"],
  ["L", 46, "2026-06-24", "01:00", "Panama", "Kroatien", "Toronto Stadium, Toronto"],
  ["K", 48, "2026-06-24", "04:00", "Colombia", "DR Kongo", "Estadio Akron, Zapopan"],
  ["B", 51, "2026-06-24", "21:00", "Schweiz", "Canada", "BC Place, Vancouver"],
  ["B", 52, "2026-06-24", "21:00", "Bosnien och Hercegovina", "Qatar", "Lumen Field, Seattle"],
  ["C", 49, "2026-06-25", "00:00", "Skottland", "Brasilien", "Hard Rock Stadium, Miami Gardens"],
  ["C", 50, "2026-06-25", "00:00", "Marocko", "Haiti", "Mercedes-Benz Stadium, Atlanta"],
  ["A", 53, "2026-06-25", "03:00", "Tjeckien", "Mexico", "Estadio Azteca, Mexico City"],
  ["A", 54, "2026-06-25", "03:00", "Sydafrika", "Sydkorea", "Estadio BBVA, Guadalupe"],
  ["E", 55, "2026-06-25", "22:00", "Curaçao", "Elfenbenskusten", "Lincoln Financial Field, Philadelphia"],
  ["E", 56, "2026-06-25", "22:00", "Ecuador", "Tyskland", "MetLife Stadium, East Rutherford"],
  ["F", 57, "2026-06-26", "01:00", "Japan", "Sverige", "AT&T Stadium, Arlington"],
  ["F", 58, "2026-06-26", "01:00", "Tunisien", "Nederländerna", "Arrowhead Stadium, Kansas City"],
  ["D", 59, "2026-06-26", "04:00", "Turkiet", "USA", "SoFi Stadium, Inglewood"],
  ["D", 60, "2026-06-26", "04:00", "Paraguay", "Australien", "Levi's Stadium, Santa Clara"],
  ["I", 61, "2026-06-26", "21:00", "Norge", "Frankrike", "Gillette Stadium, Foxborough"],
  ["I", 62, "2026-06-26", "21:00", "Senegal", "Irak", "BMO Field, Toronto"],
  ["H", 65, "2026-06-27", "02:00", "Kap Verde", "Saudiarabien", "NRG Stadium, Houston"],
  ["H", 66, "2026-06-27", "02:00", "Uruguay", "Spanien", "Estadio Akron, Zapopan"],
  ["G", 63, "2026-06-27", "05:00", "Egypten", "Iran", "Lumen Field, Seattle"],
  ["G", 64, "2026-06-27", "05:00", "Nya Zeeland", "Belgien", "BC Place, Vancouver"],
  ["L", 67, "2026-06-27", "23:00", "Panama", "England", "MetLife Stadium, East Rutherford"],
  ["L", 68, "2026-06-27", "23:00", "Kroatien", "Ghana", "Lincoln Financial Field, Philadelphia"],
  ["K", 71, "2026-06-28", "01:30", "Colombia", "Portugal", "Hard Rock Stadium, Miami Gardens"],
  ["K", 72, "2026-06-28", "01:30", "DR Kongo", "Uzbekistan", "Mercedes-Benz Stadium, Atlanta"],
  ["J", 69, "2026-06-28", "04:00", "Algeriet", "Österrike", "Arrowhead Stadium, Kansas City"],
  ["J", 70, "2026-06-28", "04:00", "Jordanien", "Argentina", "AT&T Stadium, Arlington"],
];

const results = {
  // Fyll i slutresultat här, t.ex. 1: { home: 2, away: 1 }.
};

const matches = schedule.map(([group, number, date, time, home, away, venue]) => ({
  group,
  number,
  date,
  time,
  home,
  away,
  venue,
  result: results[number] || null,
}));

const submittedPredictions = {
  "Magnus": {
    1: { home: 2, away: 1 },
    2: { home: 1, away: 1 },
    3: { home: 1, away: 1 },
    4: { home: 2, away: 1 },
    8: { home: 0, away: 2 },
    7: { home: 2, away: 1 },
    5: { home: 0, away: 2 },
    6: { home: 1, away: 1 },
    10: { home: 3, away: 0 },
    11: { home: 2, away: 1 },
    9: { home: 1, away: 1 },
    12: { home: 1, away: 0 },
    14: { home: 3, away: 0 },
    16: { home: 1, away: 1 },
    13: { home: 0, away: 2 },
    15: { home: 2, away: 0 },
    17: { home: 2, away: 1 },
    18: { home: 0, away: 2 },
    19: { home: 2, away: 1 },
    20: { home: 2, away: 0 },
    23: { home: 2, away: 0 },
    22: { home: 1, away: 1 },
    21: { home: 2, away: 1 },
    24: { home: 1, away: 1 },
    25: { home: 2, away: 1 },
    26: { home: 2, away: 1 },
    27: { home: 2, away: 0 },
    28: { home: 2, away: 1 },
    32: { home: 2, away: 0 },
    30: { home: 1, away: 1 },
    29: { home: 3, away: 0 },
    31: { home: 1, away: 1 },
    35: { home: 2, away: 1 },
    33: { home: 2, away: 1 },
    34: { home: 2, away: 0 },
    36: { home: 0, away: 1 },
    38: { home: 2, away: 0 },
    39: { home: 2, away: 0 },
    37: { home: 2, away: 1 },
    40: { home: 1, away: 2 },
    43: { home: 2, away: 0 },
    42: { home: 3, away: 0 },
    41: { home: 1, away: 1 },
    44: { home: 1, away: 2 },
    47: { home: 3, away: 0 },
    45: { home: 2, away: 0 },
    46: { home: 0, away: 2 },
    48: { home: 2, away: 1 },
    51: { home: 1, away: 1 },
    52: { home: 2, away: 1 },
    49: { home: 0, away: 2 },
    50: { home: 2, away: 0 },
    53: { home: 1, away: 2 },
    54: { home: 1, away: 1 },
    55: { home: 0, away: 2 },
    56: { home: 1, away: 1 },
    57: { home: 1, away: 1 },
    58: { home: 0, away: 2 },
    59: { home: 1, away: 2 },
    60: { home: 1, away: 1 },
    61: { home: 2, away: 2 },
    62: { home: 2, away: 0 },
    65: { home: 1, away: 1 },
    66: { home: 1, away: 1 },
    63: { home: 1, away: 1 },
    64: { home: 0, away: 3 },
    67: { home: 0, away: 3 },
    68: { home: 2, away: 1 },
    71: { home: 1, away: 2 },
    72: { home: 1, away: 1 },
    69: { home: 1, away: 1 },
    70: { home: 0, away: 3 },
  },
  "Rasmus": {
    1: { home: 3, away: 1 },
    2: { home: 2, away: 2 },
    3: { home: 0, away: 0 },
    4: { home: 2, away: 0 },
    8: { home: 0, away: 2 },
    7: { home: 3, away: 2 },
    5: { home: 0, away: 3 },
    6: { home: 1, away: 3 },
    10: { home: 3, away: 0 },
    11: { home: 2, away: 1 },
    9: { home: 1, away: 1 },
    12: { home: 2, away: 1 },
    14: { home: 3, away: 0 },
    16: { home: 2, away: 1 },
    13: { home: 0, away: 1 },
    15: { home: 2, away: 2 },
    17: { home: 2, away: 0 },
    18: { home: 0, away: 1 },
    19: { home: 3, away: 0 },
    20: { home: 0, away: 0 },
    23: { home: 4, away: 0 },
    22: { home: 2, away: 1 },
    21: { home: 1, away: 2 },
    24: { home: 0, away: 1 },
    25: { home: 2, away: 0 },
    26: { home: 2, away: 1 },
    27: { home: 1, away: 0 },
    28: { home: 2, away: 2 },
    32: { home: 2, away: 0 },
    30: { home: 0, away: 3 },
    29: { home: 4, away: 0 },
    31: { home: 3, away: 1 },
    35: { home: 3, away: 0 },
    33: { home: 3, away: 0 },
    34: { home: 2, away: 1 },
    36: { home: 1, away: 1 },
    38: { home: 3, away: 0 },
    39: { home: 2, away: 0 },
    37: { home: 2, away: 0 },
    40: { home: 1, away: 2 },
    43: { home: 4, away: 0 },
    42: { home: 3, away: 0 },
    41: { home: 1, away: 2 },
    44: { home: 0, away: 1 },
    47: { home: 2, away: 0 },
    45: { home: 3, away: 1 },
    46: { home: 0, away: 2 },
    48: { home: 2, away: 0 },
    51: { home: 1, away: 0 },
    52: { home: 1, away: 0 },
    49: { home: 0, away: 3 },
    50: { home: 1, away: 0 },
    53: { home: 1, away: 1 },
    54: { home: 0, away: 0 },
    55: { home: 0, away: 2 },
    56: { home: 0, away: 2 },
    57: { home: 2, away: 1 },
    58: { home: 1, away: 2 },
    59: { home: 2, away: 0 },
    60: { home: 1, away: 1 },
    61: { home: 1, away: 3 },
    62: { home: 1, away: 0 },
    65: { home: 0, away: 1 },
    66: { home: 1, away: 3 },
    63: { home: 2, away: 0 },
    64: { home: 0, away: 2 },
    67: { home: 0, away: 3 },
    68: { home: 2, away: 0 },
    71: { home: 1, away: 3 },
    72: { home: 0, away: 0 },
    69: { home: 2, away: 2 },
    70: { home: 0, away: 4 },
  },
  "Fredrik": {
    1: { home: 2, away: 1 },
    2: { home: 1, away: 1 },
    3: { home: 1, away: 2 },
    4: { home: 0, away: 1 },
    8: { home: 1, away: 3 },
    7: { home: 3, away: 0 },
    5: { home: 1, away: 3 },
    6: { home: 0, away: 3 },
    10: { home: 8, away: 1 },
    11: { home: 0, away: 2 },
    9: { home: 1, away: 1 },
    12: { home: 3, away: 2 },
    14: { home: 4, away: 0 },
    16: { home: 3, away: 1 },
    13: { home: 0, away: 2 },
    15: { home: 1, away: 0 },
    17: { home: 3, away: 1 },
    18: { home: 0, away: 3 },
    19: { home: 1, away: 0 },
    20: { home: 2, away: 1 },
    23: { home: 4, away: 1 },
    22: { home: 1, away: 2 },
    21: { home: 2, away: 1 },
    24: { home: 0, away: 5 },
    25: { home: 3, away: 2 },
    26: { home: 3, away: 0 },
    27: { home: 2, away: 2 },
    28: { home: 1, away: 2 },
    32: { home: 3, away: 0 },
    30: { home: 2, away: 2 },
    29: { home: 7, away: 0 },
    31: { home: 1, away: 1 },
    35: { home: 3, away: 4 },
    33: { home: 4, away: 1 },
    34: { home: 2, away: 1 },
    36: { home: 1, away: 2 },
    38: { home: 3, away: 0 },
    39: { home: 3, away: 1 },
    37: { home: 4, away: 0 },
    40: { home: 1, away: 3 },
    43: { home: 2, away: 1 },
    42: { home: 3, away: 0 },
    41: { home: 2, away: 1 },
    44: { home: 0, away: 2 },
    47: { home: 4, away: 0 },
    45: { home: 3, away: 2 },
    46: { home: 0, away: 3 },
    48: { home: 2, away: 1 },
    51: { home: 4, away: 1 },
    52: { home: 2, away: 0 },
    49: { home: 1, away: 3 },
    50: { home: 2, away: 0 },
    53: { home: 2, away: 2 },
    54: { home: 0, away: 1 },
    55: { home: 1, away: 3 },
    56: { home: 1, away: 4 },
    57: { home: 2, away: 2 },
    58: { home: 1, away: 3 },
    59: { home: 2, away: 0 },
    60: { home: 2, away: 0 },
    61: { home: 1, away: 2 },
    62: { home: 2, away: 1 },
    65: { home: 3, away: 1 },
    66: { home: 2, away: 2 },
    63: { home: 3, away: 1 },
    64: { home: 0, away: 4 },
    67: { home: 0, away: 3 },
    68: { home: 3, away: 1 },
    71: { home: 0, away: 1 },
    72: { home: 0, away: 0 },
    69: { home: 1, away: 1 },
    70: { home: 0, away: 3 },
  },
  "William": {
    1: { home: 2, away: 0 },
    2: { home: 1, away: 1 },
    3: { home: 2, away: 1 },
    4: { home: 2, away: 0 },
    8: { home: 0, away: 2 },
    7: { home: 1, away: 0 },
    5: { home: 0, away: 3 },
    6: { home: 0, away: 2 },
    10: { home: 5, away: 0 },
    11: { home: 2, away: 1 },
    9: { home: 1, away: 1 },
    12: { home: 3, away: 1 },
    14: { home: 4, away: 1 },
    16: { home: 3, away: 2 },
    13: { home: 0, away: 2 },
    15: { home: 2, away: 0 },
    17: { home: 3, away: 1 },
    18: { home: 1, away: 3 },
    19: { home: 1, away: 0 },
    20: { home: 3, away: 1 },
    23: { home: 4, away: 1 },
    22: { home: 3, away: 2 },
    21: { home: 2, away: 0 },
    24: { home: 0, away: 3 },
    25: { home: 1, away: 1 },
    26: { home: 3, away: 1 },
    27: { home: 2, away: 0 },
    28: { home: 1, away: 3 },
    32: { home: 1, away: 1 },
    30: { home: 3, away: 2 },
    29: { home: 6, away: 0 },
    31: { home: 2, away: 0 },
    35: { home: 1, away: 2 },
    33: { home: 4, away: 1 },
    34: { home: 3, away: 0 },
    36: { home: 1, away: 3 },
    38: { home: 5, away: 1 },
    39: { home: 4, away: 1 },
    37: { home: 4, away: 0 },
    40: { home: 1, away: 3 },
    43: { home: 2, away: 1 },
    42: { home: 5, away: 0 },
    41: { home: 2, away: 2 },
    44: { home: 0, away: 3 },
    47: { home: 4, away: 0 },
    45: { home: 3, away: 1 },
    46: { home: 0, away: 4 },
    48: { home: 1, away: 0 },
    51: { home: 0, away: 0 },
    52: { home: 2, away: 0 },
    49: { home: 3, away: 1 },
    50: { home: 2, away: 0 },
    53: { home: 1, away: 0 },
    54: { home: 1, away: 3 },
    55: { home: 0, away: 2 },
    56: { home: 1, away: 4 },
    57: { home: 1, away: 1 },
    58: { home: 1, away: 2 },
    59: { home: 2, away: 1 },
    60: { home: 2, away: 2 },
    61: { home: 2, away: 3 },
    62: { home: 2, away: 0 },
    65: { home: 1, away: 1 },
    66: { home: 0, away: 3 },
    63: { home: 1, away: 2 },
    64: { home: 0, away: 4 },
    67: { home: 1, away: 3 },
    68: { home: 3, away: 2 },
    71: { home: 1, away: 2 },
    72: { home: 1, away: 1 },
    69: { home: 2, away: 1 },
    70: { home: 0, away: 5 },
  },
  "Anders": {
    1: { home: 3, away: 0 },
    2: { home: 1, away: 1 },
    3: { home: 0, away: 0 },
    4: { home: 1, away: 0 },
    8: { home: 0, away: 4 },
    7: { home: 2, away: 0 },
    5: { home: 0, away: 1 },
    6: { home: 1, away: 1 },
    10: { home: 5, away: 0 },
    11: { home: 2, away: 1 },
    9: { home: 0, away: 1 },
    12: { home: 1, away: 0 },
    14: { home: 3, away: 0 },
    16: { home: 2, away: 0 },
    13: { home: 1, away: 2 },
    15: { home: 2, away: 0 },
    17: { home: 1, away: 0 },
    18: { home: 0, away: 3 },
    19: { home: 3, away: 1 },
    20: { home: 4, away: 0 },
    23: { home: 2, away: 0 },
    22: { home: 1, away: 1 },
    21: { home: 1, away: 2 },
    24: { home: 0, away: 2 },
    25: { home: 2, away: 0 },
    26: { home: 1, away: 0 },
    27: { home: 4, away: 0 },
    28: { home: 2, away: 1 },
    32: { home: 2, away: 0 },
    30: { home: 0, away: 1 },
    29: { home: 5, away: 0 },
    31: { home: 0, away: 1 },
    35: { home: 2, away: 1 },
    33: { home: 0, away: 0 },
    34: { home: 2, away: 1 },
    36: { home: 1, away: 3 },
    38: { home: 3, away: 0 },
    39: { home: 1, away: 0 },
    37: { home: 4, away: 1 },
    40: { home: 0, away: 2 },
    43: { home: 2, away: 2 },
    42: { home: 2, away: 0 },
    41: { home: 2, away: 1 },
    44: { home: 0, away: 1 },
    47: { home: 3, away: 0 },
    45: { home: 1, away: 0 },
    46: { home: 1, away: 2 },
    48: { home: 6, away: 0 },
    51: { home: 0, away: 0 },
    52: { home: 3, away: 0 },
    49: { home: 0, away: 2 },
    50: { home: 4, away: 0 },
    53: { home: 1, away: 2 },
    54: { home: 1, away: 3 },
    55: { home: 0, away: 2 },
    56: { home: 1, away: 1 },
    57: { home: 2, away: 2 },
    58: { home: 0, away: 3 },
    59: { home: 0, away: 0 },
    60: { home: 1, away: 0 },
    61: { home: 1, away: 1 },
    62: { home: 2, away: 1 },
    65: { home: 0, away: 0 },
    66: { home: 1, away: 1 },
    63: { home: 2, away: 0 },
    64: { home: 0, away: 5 },
    67: { home: 0, away: 3 },
    68: { home: 1, away: 0 },
    71: { home: 1, away: 1 },
    72: { home: 0, away: 0 },
    69: { home: 1, away: 2 },
    70: { home: 0, away: 6 },
  },
  "Nils": {
    1: { home: 2, away: 2 },
    2: { home: 2, away: 1 },
    3: { home: 1, away: 0 },
    4: { home: 2, away: 3 },
    8: { home: 0, away: 3 },
    7: { home: 2, away: 2 },
    5: { home: 0, away: 1 },
    6: { home: 1, away: 1 },
    10: { home: 1, away: 1 },
    11: { home: 1, away: 3 },
    9: { home: 0, away: 1 },
    12: { home: 3, away: 2 },
    14: { home: 3, away: 0 },
    16: { home: 1, away: 2 },
    13: { home: 0, away: 2 },
    15: { home: 1, away: 1 },
    17: { home: 2, away: 2 },
    18: { home: 1, away: 3 },
    19: { home: 2, away: 1 },
    20: { home: 1, away: 0 },
    23: { home: 3, away: 2 },
    22: { home: 2, away: 1 },
    21: { home: 3, away: 0 },
    24: { home: 3, away: 2 },
    25: { home: 1, away: 2 },
    26: { home: 4, away: 1 },
    27: { home: 2, away: 1 },
    28: { home: 1, away: 3 },
    32: { home: 3, away: 2 },
    30: { home: 1, away: 0 },
    29: { home: 3, away: 0 },
    31: { home: 5, away: 2 },
    35: { home: 2, away: 2 },
    33: { home: 5, away: 1 },
    34: { home: 0, away: 0 },
    36: { home: 1, away: 4 },
    38: { home: 3, away: 0 },
    39: { home: 0, away: 2 },
    37: { home: 3, away: 1 },
    40: { home: 1, away: 1 },
    43: { home: 1, away: 1 },
    42: { home: 3, away: 1 },
    41: { home: 2, away: 2 },
    44: { home: 2, away: 2 },
    47: { home: 2, away: 1 },
    45: { home: 1, away: 0 },
    46: { home: 0, away: 2 },
    48: { home: 1, away: 0 },
    51: { home: 0, away: 4 },
    52: { home: 2, away: 1 },
    49: { home: 1, away: 1 },
    50: { home: 3, away: 0 },
    53: { home: 1, away: 3 },
    54: { home: 2, away: 1 },
    55: { home: 1, away: 1 },
    56: { home: 1, away: 3 },
    57: { home: 4, away: 1 },
    58: { home: 1, away: 0 },
    59: { home: 3, away: 0 },
    60: { home: 1, away: 1 },
    61: { home: 2, away: 1 },
    62: { home: 3, away: 0 },
    65: { home: 0, away: 0 },
    66: { home: 0, away: 2 },
    63: { home: 1, away: 2 },
    64: { home: 0, away: 2 },
    67: { home: 0, away: 3 },
    68: { home: 1, away: 2 },
    71: { home: 1, away: 2 },
    72: { home: 1, away: 1 },
    69: { home: 0, away: 1 },
    70: { home: 0, away: 2 },
  },
  "Axel": {
    1: { home: 2, away: 0 },
    2: { home: 1, away: 1 },
    3: { home: 2, away: 1 },
    4: { home: 2, away: 1 },
    8: { home: 0, away: 3 },
    7: { home: 3, away: 1 },
    5: { home: 0, away: 2 },
    6: { home: 0, away: 1 },
    10: { home: 5, away: 0 },
    11: { home: 2, away: 1 },
    9: { home: 2, away: 1 },
    12: { home: 2, away: 1 },
    14: { home: 6, away: 0 },
    16: { home: 3, away: 1 },
    13: { home: 1, away: 4 },
    15: { home: 0, away: 0 },
    17: { home: 2, away: 1 },
    18: { home: 0, away: 2 },
    19: { home: 2, away: 1 },
    20: { home: 2, away: 0 },
    23: { home: 4, away: 1 },
    22: { home: 2, away: 2 },
    21: { home: 3, away: 1 },
    24: { home: 0, away: 2 },
    25: { home: 1, away: 0 },
    26: { home: 1, away: 1 },
    27: { home: 2, away: 0 },
    28: { home: 0, away: 0 },
    32: { home: 2, away: 2 },
    30: { home: 1, away: 1 },
    29: { home: 5, away: 0 },
    31: { home: 1, away: 0 },
    35: { home: 2, away: 1 },
    33: { home: 2, away: 1 },
    34: { home: 2, away: 0 },
    36: { home: 0, away: 1 },
    38: { home: 3, away: 0 },
    39: { home: 4, away: 0 },
    37: { home: 4, away: 1 },
    40: { home: 1, away: 2 },
    43: { home: 2, away: 1 },
    42: { home: 4, away: 0 },
    41: { home: 1, away: 1 },
    44: { home: 1, away: 2 },
    47: { home: 6, away: 0 },
    45: { home: 1, away: 0 },
    46: { home: 0, away: 3 },
    48: { home: 2, away: 0 },
    51: { home: 1, away: 1 },
    52: { home: 1, away: 0 },
    49: { home: 1, away: 3 },
    50: { home: 2, away: 0 },
    53: { home: 2, away: 2 },
    54: { home: 0, away: 0 },
    55: { home: 1, away: 4 },
    56: { home: 1, away: 3 },
    57: { home: 2, away: 1 },
    58: { home: 1, away: 3 },
    59: { home: 2, away: 1 },
    60: { home: 1, away: 1 },
    61: { home: 1, away: 2 },
    62: { home: 2, away: 0 },
    65: { home: 2, away: 2 },
    66: { home: 2, away: 2 },
    63: { home: 1, away: 1 },
    64: { home: 0, away: 3 },
    67: { home: 0, away: 3 },
    68: { home: 1, away: 1 },
    71: { home: 1, away: 2 },
    72: { home: 1, away: 1 },
    69: { home: 2, away: 2 },
    70: { home: 0, away: 4 },
  },
  "Niklas": {
    1: { home: 3, away: 1 },
    2: { home: 2, away: 2 },
    3: { home: 0, away: 2 },
    4: { home: 1, away: 2 },
    8: { home: 0, away: 3 },
    7: { home: 0, away: 1 },
    5: { home: 1, away: 4 },
    6: { home: 0, away: 0 },
    10: { home: 5, away: 0 },
    11: { home: 2, away: 3 },
    9: { home: 1, away: 1 },
    12: { home: 0, away: 1 },
    14: { home: 4, away: 0 },
    16: { home: 2, away: 0 },
    13: { home: 3, away: 3 },
    15: { home: 3, away: 1 },
    17: { home: 1, away: 1 },
    18: { home: 0, away: 4 },
    19: { home: 1, away: 0 },
    20: { home: 3, away: 0 },
    23: { home: 4, away: 1 },
    22: { home: 1, away: 1 },
    21: { home: 2, away: 0 },
    24: { home: 0, away: 2 },
    25: { home: 2, away: 1 },
    26: { home: 1, away: 1 },
    27: { home: 0, away: 0 },
    28: { home: 3, away: 2 },
    32: { home: 4, away: 3 },
    30: { home: 0, away: 1 },
    29: { home: 5, away: 1 },
    31: { home: 1, away: 0 },
    35: { home: 4, away: 0 },
    33: { home: 1, away: 2 },
    34: { home: 3, away: 0 },
    36: { home: 1, away: 3 },
    38: { home: 3, away: 1 },
    39: { home: 1, away: 2 },
    37: { home: 4, away: 1 },
    40: { home: 0, away: 0 },
    43: { home: 0, away: 0 },
    42: { home: 4, away: 0 },
    41: { home: 1, away: 2 },
    44: { home: 1, away: 2 },
    47: { home: 4, away: 0 },
    45: { home: 3, away: 0 },
    46: { home: 0, away: 2 },
    48: { home: 3, away: 1 },
    51: { home: 2, away: 1 },
    52: { home: 3, away: 1 },
    49: { home: 1, away: 4 },
    50: { home: 3, away: 0 },
    53: { home: 2, away: 4 },
    54: { home: 1, away: 3 },
    55: { home: 0, away: 0 },
    56: { home: 2, away: 0 },
    57: { home: 3, away: 0 },
    58: { home: 0, away: 2 },
    59: { home: 2, away: 3 },
    60: { home: 2, away: 1 },
    61: { home: 3, away: 3 },
    62: { home: 5, away: 0 },
    65: { home: 1, away: 3 },
    66: { home: 1, away: 3 },
    63: { home: 0, away: 2 },
    64: { home: 0, away: 1 },
    67: { home: 1, away: 6 },
    68: { home: 2, away: 2 },
    71: { home: 3, away: 2 },
    72: { home: 1, away: 1 },
    69: { home: 0, away: 2 },
    70: { home: 0, away: 4 },
  },
  "Måns": {
    1: { home: 2, away: 1 },
    2: { home: 1, away: 1 },
    3: { home: 2, away: 1 },
    4: { home: 3, away: 1 },
    8: { home: 0, away: 3 },
    7: { home: 3, away: 0 },
    5: { home: 0, away: 4 },
    6: { home: 1, away: 3 },
    10: { home: 5, away: 0 },
    11: { home: 2, away: 2 },
    9: { home: 2, away: 1 },
    12: { home: 1, away: 0 },
    14: { home: 4, away: 1 },
    16: { home: 3, away: 1 },
    13: { home: 1, away: 4 },
    15: { home: 1, away: 0 },
    17: { home: 3, away: 1 },
    18: { home: 0, away: 3 },
    19: { home: 3, away: 0 },
    20: { home: 3, away: 1 },
    23: { home: 3, away: 0 },
    22: { home: 1, away: 2 },
    21: { home: 3, away: 1 },
    24: { home: 1, away: 3 },
    25: { home: 2, away: 1 },
    26: { home: 3, away: 1 },
    27: { home: 2, away: 0 },
    28: { home: 1, away: 1 },
    32: { home: 2, away: 2 },
    30: { home: 3, away: 1 },
    29: { home: 4, away: 0 },
    31: { home: 2, away: 2 },
    35: { home: 1, away: 1 },
    33: { home: 3, away: 0 },
    34: { home: 2, away: 0 },
    36: { home: 0, away: 2 },
    38: { home: 3, away: 0 },
    39: { home: 3, away: 1 },
    37: { home: 1, away: 0 },
    40: { home: 0, away: 1 },
    43: { home: 2, away: 1 },
    42: { home: 4, away: 0 },
    41: { home: 2, away: 0 },
    44: { home: 2, away: 2 },
    47: { home: 2, away: 0 },
    45: { home: 2, away: 0 },
    46: { home: 0, away: 3 },
    48: { home: 1, away: 1 },
    51: { home: 2, away: 1 },
    52: { home: 1, away: 0 },
    49: { home: 1, away: 2 },
    50: { home: 1, away: 0 },
    53: { home: 1, away: 2 },
    54: { home: 0, away: 2 },
    55: { home: 0, away: 3 },
    56: { home: 0, away: 2 },
    57: { home: 2, away: 1 },
    58: { home: 0, away: 2 },
    59: { home: 1, away: 2 },
    60: { home: 2, away: 1 },
    61: { home: 1, away: 1 },
    62: { home: 3, away: 1 },
    65: { home: 1, away: 1 },
    66: { home: 0, away: 3 },
    63: { home: 2, away: 1 },
    64: { home: 0, away: 3 },
    67: { home: 0, away: 2 },
    68: { home: 2, away: 1 },
    71: { home: 3, away: 2 },
    72: { home: 3, away: 1 },
    69: { home: 1, away: 2 },
    70: { home: 0, away: 2 },
  },
};

const emptyPredictions = Object.fromEntries(matches.map((match) => [match.number, null]));
const predictions = Object.fromEntries(
  players.map((player) => [player, { ...emptyPredictions, ...(submittedPredictions[player] || {}) }])
);

function outcome(score) {
  if (!score) return null;
  if (score.home > score.away) return "1";
  if (score.home < score.away) return "2";
  return "X";
}

function pointsFor(prediction, result) {
  if (!prediction || !result) return { points: 0, correctOutcome: false, exact: false };
  const correctOutcome = outcome(prediction) === outcome(result);
  const exact = prediction.home === result.home && prediction.away === result.away;
  return {
    points: (correctOutcome ? 3 : 0) + (exact ? 2 : 0),
    correctOutcome,
    exact,
  };
}

function scoreText(score) {
  return score ? `${score.home}-${score.away}` : "Ej spelad";
}

function teamLabel(team) {
  return `${flags[team] || ""} ${team}`.trim();
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function calculateLeaderboard() {
  return players
    .map((player) => {
      const stats = matches.reduce(
        (total, match) => {
          const score = pointsFor(predictions[player][match.number], match.result);
          total.points += score.points;
          total.correctOutcomes += score.correctOutcome ? 1 : 0;
          total.exacts += score.exact ? 1 : 0;
          return total;
        },
        { player, points: 0, correctOutcomes: 0, exacts: 0 }
      );
      return stats;
    })
    .sort((a, b) => b.points - a.points || b.exacts - a.exacts || a.player.localeCompare(b.player, "sv"));
}

function renderLeaderboard() {
  const body = document.querySelector("#leaderboard-body");
  body.innerHTML = calculateLeaderboard()
    .map(
      (row, index) => `
        <tr>
          <td><span class="rank">${index + 1}</span></td>
          <td>
            <span class="player-cell">
              <button class="player-button" type="button" data-player="${row.player}">
                <span class="avatar">${row.player.slice(0, 1)}</span>
                <span class="player-name">${row.player}</span>
              </button>
            </span>
          </td>
          <td>${row.points}</td>
          <td>${row.correctOutcomes}</td>
          <td>${row.exacts}</td>
        </tr>
      `
    )
    .join("");

  const played = matches.filter((match) => match.result).length;
  document.querySelector("#played-count").textContent = `${played}/${matches.length}`;
  renderLiveFixtures();
}

function renderFixtureList(containerId, countId, dateKey) {
  const list = document.querySelector(containerId);
  const fixtures = matches.filter((match) => match.date === dateKey);
  document.querySelector(countId).textContent = fixtures.length;

  list.innerHTML = fixtures.length
    ? fixtures
        .map(
          (match) => `
            <button class="mini-match-card" type="button" data-match="${match.number}">
              <span class="mini-match-time">${match.time} · Grupp ${match.group}</span>
              <span class="mini-match-teams">${teamLabel(match.home)} - ${teamLabel(match.away)}</span>
            </button>
          `
        )
        .join("")
    : `<p class="empty-fixtures">Inga matcher.</p>`;
}

function renderLiveFixtures() {
  const today = new Date();
  renderFixtureList("#today-matches", "#today-count", localDateKey(today));
  renderFixtureList("#tomorrow-matches", "#tomorrow-count", localDateKey(addDays(today, 1)));
}

function playerStats(player) {
  return matches.reduce(
    (total, match) => {
      const prediction = predictions[player][match.number];
      const score = pointsFor(prediction, match.result);
      total.points += score.points;
      total.correctOutcomes += score.correctOutcome ? 1 : 0;
      total.exacts += score.exact ? 1 : 0;
      total.submitted += prediction ? 1 : 0;
      return total;
    },
    { points: 0, correctOutcomes: 0, exacts: 0, submitted: 0 }
  );
}

function submittedCount(player) {
  return matches.filter((match) => predictions[player][match.number]).length;
}

function simulationPlayers() {
  const submitted = players.filter((player) => submittedCount(player) > 0);
  return submitted.length ? submitted : players;
}

function emptyTeamRow(team) {
  return {
    team,
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
  };
}

function calculateGroupTables(player) {
  const tables = Object.fromEntries(
    [...new Set(matches.map((match) => match.group))].map((group) => [group, {}])
  );

  matches.forEach((match) => {
    if (!tables[match.group][match.home]) tables[match.group][match.home] = emptyTeamRow(match.home);
    if (!tables[match.group][match.away]) tables[match.group][match.away] = emptyTeamRow(match.away);

    const prediction = predictions[player][match.number];
    if (!prediction) return;

    const home = tables[match.group][match.home];
    const away = tables[match.group][match.away];
    home.played += 1;
    away.played += 1;
    home.goalsFor += prediction.home;
    home.goalsAgainst += prediction.away;
    away.goalsFor += prediction.away;
    away.goalsAgainst += prediction.home;

    if (prediction.home > prediction.away) {
      home.wins += 1;
      away.losses += 1;
      home.points += 3;
    } else if (prediction.home < prediction.away) {
      away.wins += 1;
      home.losses += 1;
      away.points += 3;
    } else {
      home.draws += 1;
      away.draws += 1;
      home.points += 1;
      away.points += 1;
    }
  });

  return Object.fromEntries(
    Object.entries(tables).map(([group, teams]) => [
      group,
      Object.values(teams)
        .map((team) => ({
          ...team,
          goalDifference: team.goalsFor - team.goalsAgainst,
        }))
        .sort(
          (a, b) =>
            b.points - a.points ||
            b.goalDifference - a.goalDifference ||
            b.goalsFor - a.goalsFor ||
            a.team.localeCompare(b.team, "sv")
        ),
    ])
  );
}

function renderSimulationTabs(activePlayer = simulationPlayers()[0]) {
  const container = document.querySelector("#sim-player-tabs");
  container.innerHTML = simulationPlayers()
    .map(
      (player) => `
        <button class="sim-player-button ${player === activePlayer ? "is-active" : ""}" type="button" data-player="${player}">
          ${player}
        </button>
      `
    )
    .join("");
}

function renderSimulation(player = simulationPlayers()[0]) {
  const tables = calculateGroupTables(player);
  const count = submittedCount(player);
  renderSimulationTabs(player);
  document.querySelector("#simulation-summary").innerHTML = `
    <strong>${player}</strong>
    <span class="muted">${count}/${matches.length} tips används i simuleringen.</span>
  `;
  document.querySelector("#simulation-grid").innerHTML = Object.entries(tables)
    .sort(([groupA], [groupB]) => groupA.localeCompare(groupB, "sv"))
    .map(
      ([group, teams]) => `
        <section class="group-table-card">
          <div class="group-table-heading">
            <strong>Grupp ${group}</strong>
            <span>${teams.length} lag</span>
          </div>
          <table class="sim-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Lag</th>
                <th>P</th>
                <th>MS</th>
                <th>GM</th>
                <th>Po</th>
              </tr>
            </thead>
            <tbody>
              ${teams
                .map(
                  (team, index) => `
                    <tr>
                      <td><span class="rank">${index + 1}</span></td>
                      <td>
                        <span class="sim-team">
                          <span>${flags[team.team] || ""}</span>
                          <span>${team.team}</span>
                        </span>
                      </td>
                      <td>${team.played}</td>
                      <td>${team.goalDifference > 0 ? "+" : ""}${team.goalDifference}</td>
                      <td>${team.goalsFor}</td>
                      <td>${team.points}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </section>
      `
    )
    .join("");
}

function renderFilters() {
  const filters = document.querySelector(".filters");
  const groups = [...new Set(matches.map((match) => match.group))];
  filters.insertAdjacentHTML(
    "beforeend",
    groups.map((group) => `<button class="filter-button" type="button" data-group="${group}">${group}</button>`).join("")
  );
}

function renderMatches(group = "all") {
  const list = document.querySelector("#match-list");
  const visibleMatches = group === "all" ? matches : matches.filter((match) => match.group === group);

  list.innerHTML = visibleMatches
    .map(
      (match) => `
        <button class="match-card" type="button" data-match="${match.number}">
          <span class="match-card-grid">
            <span class="match-number">Match ${match.number}<br>Grupp ${match.group}</span>
            <span class="teams">
              <span class="team-line"><span class="flag">${flags[match.home]}</span>${match.home}</span>
              <span class="team-line"><span class="flag">${flags[match.away]}</span>${match.away}</span>
            </span>
            <span class="match-meta">
              <span class="result-pill">${scoreText(match.result)}</span><br>
              ${match.date} ${match.time} svensk tid<br>
              ${match.venue}
            </span>
          </span>
        </button>
      `
    )
    .join("");
}

function openMatch(matchNumber) {
  const match = matches.find((item) => item.number === matchNumber);
  const dialog = document.querySelector("#match-dialog");
  document.querySelector("#dialog-meta").textContent = `Match ${match.number} · Grupp ${match.group} · ${match.date} ${match.time} svensk tid`;
  document.querySelector("#dialog-title").textContent = `${teamLabel(match.home)} vs ${teamLabel(match.away)}`;
  document.querySelector("#dialog-score").innerHTML = `
    <span>${teamLabel(match.home)}</span>
    <span class="result-pill">${scoreText(match.result)}</span>
    <span>${teamLabel(match.away)}</span>
  `;
  document.querySelector("#tips-list").innerHTML = players
    .map((player) => {
      const prediction = predictions[player][match.number];
      const score = pointsFor(prediction, match.result);
      return `
        <div class="tip-row">
          <div>
            <strong>${player}</strong>
            <p class="muted">${prediction ? `Tips: ${scoreText(prediction)} (${outcome(prediction)})` : "Inväntar tips"}</p>
          </div>
          <strong class="${prediction ? "" : "empty-pick"}">${prediction ? scoreText(prediction) : "-"}</strong>
          <span class="points">${score.points}p</span>
        </div>
      `;
    })
    .join("");

  dialog.showModal();
}

function openPlayer(player) {
  const dialog = document.querySelector("#player-dialog");
  const stats = playerStats(player);
  document.querySelector("#player-dialog-meta").textContent = `${stats.submitted}/${matches.length} gruppspelstips`;
  document.querySelector("#player-dialog-title").textContent = player;
  document.querySelector("#player-summary").innerHTML = `
    <div class="summary-stat">
      <span>Poäng</span>
      <strong>${stats.points}</strong>
    </div>
    <div class="summary-stat">
      <span>Rätt 1X2</span>
      <strong>${stats.correctOutcomes}</strong>
    </div>
    <div class="summary-stat">
      <span>Exakta</span>
      <strong>${stats.exacts}</strong>
    </div>
  `;
  document.querySelector("#player-picks").innerHTML = matches
    .map((match) => {
      const prediction = predictions[player][match.number];
      return `
        <div class="player-pick-row">
          <div class="pick-match-meta">
            Match ${match.number}<br>
            Grupp ${match.group}
          </div>
          <div class="pick-teams">
            <strong>${teamLabel(match.home)} - ${teamLabel(match.away)}</strong>
            <p class="muted">${match.date} ${match.time} svensk tid</p>
          </div>
          <div class="pick-score">
            <strong class="${prediction ? "" : "empty-pick"}">${prediction ? scoreText(prediction) : "-"}</strong>
            <span class="outcome-pill">${prediction ? outcome(prediction) : "-"}</span>
          </div>
        </div>
      `;
    })
    .join("");

  dialog.showModal();
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".view").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.querySelector(`#${button.dataset.view}-view`).classList.add("is-active");
  });
});

document.querySelector(".filters").addEventListener("click", (event) => {
  const button = event.target.closest(".filter-button");
  if (!button) return;
  document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
  renderMatches(button.dataset.group);
});

document.querySelector("#match-list").addEventListener("click", (event) => {
  const card = event.target.closest(".match-card");
  if (!card) return;
  openMatch(Number(card.dataset.match));
});

document.querySelector(".score-panel").addEventListener("click", (event) => {
  const card = event.target.closest(".mini-match-card");
  if (!card) return;
  openMatch(Number(card.dataset.match));
});

document.querySelector("#leaderboard-body").addEventListener("click", (event) => {
  const button = event.target.closest(".player-button");
  if (!button) return;
  openPlayer(button.dataset.player);
});

document.querySelector("#sim-player-tabs").addEventListener("click", (event) => {
  const button = event.target.closest(".sim-player-button");
  if (!button) return;
  renderSimulation(button.dataset.player);
});

document.querySelector("#close-dialog").addEventListener("click", () => {
  document.querySelector("#match-dialog").close();
});

document.querySelector("#close-player-dialog").addEventListener("click", () => {
  document.querySelector("#player-dialog").close();
});

renderFilters();
renderLeaderboard();
renderMatches();
renderSimulation();
