const quotes = [
  {
    quote:
      "모든 일에 감사하십시오. 이는 그리스도 예수 안에서 여러분을 향하신 하나님의 뜻입니다.",
    author: "데살로니가전서 5장 18절",
  },
  {
    quote: "여호와께 감사하라. 그분은 선하시고 그 인자하심이 영원하시다.",
    author: "시편 107편 1절",
  },
  {
    quote:
      "그분은 정직한 사람들을 위해 분별할 수 있는 지혜를 예비하시고 흠 없이 행하는 사람들의 방패가 되시니 의로운 사람의 길을 보호하시고 주께 충실한 사람들의 길을 지켜 주신다.",
    author: "잠언 2장 7-8절",
  },
  {
    quote:
      "정직한 사람은 그 땅에서 살 것이요 흠 없이 사는 사람은 살아남게 될 것이지만 악인은 그 땅에서 끊어지고 성실하지 않은 사람들은 뿌리째 뽑힐 것이다.",
    author: "잠언 2장 21-22절",
  },
  {
    quote: "네 마음을 다해 여호와를 믿고 네 지식을 의지하지 마라.",
    author: "잠언 3장 5절",
  },
  {
    quote:
      "네가 하는 모든 일에서 그분을 인정하여라. 그러면 그분이 네 갈 길을 할려 줄 것이다.",
    author: "잠언 3장 6절",
  },
  {
    quote:
      "스스로 지혜롭다 생각하지 말고 여호와를 두려워하며 섬기고 악에서 떠나거라.",
    author: "잠언 3장 7절",
  },
  {
    quote:
      "네가 선을 행할 수 있는 능력이 있으면 도움이 필요한 사람에게 기꺼이 선을 베풀어라",
    author: "잠언 3장 27절",
  },
  {
    quote:
      '가진 것이 있을 때 네 이웃에게 "갔다가 다시 오게나. 내일 주겠네"라고 말하지 마라.',
    author: "잠언 3장 28절",
  },
  {
    quote:
      "너, 게으름뱅이야, 개미에게 가서 그들이 하는 것을 보고 지혜를 얻어라. 개미들은 장군도 감독도 없는데 여름에 먹을 것을 저장해 두고 추수 때에 양식을 모은다.",
    author: "잠언 6장 6-8절",
  },
  {
    quote:
      '너, 게으름뱅이야, 너는 언제까지 자겠느냐? 언제 잠에서 깨어 일어나겠느냐? "조금만 더 자자, 조금만 더 눈 좀 붙이자, 조금만 더 손을 모으고 자자"하다가 가난이 강도처럼 네게 이르고 빈곤이 무장한 사람처럼 이르게 될 것이다.',
    author: "잠언 6장 9절",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
