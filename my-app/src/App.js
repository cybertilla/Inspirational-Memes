import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-md">
          <a className="navbar-brand text-light" href="#">
            <img src="https://i.pinimg.com/474x/27/14/51/2714519483a333b8a2f0277aed704b89.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
            Inspirational Mems
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">My mems</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mem generator</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <h1 className="text-center">Inspirational mems</h1>
        <div class="d-grid gap-2 col-2 mx-auto mt-4">
          <button className="btn btn-dark" type="button">Generate Mems</button>
        </div>
       
      </div>
    </div>

  );
}

export default App;
