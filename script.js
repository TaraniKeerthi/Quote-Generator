const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const quoteButton = document.querySelector("#new-quote");
const tweetBtn = document.querySelector("#twitter");
let apiQuotes = [];


//new quote button
function newQuoteBtn() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quoteText.textContent= quote.text;
  if(!quoteAuthor.textContent){
    quoteAuthor.textContent="Unknown";
  }
  else{
    quoteAuthor.textContent=quote.author;
  }
}

//for text of long length
if(quoteText.length >120){
    quoteContainer.classList.add("long-quote");
}
else{
    quoteContainer.classList.remove("long-quote");
}

//tweet button
function tweetquoteBtn() {
  let twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text}-${quote.author}`;
  window.open(twitterUrl, "_blank");
}

//fetching quotes from the api and calling function
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  const response = await fetch(apiUrl);
  apiQuotes =  await response.json();
  newQuoteBtn();
}

quoteButton.addEventListener("click",newQuoteBtn);
tweetBtn.addEventListener("click",tweetquoteBtn);
getQuotes();