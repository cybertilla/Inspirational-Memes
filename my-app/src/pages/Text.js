import React, { useRef, useState } from 'react';
import { saveMeme } from "../LocalStorage";

const Text = () => {

  const memeId = useRef()
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

  function newText(prop) {

    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        let toInsert = { "id": prop, "quote": data.content }
        quotes.splice(prop, 1, toInsert);
        setQuote([...quotes]);
      })

  };

  function handleClick(prop) {
    setModal(prop)
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (memeId.current.value === "") {
      var element = document.getElementById("memeInput");
      element.classList.add("is-invalid");
      return;
    } else {

      fetch('https://api.memegen.link/templates/' + memeId.current.value)
        .then(response => response.json())
        .then(data => {
          let newMeme = { "text": quote, "url": data.blank + "?height=270&width=360" }
          saveMeme(newMeme)
          var element = document.getElementById("memeInput");
          element.classList.add("is-valid");
          element.classList.remove("is-invalid");
          event.target.reset();
        })
        .catch((error) => {

          var element = document.getElementById("memeInput");
          element.classList.add("is-invalid");
        })

    }
    //console.log(memeId.current.value)


  }


  return (
    <div className='container mt-4'>
      {(quotes != null && quotes.length === 4) ? quotes.map((quote) =>
        <div key={quote.id} className="card mt-2">
          <div className="col-12" >
            <button className="btn btn-dark btn-sm float-end" type="button"onClick={() => newText(quote.id)}>New</button>
          </div>
          <div className="card-body" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => handleClick(quote.quote)}>
            <p key={quote.id}>{quote.quote}</p>
          </div>

          
        </div>

      ) :
        <div>
          <img src="https://c.tenor.com/KEzW7ALwfUAAAAAC/cat-what.gif" alt="" width="600" height="480" className="mx-auto d-block" />
        </div>
      }

      <div id="myModal" className="modal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-body mx-auto">
              <h1 className="modal-dialog-centered text-center">{quote}</h1>
            </div>
            <div className="modal-footer">

              <form id="memeId" onSubmit={handleSubmit}>
                <input id="memeInput" type="text" className="form-control" placeholder="Meme ID..." ref={memeId} />
              </form>

              <button type="submit" form="memeId" className="btn btn-secondary">Save Meme</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );


};

export default Text;