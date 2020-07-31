const quote = document.getElementsByClassName('quote');
const author = document.getElementsByClassName('author');

// Quote API
const getQuote = async () => {
    const api = 'http://quotes.rest/qod.json?category=inspire';

    try {
        const response = await fetch(api);
        const data = await response.json();

        // Replace the HTML
        quote.innerHTML = data.contents.quotes[0].quote;
        author.innerHTML = data.contents.quotes[0].author;
    } catch (err) {
        //getQuote();
        console.warn(err);
    }
}

getQuote();