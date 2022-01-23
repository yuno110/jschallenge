const quotes = [
    {
        quote: "Life is what happens when you’re making other plans.",
        author: "John Lennon"
    },
    {
        quote: "If everything was perfect, you would never learn and you would never grow.",
        author: "Beyoncé"
    },
    {
        quote: "No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.",
        author: "Taylor Swift"
    },
    {
        quote: "You see, we are here, as far as I can tell, to help each other; our brothers, our sisters, our friends, our enemies. That is to help each other and not hurt each other.",
        author: "Stevie Ray Vaughan"
    }
];

const quotesBtn = document.querySelector("#lfbtn");

function changeQuotes() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quote = document.querySelector(".quotes span:first-child");
    const author = document.querySelector(".quotes span:last-child");
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;

}




changeQuotes();
quotesBtn.addEventListener("click", changeQuotes);