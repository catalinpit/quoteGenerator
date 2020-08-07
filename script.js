const quote = document.getElementById('quote');
const author = document.getElementById('author');
const twitterButton = document.getElementById('twitter-button');
const newQuoteButton = document.getElementById('newQuoteButton');

// Quote API
const getQuote = async () => {
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

        if (quoteContent.length > 120) {
            quote.classList.add('long-quote');
        } else {
            quote.classList.remove('long-quote');
        }

        quote.innerText = quoteContent;
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

newQuoteButton.addEventListener('click', getQuote);
twitterButton.addEventListener('click', tweetQuote);

getQuote();