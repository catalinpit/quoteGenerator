const quoteContainer = document.getElementById('quote-container');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const twitterButton = document.getElementById('twitter-button');
const newQuoteButton = document.getElementById('newQuoteButton');
const loader = document.getElementById('loader');

// Quote API
const getQuote = async () => {
    loading();
    const api = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(api);
        const data = await response.json();
        const quoteContent = data[Math.floor((Math.random() * 1643) + 1)].text;
        let authorQuote = data[Math.floor((Math.random() * 1643) + 1)].author;
        
        if (authorQuote.lenght < 1) {
            author.innerText = 'Unknown';
        } else {
            author.innerText = authorQuote;
        }

        quote.innerText = quoteContent;
        complete();
    } catch (err) {
        console.warn(err);
        getQuote();
    }
}

function tweetQuote() {
    const quoteText = quote.innerText;
    const authorQuote = author.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} by ${authorQuote}`;

    window.open(twitterUrl, '_blank');
}

function loading() {
    loader.hidden = false;
    quoteContainer.style.visibility = 'hidden';
}

function complete() {
    if (!loader.hidden) {
        quoteContainer.style.visibility = 'initial';
        loader.hidden = true;
    }
}

newQuoteButton.addEventListener('click', getQuote);
twitterButton.addEventListener('click', tweetQuote);

getQuote();