import { loadMemes } from "../LocalStorage";

const MyMeme = () => {

  let memes = loadMemes()

  return (
    <div>
      <div class="row">
        
          {(memes !== []) ? memes.map((meme) =>
          <div class="col-sm">
            <div className="card h-100">
              <img src={meme.url} class="card-img-top" alt="Meme"></img>
              <div className="card-body">
                <p>{meme.text}</p>
              </div>
            </div>
            </div>
          ) : <div><p>You have no memes saved</p></div>}
        </div>
      
    </div >


  );
};

export default MyMeme;