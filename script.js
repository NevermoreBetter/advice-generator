let temp = {},
  quotes = {},
  quotesArray = [];
const dice = document.querySelector(".next__advice");

const initialize = async () => {
  const quotesFetch = await (
    await fetch("https://api.adviceslip.com/advice/search/e")
  ).json();
  const arr = quotesFetch.slips;
  for (let index = 0; index < arr.length; index++) {
    quotes = Object.assign({
      id: arr[index].id,
      advice: arr[index].advice,
      date: arr[index].date,
    });
    quotesArray.push(quotes);
  }

  createCard();
};

function createCard() {
  let index = Math.floor(Math.random() * quotesArray.length);
  const h1 = document.querySelector(".advice__id");
  h1.innerHTML = `Advice # ${quotesArray[index].id}`;
  const quote = document.querySelector(".advice__text");
  quote.innerHTML = `${quotesArray[index].advice}`;
}

initialize();

dice.addEventListener("click", createCard);
