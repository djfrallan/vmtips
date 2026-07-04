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

const remoteResultsUrl = "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json";

const remoteTeamNames = {
  Algeria: "Algeriet",
  Argentina: "Argentina",
  Australia: "Australien",
  Austria: "Österrike",
  Belgium: "Belgien",
  "Bosnia & Herzegovina": "Bosnien och Hercegovina",
  "Bosnia-Herzegovina": "Bosnien och Hercegovina",
  Brazil: "Brasilien",
  Canada: "Canada",
  "Cape Verde": "Kap Verde",
  Colombia: "Colombia",
  Croatia: "Kroatien",
  "Curaçao": "Curaçao",
  "Czech Republic": "Tjeckien",
  Czechia: "Tjeckien",
  "DR Congo": "DR Kongo",
  Ecuador: "Ecuador",
  Egypt: "Egypten",
  England: "England",
  France: "Frankrike",
  Germany: "Tyskland",
  Ghana: "Ghana",
  Haiti: "Haiti",
  Iran: "Iran",
  Iraq: "Irak",
  "Ivory Coast": "Elfenbenskusten",
  Japan: "Japan",
  Jordan: "Jordanien",
  Mexico: "Mexico",
  Morocco: "Marocko",
  Netherlands: "Nederländerna",
  "New Zealand": "Nya Zeeland",
  Norway: "Norge",
  Panama: "Panama",
  Paraguay: "Paraguay",
  Portugal: "Portugal",
  Qatar: "Qatar",
  "Saudi Arabia": "Saudiarabien",
  Scotland: "Skottland",
  Senegal: "Senegal",
  "South Africa": "Sydafrika",
  "South Korea": "Sydkorea",
  Spain: "Spanien",
  Sweden: "Sverige",
  Switzerland: "Schweiz",
  Tunisia: "Tunisien",
  Turkey: "Turkiet",
  USA: "USA",
  Uruguay: "Uruguay",
  Uzbekistan: "Uzbekistan",
};

const matches = schedule.map(([group, number, date, time, home, away, venue]) => ({
  group,
  number,
  date,
  time,
  home,
  away,
  venue,
  result: null,
  goals: [],
}));

const actualGroupResults = {
  1: { home: 2, away: 0 },
  2: { home: 2, away: 1 },
  3: { home: 1, away: 1 },
  4: { home: 4, away: 1 },
  8: { home: 1, away: 1 },
  7: { home: 1, away: 1 },
  5: { home: 0, away: 1 },
  6: { home: 2, away: 0 },
  10: { home: 7, away: 1 },
  11: { home: 2, away: 2 },
  9: { home: 1, away: 0 },
  12: { home: 5, away: 1 },
  14: { home: 0, away: 0 },
  16: { home: 1, away: 1 },
  13: { home: 1, away: 1 },
  15: { home: 2, away: 2 },
  17: { home: 3, away: 1 },
  18: { home: 1, away: 4 },
  19: { home: 3, away: 0 },
  20: { home: 3, away: 1 },
  23: { home: 1, away: 1 },
  22: { home: 4, away: 2 },
  21: { home: 1, away: 0 },
  24: { home: 1, away: 3 },
  25: { home: 1, away: 1 },
  26: { home: 4, away: 1 },
  27: { home: 6, away: 0 },
  28: { home: 1, away: 0 },
  32: { home: 2, away: 0 },
  30: { home: 0, away: 1 },
  29: { home: 3, away: 0 },
  31: { home: 0, away: 1 },
  35: { home: 5, away: 1 },
  33: { home: 2, away: 1 },
  34: { home: 0, away: 0 },
  36: { home: 0, away: 4 },
  38: { home: 4, away: 0 },
  39: { home: 0, away: 0 },
  37: { home: 2, away: 2 },
  40: { home: 1, away: 3 },
  43: { home: 2, away: 0 },
  42: { home: 3, away: 0 },
  41: { home: 3, away: 2 },
  44: { home: 1, away: 2 },
  47: { home: 5, away: 0 },
  45: { home: 0, away: 0 },
  46: { home: 0, away: 1 },
  48: { home: 1, away: 0 },
  51: { home: 2, away: 1 },
  52: { home: 3, away: 1 },
  49: { home: 0, away: 3 },
  50: { home: 4, away: 2 },
  53: { home: 0, away: 3 },
  54: { home: 1, away: 0 },
  55: { home: 0, away: 2 },
  56: { home: 2, away: 1 },
  57: { home: 1, away: 1 },
  58: { home: 1, away: 3 },
  59: { home: 3, away: 2 },
  60: { home: 0, away: 0 },
  61: { home: 1, away: 4 },
  62: { home: 5, away: 0 },
  65: { home: 0, away: 0 },
  66: { home: 0, away: 1 },
  63: { home: 1, away: 1 },
  64: { home: 1, away: 5 },
  67: { home: 0, away: 2 },
  68: { home: 2, away: 1 },
  71: { home: 0, away: 0 },
  72: { home: 3, away: 1 },
  69: { home: 3, away: 3 },
  70: { home: 1, away: 3 },
};

const knockoutStages = [
  { id: "round32", label: "Sextondel", title: "Sextondelsfinaler" },
  { id: "round16", label: "Åttondel", title: "Åttondelsfinaler" },
  { id: "quarter", label: "Kvart", title: "Kvartsfinaler" },
  { id: "semi", label: "Semi", title: "Semifinaler" },
  { id: "bronze", label: "Brons", title: "Bronsmatch" },
  { id: "final", label: "Final", title: "Final" },
];

const knockoutMatches = [
  { number: 73, stage: "round32", sources: ["2A", "2B"] },
  { number: 74, stage: "round32", sources: ["1E", "3D"] },
  { number: 75, stage: "round32", sources: ["1F", "2C"] },
  { number: 76, stage: "round32", sources: ["1C", "2F"] },
  { number: 77, stage: "round32", sources: ["1I", "3F"] },
  { number: 78, stage: "round32", sources: ["2E", "2I"] },
  { number: 79, stage: "round32", sources: ["1A", "3E"] },
  { number: 80, stage: "round32", sources: ["1L", "3K"] },
  { number: 81, stage: "round32", sources: ["1D", "3B"] },
  { number: 82, stage: "round32", sources: ["1G", "3I"] },
  { number: 83, stage: "round32", sources: ["2K", "2L"] },
  { number: 84, stage: "round32", sources: ["1H", "2J"] },
  { number: 85, stage: "round32", sources: ["1B", "3J"] },
  { number: 86, stage: "round32", sources: ["1J", "2H"] },
  { number: 87, stage: "round32", sources: ["1K", "3L"] },
  { number: 88, stage: "round32", sources: ["2D", "2G"] },
  { number: 89, stage: "round16", sources: ["W74", "W77"] },
  { number: 90, stage: "round16", sources: ["W73", "W75"] },
  { number: 91, stage: "round16", sources: ["W76", "W78"] },
  { number: 92, stage: "round16", sources: ["W79", "W80"] },
  { number: 93, stage: "round16", sources: ["W83", "W84"] },
  { number: 94, stage: "round16", sources: ["W81", "W82"] },
  { number: 95, stage: "round16", sources: ["W86", "W88"] },
  { number: 96, stage: "round16", sources: ["W85", "W87"] },
  { number: 97, stage: "quarter", sources: ["W89", "W90"] },
  { number: 98, stage: "quarter", sources: ["W93", "W94"] },
  { number: 99, stage: "quarter", sources: ["W91", "W92"] },
  { number: 100, stage: "quarter", sources: ["W95", "W96"] },
  { number: 101, stage: "semi", sources: ["W97", "W98"] },
  { number: 102, stage: "semi", sources: ["W99", "W100"] },
  { number: 103, stage: "bronze", sources: ["L101", "L102"] },
  { number: 104, stage: "final", sources: ["W101", "W102"] },
];

