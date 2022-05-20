import React, { useState } from 'react';

const Text = () => {

  const [quotes, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  let quoteList = []

  if (quotes === null && loading === false) {

    setLoading(true);

    for (let i = 0; i < 4; i++) {

      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          quoteList.push({ "id": i, "quote": data.content })
          setQuote([...quoteList]);
        })
    }

  }


  console.log(quotes)

  return (
    <div className='container'>
      <h1>Text page</h1>
      {(quotes != null && quotes.length === 4) ? quotes.map((quote) => <p key={quote.id}>{quote.quote}</p>) : <div><p>Loading text...</p></div>}
    </div>
  );


};

export default Text;