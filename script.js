const quote = document.getElementById('quote');
const author = document.getElementById('author');
const twitterButton = document.getElementsByClassName('twitter');

// Quote API
const getQuote = async () => {
    const api = 'http://quotes.rest/qod.json?category=inspire';

    try {
        const response = await fetch(api);
        const data = await response.json();
        const quoteContent = data.contents.quotes[0].quote;
        let authorQuote = data.contents.quotes[0].author;
        
        if (authorQuote === '') {
            author.innerText = 'Unknown'
        } else {
            author.innerText = authorQuote;
        }

        quote.innerText = quoteContent;
    } catch (err) {
        console.warn(err);
        getQuote();
    }
}

getQuote();