const remoteKnockoutMatches = new Map();

function knockoutStageLabel(stageId) {
  return knockoutStages.find((stage) => stage.id === stageId)?.label || sourceDescription(stageId);
}

const knockoutSchedule = {
  73: { date: "2026-06-28", time: "21:00", venue: "SoFi Stadium, Inglewood" },
  74: { date: "2026-06-29", time: "22:30", venue: "Gillette Stadium, Foxborough" },
  75: { date: "2026-06-30", time: "03:00", venue: "Estadio BBVA, Guadalupe" },
  76: { date: "2026-06-29", time: "19:00", venue: "NRG Stadium, Houston" },
  77: { date: "2026-06-30", time: "23:00", venue: "MetLife Stadium, East Rutherford" },
  78: { date: "2026-06-30", time: "19:00", venue: "AT&T Stadium, Arlington" },
  79: { date: "2026-07-01", time: "03:00", venue: "Estadio Azteca, Mexico City" },
  80: { date: "2026-07-01", time: "18:00", venue: "Mercedes-Benz Stadium, Atlanta" },
  81: { date: "2026-07-02", time: "02:00", venue: "Levi's Stadium, Santa Clara" },
  82: { date: "2026-07-01", time: "22:00", venue: "Lumen Field, Seattle" },
  83: { date: "2026-07-03", time: "01:00", venue: "BMO Field, Toronto" },
  84: { date: "2026-07-02", time: "21:00", venue: "SoFi Stadium, Inglewood" },
  85: { date: "2026-07-03", time: "05:00", venue: "BC Place, Vancouver" },
  86: { date: "2026-07-04", time: "00:00", venue: "Hard Rock Stadium, Miami Gardens" },
  87: { date: "2026-07-04", time: "03:30", venue: "Arrowhead Stadium, Kansas City" },
  88: { date: "2026-07-03", time: "20:00", venue: "AT&T Stadium, Arlington" },
  89: { date: "2026-07-04", time: "23:00", venue: "Lincoln Financial Field, Philadelphia" },
  90: { date: "2026-07-04", time: "19:00", venue: "NRG Stadium, Houston" },
  91: { date: "2026-07-05", time: "22:00", venue: "MetLife Stadium, East Rutherford" },
  92: { date: "2026-07-06", time: "02:00", venue: "Estadio Azteca, Mexico City" },
  93: { date: "2026-07-06", time: "21:00", venue: "AT&T Stadium, Arlington" },
  94: { date: "2026-07-07", time: "02:00", venue: "Lumen Field, Seattle" },
  95: { date: "2026-07-07", time: "18:00", venue: "Mercedes-Benz Stadium, Atlanta" },
  96: { date: "2026-07-07", time: "22:00", venue: "BC Place, Vancouver" },
  97: { date: "2026-07-09", time: "22:00", venue: "Gillette Stadium, Foxborough" },
  98: { date: "2026-07-10", time: "21:00", venue: "SoFi Stadium, Inglewood" },
  99: { date: "2026-07-11", time: "23:00", venue: "Hard Rock Stadium, Miami Gardens" },
  100: { date: "2026-07-12", time: "03:00", venue: "Arrowhead Stadium, Kansas City" },
  101: { date: "2026-07-14", time: "21:00", venue: "AT&T Stadium, Arlington" },
  102: { date: "2026-07-15", time: "21:00", venue: "Mercedes-Benz Stadium, Atlanta" },
  103: { date: "2026-07-18", time: "23:00", venue: "Hard Rock Stadium, Miami Gardens" },
  104: { date: "2026-07-19", time: "21:00", venue: "MetLife Stadium, East Rutherford" },
};

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

const emptyPredictions = Object.fromEntries(
  [...matches.map((match) => match.number), ...knockoutMatches.map((match) => match.number)].map((number) => [number, null])
);
const predictions = Object.fromEntries(
  players.map((player) => [player, { ...emptyPredictions, ...(submittedPredictions[player] || {}) }])
);

