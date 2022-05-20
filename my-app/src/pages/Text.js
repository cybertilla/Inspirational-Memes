import React, { useState } from 'react';

const Text = () => {

  const [quotes, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  let quoteList = []

  if (quotes === null && loading === false) {
    
    
    for (let i = 0; i < 4; i++) {
      
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          quoteList.push(data.content)
          setQuote([...quoteList] ); 
        })
    }
    setLoading(true);
  }

  return (
    <div>
      <h1>Text page</h1>
      {quotes === null || quotes.map((quote) => <p>{quote}</p>)}
      
    </div>

  );
};

export default Text;