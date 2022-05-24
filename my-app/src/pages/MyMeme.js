import { loadMemes } from "../LocalStorage";

const MyMeme = () => {

  let memes = loadMemes()

  return (
    <div>
      {(memes !== []) ? memes.map((meme) =>
        <div className="card mt-2" style={{width: "18rem", display: "inline-block"}}>
           <img src={meme.url} class="card-img-top" alt="Meme"></img>
          <div className="card-body">
            <p>{meme.text}</p>
          </div>
        </div>
      ) : <div><p>You have no memes saved</p></div>}
    </div>

  );
};

export default MyMeme;