const submittedKnockoutPredictions = {
  "Magnus": {
    73: { home: 1, away: 2 },
    76: { home: 2, away: 0 },
    74: { home: 2, away: 0 },
    75: { home: 1, away: 1 },
    78: { home: 1, away: 1 },
    77: { home: 3, away: 1 },
    79: { home: 2, away: 0 },
    80: { home: 2, away: 0 },
    82: { home: 2, away: 1 },
    81: { home: 2, away: 1 },
    84: { home: 2, away: 0 },
    83: { home: 1, away: 1 },
    85: { home: 2, away: 0 },
    88: { home: 1, away: 1 },
    86: { home: 3, away: 0 },
    87: { home: 2, away: 1 },
    89: { home: 0, away: 2 },
    90: { home: 0, away: 1 },
    91: { home: 2, away: 1 },
    92: { home: 1, away: 1 },
    93: { home: 1, away: 1 },
    94: { home: 1, away: 2 },
    95: { home: 2, away: 0 },
    96: { home: 1, away: 0 },
  },
  "Rasmus": {
    73: { home: 1, away: 3 },
    74: { home: 4, away: 1 },
    75: { home: 2, away: 1 },
    76: { home: 3, away: 1 },
    77: { home: 5, away: 0 },
    78: { home: 0, away: 2 },
    79: { home: 2, away: 1 },
    80: { home: 3, away: 0 },
    81: { home: 2, away: 0 },
    82: { home: 1, away: 2 },
    83: { home: 2, away: 0 },
    84: { home: 2, away: 1 },
    85: { home: 1, away: 0 },
    86: { home: 5, away: 0 },
    87: { home: 0, away: 2 },
    88: { home: 1, away: 2 },
    89: { home: 1, away: 3 },
    90: { home: 1, away: 1 },
    91: { home: 2, away: 1 },
    92: { home: 1, away: 2 },
    93: { home: 1, away: 1 },
    94: { home: 2, away: 1 },
    95: { home: 3, away: 0 },
    96: { home: 1, away: 1 },
  },
  "Måns": {
    73: { home: 2, away: 1 },
    74: { home: 4, away: 1 },
    75: { home: 2, away: 1 },
    76: { home: 2, away: 1 },
    77: { home: 4, away: 1 },
    78: { home: 1, away: 3 },
    79: { home: 2, away: 0 },
    80: { home: 2, away: 0 },
    81: { home: 0, away: 1 },
    82: { home: 2, away: 0 },
    83: { home: 3, away: 0 },
    84: { home: 2, away: 0 },
    85: { home: 2, away: 1 },
    86: { home: 3, away: 0 },
    87: { home: 0, away: 2 },
    88: { home: 2, away: 0 },
    89: { home: 1, away: 3 },
    90: { home: 0, away: 2 },
    91: { home: 2, away: 2 },
    92: { home: 1, away: 1 },
    93: { home: 0, away: 2 },
    94: { home: 0, away: 2 },
    95: { home: 3, away: 1 },
    96: { home: 2, away: 0 },
  },
  "Fredrik": {
    73: { home: 2, away: 1 },
    74: { home: 3, away: 1 },
    75: { home: 3, away: 1 },
    76: { home: 1, away: 1 },
    77: { home: 3, away: 1 },
    78: { home: 0, away: 2 },
    79: { home: 2, away: 1 },
    80: { home: 3, away: 0 },
    81: { home: 2, away: 2 },
    82: { home: 1, away: 2 },
    83: { home: 1, away: 1 },
    84: { home: 1, away: 0 },
    85: { home: 2, away: 0 },
    86: { home: 3, away: 0 },
    87: { home: 1, away: 1 },
    88: { home: 2, away: 2 },
    89: { home: 0, away: 3 },
    90: { home: 1, away: 2 },
    91: { home: 1, away: 1 },
    92: { home: 2, away: 1 },
    93: { home: 2, away: 3 },
    94: { home: 1, away: 3 },
    95: { home: 2, away: 0 },
    96: { home: 1, away: 2 },
  },
  "Anders": {
    73: { home: 1, away: 2 },
    74: { home: 1, away: 0 },
    75: { home: 1, away: 1 },
    76: { home: 2, away: 0 },
    77: { home: 4, away: 0 },
    78: { home: 1, away: 1 },
    79: { home: 0, away: 1 },
    80: { home: 2, away: 0 },
    81: { home: 1, away: 1 },
    82: { home: 0, away: 0 },
    83: { home: 1, away: 1 },
    84: { home: 1, away: 0 },
    85: { home: 2, away: 0 },
    86: { home: 3, away: 0 },
    87: { home: 1, away: 0 },
    88: { home: 0, away: 0 },
    89: { home: 0, away: 2 },
    90: { home: 0, away: 1 },
    91: { home: 1, away: 1 },
    92: { home: 1, away: 0 },
    93: { home: 0, away: 0 },
    94: { home: 1, away: 0 },
    95: { home: 2, away: 0 },
    96: { home: 1, away: 1 },
  },
  "Axel": {
    73: { home: 1, away: 1 },
    74: { home: 2, away: 1 },
    75: { home: 2, away: 0 },
    76: { home: 2, away: 0 },
    77: { home: 3, away: 1 },
    78: { home: 2, away: 2 },
    79: { home: 2, away: 1 },
    80: { home: 2, away: 0 },
    81: { home: 2, away: 1 },
    82: { home: 1, away: 0 },
    83: { home: 2, away: 1 },
    84: { home: 3, away: 0 },
    85: { home: 0, away: 0 },
    86: { home: 3, away: 0 },
    87: { home: 2, away: 2 },
    88: { home: 1, away: 1 },
  },
  "William": {
    73: { home: 1, away: 2 },
    74: { home: 3, away: 0 },
    75: { home: 2, away: 1 },
    76: { home: 2, away: 0 },
    77: { home: 4, away: 1 },
    78: { home: 1, away: 3 },
    79: { home: 2, away: 1 },
    80: { home: 3, away: 0 },
    81: { home: 2, away: 0 },
    82: { home: 1, away: 1 },
    83: { home: 2, away: 1 },
    84: { home: 3, away: 0 },
    85: { home: 1, away: 0 },
    86: { home: 3, away: 0 },
    87: { home: 1, away: 1 },
    88: { home: 2, away: 1 },
    89: { home: 0, away: 3 },
    90: { home: 1, away: 2 },
    91: { home: 2, away: 2 },
    92: { home: 1, away: 2 },
    93: { home: 2, away: 3 },
    94: { home: 1, away: 1 },
    95: { home: 2, away: 1 },
    96: { home: 3, away: 1 },
  },
  "Nils": {
    73: { home: 1, away: 3 },
    74: { home: 1, away: 1 },
    75: { home: 3, away: 2 },
    76: { home: 0, away: 3 },
    77: { home: 3, away: 4 },
    78: { home: 2, away: 4 },
    79: { home: 1, away: 2 },
    80: { home: 2, away: 2 },
    81: { home: 2, away: 1 },
    82: { home: 1, away: 2 },
    83: { home: 3, away: 2 },
    84: { home: 2, away: 2 },
    85: { home: 3, away: 0 },
    86: { home: 0, away: 0 },
    87: { home: 1, away: 3 },
    88: { home: 1, away: 3 },
    89: { home: 1, away: 1 },
    90: { home: 1, away: 1 },
    91: { home: 1, away: 2 },
    92: { home: 1, away: 3 },
    93: { home: 2, away: 2 },
    94: { home: 2, away: 1 },
    95: { home: 3, away: 2 },
    96: { home: 1, away: 1 },
  },
};
const emptyKnockoutPredictions = Object.fromEntries(knockoutMatches.map((match) => [match.number, null]));
const knockoutPredictions = Object.fromEntries(
  players.map((player) => [player, { ...emptyKnockoutPredictions, ...(submittedKnockoutPredictions[player] || {}) }])
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

function predictionForFixture(player, fixture) {
  return fixture.type === "knockout"
    ? knockoutPredictions[player]?.[fixture.number]
    : predictions[player]?.[fixture.number];
}

function scoringFixtures() {
  return [
    ...matches.map(groupFixture),
    ...knockoutMatches.map(knockoutFixture),
  ];
}

function scoringStatsForPlayer(player) {
  return scoringFixtures().reduce(
    (total, fixture) => {
      const prediction = predictionForFixture(player, fixture);
      const score = pointsFor(prediction, fixture.result);
      total.points += score.points;
      total.correctOutcomes += score.correctOutcome ? 1 : 0;
      total.exacts += score.exact ? 1 : 0;
      total.submitted += prediction ? 1 : 0;
      return total;
    },
    { player, points: 0, correctOutcomes: 0, exacts: 0, submitted: 0 }
  );
}

function scoreText(score) {
  return score ? `${score.home}-${score.away}` : "Ej spelad";
}

function matchStartDate(match) {
  return new Date(`${match.date}T${match.time}:00`);
}

function matchStatusText(match) {
  if (match.result) return scoreText(match.result);

  const now = new Date();
  const start = matchStartDate(match);
  const twoHoursAfterStart = new Date(start.getTime() + 2 * 60 * 60 * 1000);

  if (now >= start && now < twoHoursAfterStart) return "Match pågår";
  if (now >= twoHoursAfterStart) return "Resultat ej syncat";
  return "Ej spelad";
}

function compactMatchStatusText(match) {
  const status = matchStatusText(match);
  if (status === "Match pågår") return "Pågår";
  if (status === "Resultat ej syncat") return "Ej syncat";
  return status;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function teamLabel(team) {
  return `${flags[team] || ""} ${team}`.trim();
}

function matchKey(home, away) {
  return `${home}__${away}`;
}

function remoteGoalEntries(goals, team) {
  if (!Array.isArray(goals)) return [];
  return goals
    .filter((goal) => goal && typeof goal.name === "string")
    .map((goal) => ({
      team,
      name: goal.name,
      minute: typeof goal.minute === "string" || typeof goal.minute === "number" ? String(goal.minute) : "",
    }));
}

function goalSummary(match) {
  if (!Array.isArray(match.goals) || !match.goals.length) return "Inga målgörare registrerade.";
  return match.goals
    .map((goal) => `${goal.team}: ${goal.name}${goal.minute ? ` ${goal.minute}'` : ""}`)
    .join("\n");
}

function resultMarkup(match) {
  const title = match.result
    ? match.type === "knockout"
      ? "Slutspelsresultat."
      : `Målgörare:\n${goalSummary(match)}`
    : "Slutresultat saknas.";
  return `<span class="result-pill ${match.result ? "has-goals" : "is-pending"}" title="${escapeHtml(title)}">${matchStatusText(match)}</span>`;
}

function applyActualGroupResults() {
  matches.forEach((match) => {
    const result = actualGroupResults[match.number];
    if (!result) return;
    match.result = { ...result };
  });
}

function applyRemoteResults(data) {
  if (!data || !Array.isArray(data.matches)) return 0;

  const byTeams = Object.fromEntries(matches.map((match) => [matchKey(match.home, match.away), match]));
  const byNumber = Object.fromEntries(matches.map((match) => [match.number, match]));
  let applied = 0;

  data.matches.forEach((remoteMatch) => {
    const matchNumber = Number(remoteMatch.num);
    if (matchNumber >= 73 && matchNumber <= 104) {
      remoteKnockoutMatches.set(matchNumber, remoteMatch);
      applied += 1;
      return;
    }

    const fullTime = remoteMatch.score && remoteMatch.score.ft;

    if (!Array.isArray(fullTime) || fullTime.length !== 2) return;
    if (fullTime.some((score) => score === null || score === "")) return;
    const normalizedFullTime = fullTime.map((score) => Number(score));
    if (!normalizedFullTime.every(Number.isInteger)) return;

    const home = remoteTeamNames[remoteMatch.team1];
    const away = remoteTeamNames[remoteMatch.team2];
    const match = byNumber[matchNumber] || byTeams[matchKey(home, away)];
    if (!match) return;

    match.result = { home: normalizedFullTime[0], away: normalizedFullTime[1] };
    match.goals = [
      ...remoteGoalEntries(remoteMatch.goals1, match.home),
      ...remoteGoalEntries(remoteMatch.goals2, match.away),
    ];
    applied += 1;
  });

  return applied;
}

async function loadRemoteResults() {
  try {
    const response = await fetch(remoteResultsUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return applyRemoteResults(data);
  } catch (error) {
    console.warn("Kunde inte hämta resultat från openfootball/worldcup.json", error);
    return 0;
  }
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
    .map((player) => scoringStatsForPlayer(player))
    .sort((a, b) => b.points - a.points || b.exacts - a.exacts || a.player.localeCompare(b.player, "sv"));
}

function renderLeaderboard() {
  const body = document.querySelector("#leaderboard-body");
  body.innerHTML = calculateLeaderboard()
    .map(
      (row, index) => `
        <tr>
          <td><span class="rank ${index < 3 ? `podium-rank podium-${index + 1}` : ""}">${index + 1}</span></td>
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

  const activeStage = activeKnockoutStage();
  const stageMatches = knockoutFixtures(activeStage.id);
  const played = stageMatches.filter((match) => knockoutResult(match.number)).length;
  document.querySelector("#played-count").textContent = `${played}/${stageMatches.length}`;
  document.querySelector("#played-label").textContent = `${activeStage.label} spelade`;
  renderLiveFixtures();
}

function knockoutFixture(definition) {
  const schedule = knockoutSchedule[definition.number] || {};
  return {
    type: "knockout",
    stage: knockoutStageLabel(definition.stage),
    number: definition.number,
    date: schedule.date || "",
    time: schedule.time || "",
    home: remoteKnockoutTeam(definition.number, 0) || resolveSource(definition.sources[0]) || sourceDescription(definition.sources[0]),
    away: remoteKnockoutTeam(definition.number, 1) || resolveSource(definition.sources[1]) || sourceDescription(definition.sources[1]),
    venue: schedule.venue || remoteKnockoutMatches.get(definition.number)?.ground || "Arena ej publicerad",
    result: knockoutResult(definition.number),
  };
}

function groupFixture(match) {
  return {
    type: "group",
    stage: `Grupp ${match.group}`,
    number: match.number,
    date: match.date,
    time: match.time,
    home: match.home,
    away: match.away,
    venue: match.venue,
    result: match.result,
    group: match.group,
  };
}

function allFixtures() {
  return [
    ...matches.map(groupFixture),
    ...knockoutFixtures(),
  ].sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`) || a.number - b.number);
}

function fixtureStatusText(fixture) {
  return fixture.result ? scoreText(fixture.result) : matchStatusText(fixture);
}

function compactFixtureStatusText(fixture) {
  const status = fixtureStatusText(fixture);
  if (status === "Match pågår") return "Pågår";
  if (status === "Resultat ej syncat") return "Ej syncat";
  return status;
}

function renderFixtureList(containerId, countId, dateKey) {
  const list = document.querySelector(containerId);
  const fixtures = allFixtures().filter((match) => match.date === dateKey);
  document.querySelector(countId).textContent = fixtures.length;

  list.innerHTML = fixtures.length
    ? fixtures
        .map(
          (match) => `
            <button class="mini-match-card" type="button" data-match="${match.number}">
              <span class="mini-match-main">
                <span>
                  <span class="mini-match-time">${match.time} · ${match.stage}</span>
                  <span class="mini-match-teams">${teamLabel(match.home)} - ${teamLabel(match.away)}</span>
                </span>
                <span class="mini-result-pill ${match.result ? "has-result" : ""}">${compactFixtureStatusText(match)}</span>
              </span>
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
  return scoringStatsForPlayer(player);
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

function calculateTablesFromScores(scoreForMatch) {
  const tables = Object.fromEntries(
    [...new Set(matches.map((match) => match.group))].map((group) => [group, {}])
  );

  matches.forEach((match) => {
    if (!tables[match.group][match.home]) tables[match.group][match.home] = emptyTeamRow(match.home);
    if (!tables[match.group][match.away]) tables[match.group][match.away] = emptyTeamRow(match.away);

    const score = scoreForMatch(match);
    if (!score) return;

    const home = tables[match.group][match.home];
    const away = tables[match.group][match.away];
    home.played += 1;
    away.played += 1;
    home.goalsFor += score.home;
    home.goalsAgainst += score.away;
    away.goalsFor += score.away;
    away.goalsAgainst += score.home;

    if (score.home > score.away) {
      home.wins += 1;
      away.losses += 1;
      home.points += 3;
    } else if (score.home < score.away) {
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

function calculateGroupTables(player) {
  return calculateTablesFromScores((match) => predictions[player][match.number]);
}

function calculateActualGroupTables() {
  return calculateTablesFromScores((match) => match.result);
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

function knockoutFixtures(stageId) {
  return knockoutMatches
    .filter((match) => !stageId || match.stage === stageId)
    .map(knockoutFixture)
    .sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`) || a.number - b.number);
}

function activeKnockoutStage(referenceDate = new Date()) {
  const today = localDateKey(referenceDate);
  return [...knockoutStages]
    .reverse()
    .find((stage) => knockoutFixtures(stage.id).some((match) => match.date && match.date <= today)) || knockoutStages[0];
}

function profileKnockoutStages() {
  const activeIndex = knockoutStages.findIndex((stage) => stage.id === activeKnockoutStage().id);
  if (activeIndex < 0) return knockoutStages;
  return [
    knockoutStages[activeIndex],
    ...knockoutStages.slice(0, activeIndex).reverse(),
    ...knockoutStages.slice(activeIndex + 1),
  ];
}

function round32Fixtures() {
  return knockoutFixtures("round32");
}

function groupIsComplete(group) {
  const groupMatches = matches.filter((match) => match.group === group);
  return groupMatches.length === 6 && groupMatches.every((match) => match.result);
}

function scoredGroupMatches(group) {
  return matches.filter((match) => match.group === group);
}

function applyScoreToRows(rows, match, score) {
  const home = rows[match.home];
  const away = rows[match.away];
  home.played += 1;
  away.played += 1;
  home.goalsFor += score.home;
  home.goalsAgainst += score.away;
  away.goalsFor += score.away;
  away.goalsAgainst += score.home;

  if (score.home > score.away) {
    home.wins += 1;
    away.losses += 1;
    home.points += 3;
  } else if (score.home < score.away) {
    away.wins += 1;
    home.losses += 1;
    away.points += 3;
  } else {
    home.draws += 1;
    away.draws += 1;
    home.points += 1;
    away.points += 1;
  }
}

function headToHeadStats(team, opponent, groupMatches) {
  return groupMatches.reduce(
    (stats, match) => {
      if (!match.result) return stats;
      const homeTeam = match.home === team;
      const awayTeam = match.away === team;
      if ((!homeTeam && !awayTeam) || (match.home !== opponent && match.away !== opponent)) return stats;

      const goalsFor = homeTeam ? match.result.home : match.result.away;
      const goalsAgainst = homeTeam ? match.result.away : match.result.home;
      stats.goalsFor += goalsFor;
      stats.goalsAgainst += goalsAgainst;
      stats.goalDifference += goalsFor - goalsAgainst;
      if (goalsFor > goalsAgainst) stats.points += 3;
      else if (goalsFor === goalsAgainst) stats.points += 1;
      return stats;
    },
    { points: 0, goalDifference: 0, goalsFor: 0 }
  );
}

function headToHeadComparison(a, b, groupMatches) {
  const headToHeadA = headToHeadStats(a.team, b.team, groupMatches);
  const headToHeadB = headToHeadStats(b.team, a.team, groupMatches);
  return (
    headToHeadB.points - headToHeadA.points ||
    headToHeadB.goalDifference - headToHeadA.goalDifference ||
    headToHeadB.goalsFor - headToHeadA.goalsFor
  );
}

function sortGroupRowsWithHeadToHead(rows, groupMatches) {
  return Object.values(rows)
    .map((team) => ({
      ...team,
      goalDifference: team.goalsFor - team.goalsAgainst,
    }))
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      return (
        headToHeadComparison(a, b, groupMatches) ||
        b.goalDifference - a.goalDifference ||
        b.goalsFor - a.goalsFor ||
        a.team.localeCompare(b.team, "sv")
      );
    });
}

