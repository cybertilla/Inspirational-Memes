import Home from "./pages/Home";
import Meme from "./pages/Meme";
import Text from "./pages/Text";
import MyMeme from "./pages/MyMeme";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-md">
          <a className="navbar-brand text-light" href="/">
            <img src="https://i.pinimg.com/474x/27/14/51/2714519483a333b8a2f0277aed704b89.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
            Inspirational Mems
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/MyMeme">My mems</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Text">Generate Quote</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Meme">Generate Meme</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Meme" element={<Meme />} />
        <Route path="/Text" element={<Text />} />
        <Route path="/MyMeme" element={<MyMeme />} />
      </Routes>
    </BrowserRouter>
  );



}

export default App;