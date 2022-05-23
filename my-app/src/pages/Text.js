import React, { useState } from 'react';

const Text = () => {

  const [quote, setModal] = useState(0);
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

  function HandleClick(prop) {
    setModal(prop)
  }


  return (
    <div className='container mt-4'>
      {(quotes != null && quotes.length === 4) ? quotes.map((quote) =>
        <div key={quote.id} className="card mt-2">
          <div className="card-body">
            <p key={quote.id} data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => HandleClick(quote.quote)}>{quote.quote}</p>
          </div>
        </div>
      ) : <div><p>Loading text...</p></div>}

      <div id="myModal" className="modal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-body mx-auto">
              <h1 className="modal-dialog-centered text-center">{quote}</h1>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Save Meme</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );


};

export default Text;