function simulatedScore(outcome) {
  if (outcome === "home") return { home: 1, away: 0 };
  if (outcome === "away") return { home: 0, away: 1 };
  return { home: 0, away: 0 };
}

function collectScenarioPositions(rows, scenarioMatches, teamsByPosition) {
  const sortedRows = sortGroupRowsWithHeadToHead(rows, scenarioMatches);
  let start = 0;

  while (start < sortedRows.length) {
    let end = start + 1;
    while (end < sortedRows.length && sortedRows[end].points === sortedRows[start].points) end += 1;

    const tiedRows = sortedRows.slice(start, end);
    let remainingRows = [...tiedRows];
    let position = start;

    while (remainingRows.length) {
      const headToHeadWinner = remainingRows.find((team) =>
        remainingRows.every((opponent) => opponent.team === team.team || headToHeadComparison(team, opponent, scenarioMatches) < 0)
      );

      if (!headToHeadWinner) {
        remainingRows.forEach((team) => {
          for (let possiblePosition = position; possiblePosition < end; possiblePosition += 1) {
            teamsByPosition[possiblePosition].add(team.team);
          }
        });
        break;
      }

      teamsByPosition[position].add(headToHeadWinner.team);
      remainingRows = remainingRows.filter((team) => team.team !== headToHeadWinner.team);
      position += 1;
    }

    start = end;
  }
}

