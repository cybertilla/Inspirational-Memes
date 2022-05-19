import React, { useState } from 'react';

const Text = () => {

  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  if (quote === null && loading === false) {
    setLoading(true);
    let quoteList = []


    for (let i = 0; i < 4; i++) {
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          quoteList.push(data.content)
        })   
    }

    console.log(quoteList)
    setQuote(quoteList)


  }

  return (
    <div>
      <h1>Text page</h1>
      {quote === null || <p>{quote}</p>}
    </div>

  );
};

export default Text;