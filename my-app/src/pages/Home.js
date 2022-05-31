import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Inspirtional mems</h1>
            <div class="card">
                <div class="card-body">
                    <p className="text-center">Welcome to Inspirtional Mems, a game in which you can
                        create the funniest combination of memes and inspirational quotes.

                        Gather a group of players around a table and pick a <i>meme master</i>,
                        that person will be the first to click "Generate Mems", while the others
                        will head to "Generate text". The principle is similar to Cards Against Humanity,
                        the best/worst combination is decided by the current <i>meme master</i>,
                        the winner becomes the new <i>meme master</i> for the next round.
                    </p>
                    <p className="text-center">Under each meme there is a memeID, in order to save any meme+quote combo click on a quote,
                        type in the memeID to match your quote and click on "Save meme". Now you can see it in the My mems page!
                    </p>
                </div>
            </div>
            <div>
                <br />
                <h2 className="text-center">Start Game!</h2>
                <Link style={{ textDecoration: "none", color: "white" }} to="/Meme">
                    <div className="d-grid gap-2 col-2 mx-auto mt-4">
                        <button className="btn btn-dark" type="button">Generate Meme </button>
                    </div>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/Text">
                    <div className="d-grid gap-2 col-2 mx-auto mt-4">
                        <button className="btn btn-dark" type="button">Generate Text</button>
                    </div>
                </Link>
            </div>
        </div>

    );
};

export default Home;