function guaranteedGroupSlots(group) {
  const groupMatches = scoredGroupMatches(group);
  const teams = teamsInGroup(group);
  const teamsByPosition = teams.map(() => new Set());
  const baseScenarioMatches = groupMatches.map((match) => ({ ...match, result: match.result ? { ...match.result } : null }));

  function scenarioRows() {
    return Object.fromEntries(teams.map((team) => [team, emptyTeamRow(team)]));
  }

  function collectScenario(index, rows, scenarioMatches) {
    if (index === groupMatches.length) {
      collectScenarioPositions(rows, scenarioMatches, teamsByPosition);
      return;
    }

    const match = scenarioMatches[index];
    if (match.result) {
      applyScoreToRows(rows, match, match.result);
      collectScenario(index + 1, rows, scenarioMatches);
      return;
    }

    ["home", "draw", "away"].forEach((outcome) => {
      const nextRows = Object.fromEntries(Object.entries(rows).map(([team, row]) => [team, { ...row }]));
      const nextScenarioMatches = scenarioMatches.map((scenarioMatch, scenarioIndex) =>
        scenarioIndex === index ? { ...scenarioMatch, result: simulatedScore(outcome) } : scenarioMatch
      );
      applyScoreToRows(nextRows, nextScenarioMatches[index], nextScenarioMatches[index].result);
      collectScenario(index + 1, nextRows, nextScenarioMatches);
    });
  }

  collectScenario(0, scenarioRows(), baseScenarioMatches);
  return teamsByPosition.map((positionTeams) => (positionTeams.size === 1 ? [...positionTeams][0] : null));
}

function resolvedGroupPosition(group, position) {
  if (groupIsComplete(group)) {
    return calculateActualGroupTables()[group]?.[position - 1]?.team || null;
  }

  return guaranteedGroupSlots(group)[position - 1] || null;
}

