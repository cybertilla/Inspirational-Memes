import React, { useState } from 'react';


const Text = () => {

  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  if (quote === null && loading === false) {
    setLoading(true);
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content)
      });
  }

  return (
    <div>
      <h1>Text page</h1>
      {quote === null || <p>{quote}</p>}
      
    </div>

  );
};

export default Text;