import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Inspirational mems</h1>

                <p className="text-center">Welcome to Inspirational Mems, a game in which you can
                    create the funniest combination of memes and inspirational quotes.
                    Gather a group of players around a table and pick a meme master,
                    that person will be the first to click "Generate Mems", while the others
                    will head to "Generate text". The principle is similar to cards against humanity,
                    the best combination is decided by the current meme master, the winner becomes the new meme master.
                </p>
                <p className="text-center">Under each meme there is a meme ID, in order to save any meme combo click on a quote,
                    type in the meme ID to match your quote and click on "Save meme". Now you can see it in the My mems page!
                </p>
                <h2 className="text-center">Start Game!</h2>
                <div className="d-grid gap-2 col-2 mx-auto mt-4">
                <button className="btn btn-dark" type="button"><Link style={{textDecoration: "none", color:"white"}} to="/Meme">Generate Meme</Link> </button>
                
            </div>
            <div className="d-grid gap-2 col-2 mx-auto mt-4">
                <button className="btn btn-dark" type="button"><Link style={{textDecoration: "none", color:"white"}} to="/Text">Generate Text</Link></button>
            </div>
        </div>

    );
};

export default Home;