function sourceDescription(source) {
  const groupSlot = source.match(/^([123])([A-L](?:\/[A-L])*)$/);
  if (groupSlot) {
    const position = Number(groupSlot[1]);
    const groups = groupSlot[2].split("/");
    if (position === 1) return `Vinnare grupp ${groups[0]}`;
    if (position === 2) return `Tvåa grupp ${groups[0]}`;
    return `Trea grupp ${groups.join("/")}`;
  }

  if (source.startsWith("W")) return `Vinnare match ${source.slice(1)}`;
  if (source.startsWith("L")) return `Förlorare match ${source.slice(1)}`;
  return source;
}

function teamsInGroup(group) {
  const groupMatches = matches.filter((match) => match.group === group);
  return [...new Set(groupMatches.flatMap((match) => [match.home, match.away]))];
}

function remoteTeamName(value) {
  return remoteTeamNames[value] || (flags[value] ? value : null);
}

function knockoutDefinition(number) {
  return knockoutMatches.find((match) => match.number === Number(number));
}

function normalizedScorePair(pair) {
  if (!Array.isArray(pair) || pair.length !== 2) return null;
  if (pair.some((value) => value === null || value === "")) return null;
  const normalized = pair.map((value) => Number(value));
  return normalized.every(Number.isInteger) ? normalized : null;
}

function knockoutResult(number) {
  const remoteMatch = remoteKnockoutMatches.get(Number(number));
  const score = remoteMatch?.score;
  if (!score) return null;

  const fullTime = normalizedScorePair(score.ft);
  if (!fullTime) return null;

  const extraTime = normalizedScorePair(score.et);

  const penalties =
    normalizedScorePair(score.p) ||
    normalizedScorePair(score.pen) ||
    normalizedScorePair(score.penalties) ||
    null;
  return { home: fullTime[0], away: fullTime[1], extraTime, penalties };
}

function remoteKnockoutTeam(number, index) {
  const remoteMatch = remoteKnockoutMatches.get(Number(number));
  if (!remoteMatch) return null;
  return remoteTeamName(index === 0 ? remoteMatch.team1 : remoteMatch.team2);
}

function resolveSource(source) {
  const groupSlot = source.match(/^([123])([A-L])$/);
  if (groupSlot) {
    const position = Number(groupSlot[1]);
    const group = groupSlot[2];
    return resolvedGroupPosition(group, position);
  }

  const matchSlot = source.match(/^([WL])(\d+)$/);
  if (!matchSlot) return null;
  const matchNumber = Number(matchSlot[2]);
  const definition = knockoutDefinition(matchNumber);
  const result = knockoutResult(matchNumber);
  if (!definition || !result) return null;

  const teams = definition.sources.map((_, index) => remoteKnockoutTeam(matchNumber, index) || resolveSource(definition.sources[index]));
  if (!teams[0] || !teams[1]) return null;

  let winnerIndex = null;
  if (result.home !== result.away) winnerIndex = result.home > result.away ? 0 : 1;
  else if (result.extraTime && result.extraTime[0] !== result.extraTime[1]) {
    winnerIndex = result.extraTime[0] > result.extraTime[1] ? 0 : 1;
  } else if (result.penalties && result.penalties[0] !== result.penalties[1]) {
    winnerIndex = result.penalties[0] > result.penalties[1] ? 0 : 1;
  }
  if (winnerIndex === null) return null;
  return matchSlot[1] === "W" ? teams[winnerIndex] : teams[winnerIndex === 0 ? 1 : 0];
}

function possibleTeamsForSource(source, seen = new Set()) {
  if (seen.has(source)) return [];
  seen.add(source);

  const exactGroupSlot = source.match(/^([12])([A-L])$/);
  if (exactGroupSlot) {
    const resolved = resolveSource(source);
    return resolved ? [resolved] : teamsInGroup(exactGroupSlot[2]);
  }

  const thirdPlaceSlot = source.match(/^3([A-L](?:\/[A-L])*)$/);
  if (thirdPlaceSlot) {
    const resolved = resolveSource(source);
    if (resolved) return [resolved];

    return thirdPlaceSlot[1].split("/").flatMap((group) => {
      const table = calculateActualGroupTables()[group] || [];
      const groupThird = resolvedGroupPosition(group, 3);
      return groupThird ? [groupThird] : table[2] && groupIsComplete(group) ? [table[2].team] : teamsInGroup(group);
    });
  }

  const matchSlot = source.match(/^([WL])(\d+)$/);
  if (matchSlot) {
    const resolved = resolveSource(source);
    if (resolved) return [resolved];
    const definition = knockoutDefinition(matchSlot[2]);
    if (!definition) return [];
    return definition.sources.flatMap((item) => possibleTeamsForSource(item, new Set(seen)));
  }

  return [];
}

function knockoutSlotMarkup(definition, index) {
  const source = definition.sources[index];
  const team = remoteKnockoutTeam(definition.number, index) || resolveSource(source);
  const candidates = [...new Set(possibleTeamsForSource(source))].sort((a, b) => a.localeCompare(b, "sv"));
  const tooltip = !team && candidates.length
    ? `<span class="slot-tooltip"><strong>Möjliga lag</strong>${candidates.map((candidate) => `<span>${teamLabel(candidate)}</span>`).join("")}</span>`
    : "";

  return `
    <span class="bracket-team ${team ? "is-confirmed" : "is-pending"} ${tooltip ? "has-tooltip" : ""}" tabindex="0">
      <span class="bracket-team-name">${team ? teamLabel(team) : sourceDescription(source)}</span>
      ${tooltip}
    </span>
  `;
}

function knockoutScoreText(result) {
  if (!result) return "–";
  const extraTime = result.extraTime ? ` (${result.extraTime[0]}–${result.extraTime[1]} e.f.)` : "";
  const penalties = result.penalties ? ` (${result.penalties[0]}–${result.penalties[1]} str.)` : "";
  return `${result.home}–${result.away}${extraTime}${penalties}`;
}

function swedishKnockoutTime(remoteMatch) {
  if (!remoteMatch?.date || !remoteMatch?.time) return "Tid publiceras via resultatflödet";

  const timeMatch = String(remoteMatch.time).match(/^(\d{1,2}):(\d{2})\s+UTC([+-]\d{1,2})(?::?(\d{2}))?$/i);
  if (!timeMatch) return `${remoteMatch.date} · ${remoteMatch.time}`;

  const [, hours, minutes, offsetHours, offsetMinutes = "00"] = timeMatch;
  const offset = `${offsetHours.startsWith("-") ? "-" : "+"}${offsetHours.replace(/[+-]/, "").padStart(2, "0")}:${offsetMinutes}`;
  const kickoff = new Date(`${remoteMatch.date}T${hours.padStart(2, "0")}:${minutes}:00${offset}`);
  if (Number.isNaN(kickoff.getTime())) return `${remoteMatch.date} · ${remoteMatch.time}`;

  const parts = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Stockholm",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  })
    .formatToParts(kickoff)
    .reduce((values, part) => ({ ...values, [part.type]: part.value }), {});

  return `${parts.day} ${parts.month} · kl. ${parts.hour}:${parts.minute}`;
}

