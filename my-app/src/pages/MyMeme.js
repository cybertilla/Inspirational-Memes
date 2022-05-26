import { loadMemes, DeleteMeme } from "../LocalStorage";

const MyMeme = () => {

  let memes = loadMemes()

  return (
    <div className="container">
      <div className="row no-gutters">
        
          {(memes.length > 0) ? memes.map((meme, i) =>
          <div className="col-md-6 col-lg-4 col-xl-3 mt-4" key={i} id={i}>
            <div className="card h-100">
              <img src={meme.url} className="card-img-top" alt="Meme"></img>
              <div className="card-body">
                <p>{meme.text}</p>
              </div>
              <button type="button" className="btn btn-danger btn-sm" onClick={() => DeleteMeme(i)}>Delete</button>
            </div>
            </div>
          ) : <p className="mt-4">You have no memes saved</p>}
        </div>
      
    </div >


  );
};

export default MyMeme;