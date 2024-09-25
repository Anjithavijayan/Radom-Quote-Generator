
import React, { useEffect, useState } from 'react'


function RandomQuoteGenerator() {

    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();

    useEffect(() => {
        getQuote();
    }, [])

    const getQuote = async () => {
        let url = `https://dummyjson.com/quotes`;
        await fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randomNum = Math.floor(Math.random() * dataQuotes.length);
                let randomQuote = dataQuotes[randomNum];
                // console.log(randomQuote);
                setQuote(randomQuote.quote)
                setAuthor(randomQuote.author)
            })
    }

    return (
        <>
            <div className='App'>
                <div className='card justify-content-center '>

                    <div className='mt-3'>
                        <h4>"{quote}"</h4>
                    </div>
                    <div className='mt-3'>
                        <h6>-{author} </h6>
                    </div>
                    <div className='mt-3'>
                        <button onClick={getQuote}>New Quotes</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RandomQuoteGenerator