function swedishFixtureDateTime(fixture) {
  return `${fixture.date} ${fixture.time}`;
}

function renderKnockoutTabs(activeStage = "round32") {
  document.querySelector("#knockout-stage-tabs").innerHTML = knockoutStages
    .map(
      (stage) => `
        <button class="knockout-stage-button ${stage.id === activeStage ? "is-active" : ""}" type="button" data-stage="${stage.id}">
          ${stage.label}
        </button>
      `
    )
    .join("");
}

function renderKnockout(activeStage = "round32") {
  const stage = knockoutStages.find((item) => item.id === activeStage) || knockoutStages[0];
  const stageMatches = knockoutMatches.filter((match) => match.stage === stage.id);
  renderKnockoutTabs(stage.id);

  document.querySelector("#bracket-summary").innerHTML = `
    <div>
      <p class="eyebrow">Aktuell runda</p>
      <h2>${stage.title}</h2>
    </div>
    <span class="muted">${stageMatches.length} ${stageMatches.length === 1 ? "match" : "matcher"}</span>
  `;

  document.querySelector("#bracket-grid").innerHTML = stageMatches
    .map((definition) => {
      const fixture = knockoutFixture(definition);
      const result = knockoutResult(definition.number);
      const scheduleText = swedishFixtureDateTime(fixture);
      return `
        <article class="bracket-match ${result ? "is-played" : ""}">
          <div class="bracket-match-meta">
            <span>Match ${definition.number}</span>
            <span>${escapeHtml(scheduleText)}</span>
          </div>
          <div class="bracket-pairing">
            ${knockoutSlotMarkup(definition, 0)}
            <strong class="bracket-score">${knockoutScoreText(result)}</strong>
            ${knockoutSlotMarkup(definition, 1)}
          </div>
          <p class="bracket-ground">${escapeHtml(fixture.venue)}</p>
        </article>
      `;
    })
    .join("");
}

function renderActualGroupSelector(activeGroup = "A") {
  const groups = [...new Set(matches.map((match) => match.group))].sort();
  document.querySelector("#actual-group-selector").innerHTML = groups
    .map(
      (group) => `
        <button class="group-selector-button ${group === activeGroup ? "is-active" : ""}" type="button" data-group="${group}">
          ${group}
        </button>
      `
    )
    .join("");
}

function renderActualGroupTable(group = "A") {
  const teams = calculateActualGroupTables()[group] || [];
  const complete = groupIsComplete(group);
  document.querySelector("#actual-group-title").textContent = `Grupp ${group}`;
  renderActualGroupSelector(group);
  document.querySelector("#actual-group-table").innerHTML = `
    <div class="actual-table-status">
      <span>${complete ? "Färdigspelad" : `${teams.reduce((sum, team) => sum + team.played, 0) / 2}/6 matcher spelade`}</span>
      <span>${complete ? "Placeringar klara" : "Preliminär tabell"}</span>
    </div>
    <div class="table-wrap actual-table-wrap">
      <table class="actual-group-table">
        <thead>
          <tr><th>#</th><th>Lag</th><th>S</th><th>MS</th><th>GM</th><th>Po</th></tr>
        </thead>
        <tbody>
          ${teams
            .map(
              (team, index) => `
                <tr class="${index < 2 ? "is-qualified" : index === 2 ? "is-third" : ""}">
                  <td><span class="rank">${index + 1}</span></td>
                  <td><span class="sim-team"><span>${flags[team.team] || ""}</span><span>${team.team}</span></span></td>
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
    </div>
    <p class="group-table-note">Tredjeplats kan gå vidare som en av de åtta bästa grupptreorna.</p>
  `;
}

function renderFilters() {
  const filters = document.querySelector(".filters");
  const groups = [...new Set(matches.map((match) => match.group))];
  filters.insertAdjacentHTML(
    "beforeend",
    groups.map((group) => `<button class="filter-button" type="button" data-group="${group}">${group}</button>`).join("")
  );
}

function renderMatchViewTabs(activeView = activeKnockoutStage().id) {
  document.querySelector(".match-view-tabs").innerHTML = [
    ...knockoutStages.map(
      (stage) => `
        <button class="match-view-button ${stage.id === activeView ? "is-active" : ""}" type="button" data-match-view="${stage.id}">
          ${stage.label}
        </button>
      `
    ),
    `<button class="match-view-button ${activeView === "groups" ? "is-active" : ""}" type="button" data-match-view="groups">Gruppspel</button>`,
  ].join("");
}

function renderMatches(group = "all") {
  const list = document.querySelector("#match-list");
  const matchView = currentMatchView();
  const filters = document.querySelector(".filters");
  const hidePlayedToggle = document.querySelector("#hide-played-matches");
  const selectedStage = knockoutStages.find((stage) => stage.id === matchView);

  document.querySelector("#matches-eyebrow").textContent = matchView === "groups" ? "Arkiv" : "Slutspel";
  document.querySelector("#matches-title").textContent =
    matchView === "groups" ? "Gruppspel" : selectedStage?.title || "Slutspelsmatcher";

  if (filters) filters.hidden = matchView !== "groups";
  if (hidePlayedToggle) hidePlayedToggle.closest(".match-toggle").hidden = matchView !== "groups";

  if (selectedStage) {
    const fixtures = knockoutFixtures(selectedStage.id);

    list.innerHTML = fixtures.length
      ? fixtures
          .map(
            (match) => `
        <button class="match-card" type="button" data-match="${match.number}">
          <span class="match-card-grid">
            <span class="match-number">Match ${match.number}<br>${match.stage}</span>
            <span class="teams">
              <span class="team-line"><span class="flag">${flags[match.home] || ""}</span>${match.home}</span>
              <span class="team-line"><span class="flag">${flags[match.away] || ""}</span>${match.away}</span>
            </span>
            <span class="match-meta">
              ${resultMarkup(match)}<br>
              ${swedishFixtureDateTime(match)}<br>
              ${match.venue}
            </span>
          </span>
        </button>
      `
          )
          .join("")
      : `<p class="empty-fixtures">Inga ${selectedStage.label.toLowerCase()}smatcher att visa.</p>`;
    return;
  }

  const groupMatches = matches.filter((match) => group === "all" || match.group === group);
  const hasUnplayedMatches = groupMatches.some((match) => !match.result);
  const hidePlayed = Boolean(hidePlayedToggle?.checked && hasUnplayedMatches);

  if (hidePlayedToggle) {
    hidePlayedToggle.disabled = !hasUnplayedMatches;
    if (!hasUnplayedMatches) hidePlayedToggle.checked = false;
  }

  const visibleMatches = matches.filter((match) => {
    const matchesGroup = group === "all" || match.group === group;
    const matchesPlayedFilter = !hidePlayed || !match.result;
    return matchesGroup && matchesPlayedFilter;
  });

  list.innerHTML = visibleMatches.length
    ? visibleMatches
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
              ${resultMarkup(match)}<br>
              ${swedishFixtureDateTime(match)}<br>
              ${match.venue}
            </span>
          </span>
        </button>
      `
        )
        .join("")
    : `<p class="empty-fixtures">Inga matcher att visa.</p>`;
}

