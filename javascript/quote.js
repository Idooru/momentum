const quotes = [
  {
    quote: "하루라도 책을 보지 않으면 입안에 가시가 돋는다.",
    author: "안중근",
  },
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  { quote: "산다는것 그것은 치열한 전투이다.", author: "로망르랑" },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘 존슨",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "자신을 내보여라. 그러면 재능이 드러날 것이다.",
    author: "발타사르 그라시안",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드",
  },
  { quote: "신은 용기있는자를 결코 버리지 않는다.", author: "켄러" },
  { quote: "피할수 없으면 즐겨라", author: "로버트 엘리엇" },
  {
    quote: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라",
    author: "마크 트웨인",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