function openMatch(matchNumber) {
  const match = matches.find((item) => item.number === matchNumber);
  if (!match) {
    openKnockoutMatch(matchNumber);
    return;
  }

  const dialog = document.querySelector("#match-dialog");
  document.querySelector("#dialog-meta").textContent = `Match ${match.number} · Grupp ${match.group} · ${swedishFixtureDateTime(match)}`;
  document.querySelector("#dialog-title").textContent = `${teamLabel(match.home)} vs ${teamLabel(match.away)}`;
  document.querySelector("#dialog-score").innerHTML = `
    <span>${teamLabel(match.home)}</span>
    ${resultMarkup(match)}
    <span>${teamLabel(match.away)}</span>
  `;
  document.querySelector("#tips-list").innerHTML = players
    .map((player) => {
      const prediction = predictions[player][match.number];
      const score = pointsFor(prediction, match.result);
      const resultClass =
        prediction && match.result
          ? score.exact
            ? "is-exact-pick"
            : score.correctOutcome
              ? "is-correct-pick"
              : "is-wrong-pick"
          : "";
      return `
        <div class="tip-row ${resultClass}">
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

function openKnockoutMatch(matchNumber) {
  const definition = knockoutDefinition(matchNumber);
  if (!definition) return;

  const match = knockoutFixture(definition);
  const dialog = document.querySelector("#match-dialog");
  document.querySelector("#dialog-meta").textContent =
    `Match ${match.number} · ${match.stage} · ${swedishFixtureDateTime(match)} · ${match.venue}`;
  document.querySelector("#dialog-title").textContent = `${teamLabel(match.home)} vs ${teamLabel(match.away)}`;
  document.querySelector("#dialog-score").innerHTML = `
    <span>${teamLabel(match.home)}</span>
    ${resultMarkup(match)}
    <span>${teamLabel(match.away)}</span>
  `;
  document.querySelector("#tips-list").innerHTML = players
    .map((player) => {
      const prediction = knockoutPredictions[player][match.number];
      const score = pointsFor(prediction, match.result);
      const resultClass =
        prediction && match.result
          ? score.exact
            ? "is-exact-pick"
            : score.correctOutcome
              ? "is-correct-pick"
              : "is-wrong-pick"
          : "";
      return `
        <div class="tip-row ${resultClass}">
          <div>
            <strong>${player}</strong>
            <p class="muted">${prediction ? `Tips: ${scoreText(prediction)} (${outcome(prediction)})` : "Väntar på tips"}</p>
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
  const submittedGroup = matches.filter((match) => predictions[player][match.number]).length;
  const knockoutDefinitions = knockoutFixtures();
  const submittedKnockout = knockoutDefinitions.filter((match) => knockoutPredictions[player][match.number]).length;
  document.querySelector("#player-dialog-meta").textContent =
    `${submittedGroup}/${matches.length} gruppspel · ${submittedKnockout}/${knockoutDefinitions.length} slutspel`;
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
  const groupPickRows = matches
    .map((match) => {
      return playerPickRow({
        match,
        prediction: predictions[player][match.number],
        result: match.result,
        meta: `Match ${match.number}<br>Grupp ${match.group}`,
        dateTime: `${match.date} ${match.time}`,
      });
    })
    .join("");
  const knockoutPickSections = profileKnockoutStages()
    .map((stage) => {
      const rows = knockoutFixtures(stage.id)
        .map((match) => {
          return playerPickRow({
            match,
            prediction: knockoutPredictions[player][match.number],
            result: match.result,
            meta: `Match ${match.number}<br>${match.stage}`,
            dateTime: swedishFixtureDateTime(match),
          });
        })
        .join("");
      return `
        <div class="player-pick-section">${stage.label}</div>
        ${rows}
      `;
    })
    .join("");

  document.querySelector("#player-picks").innerHTML = `
    ${knockoutPickSections}
    <div class="player-pick-section">Gruppspel</div>
    ${groupPickRows}
  `;

  dialog.showModal();
}

function playerPickRow({ match, prediction, result, meta, dateTime }) {
  const score = pointsFor(prediction, result);
  const resultClass =
    prediction && result
      ? score.exact
        ? "is-exact-pick"
        : score.correctOutcome
          ? "is-correct-pick"
          : "is-wrong-pick"
      : "";
  return `
    <div class="player-pick-row ${resultClass}">
      <div class="pick-match-meta">
        ${meta}
      </div>
      <div class="pick-teams">
        <strong>${teamLabel(match.home)} - ${teamLabel(match.away)}</strong>
        <p class="muted">${dateTime}</p>
      </div>
      <div class="pick-score">
        <strong class="${prediction ? "" : "empty-pick"}">${prediction ? scoreText(prediction) : "Väntar på tips"}</strong>
        <span class="outcome-pill">${prediction ? outcome(prediction) : "-"}</span>
      </div>
    </div>
  `;
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

document.querySelector(".match-view-tabs").addEventListener("click", (event) => {
  const button = event.target.closest(".match-view-button");
  if (!button) return;
  document.querySelectorAll(".match-view-button").forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
  renderMatches(currentMatchFilter());
});

document.querySelector("#hide-played-matches").addEventListener("change", () => {
  renderMatches(currentMatchFilter());
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

document.querySelector("#knockout-stage-tabs").addEventListener("click", (event) => {
  const button = event.target.closest(".knockout-stage-button");
  if (!button) return;
  renderKnockout(button.dataset.stage);
});

document.querySelector("#actual-group-selector").addEventListener("click", (event) => {
  const button = event.target.closest(".group-selector-button");
  if (!button) return;
  renderActualGroupTable(button.dataset.group);
});

document.querySelector("#close-dialog").addEventListener("click", () => {
  document.querySelector("#match-dialog").close();
});

document.querySelector("#close-player-dialog").addEventListener("click", () => {
  document.querySelector("#player-dialog").close();
});

function currentMatchFilter() {
  return document.querySelector(".filter-button.is-active")?.dataset.group || "all";
}

function currentMatchView() {
  return document.querySelector(".match-view-button.is-active")?.dataset.matchView || activeKnockoutStage().id;
}

function renderApp() {
  const matchView = currentMatchView();
  renderLeaderboard();
  renderMatchViewTabs(matchView);
  renderMatches(currentMatchFilter());
  renderSimulation(document.querySelector(".sim-player-button.is-active")?.dataset.player || simulationPlayers()[0]);
  renderKnockout(document.querySelector(".knockout-stage-button.is-active")?.dataset.stage || activeKnockoutStage().id);
  renderActualGroupTable(document.querySelector(".group-selector-button.is-active")?.dataset.group || "A");
}

async function initializeApp() {
  renderFilters();
  applyActualGroupResults();
  renderApp();
  const appliedResults = await loadRemoteResults();
  if (appliedResults > 0) renderApp();

  window.setInterval(async () => {
    const refreshedResults = await loadRemoteResults();
    if (refreshedResults > 0) renderApp();
  }, 5 * 60 * 1000);
}

initializeApp();
