import React, { useCallback, useEffect, useState } from 'react';



const Meme = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    if (image === null && loading === false) {

      //check that loading is false (prevents the following from running on itself)
      setLoading(true);
      fetch('https://api.memegen.link/templates')
        .then(response => response.json())
        .then(data => {
          let number = Math.floor(Math.random() * data.length); // Returns a random number
          let img = data[number]
          setImage({ "image": img.blank, "id": img.id })
        });
    }

  }, [image, loading]);

  const fetchRequest = useCallback(() => {
    fetch('https://api.memegen.link/templates')
      .then(response => response.json())
      .then(data => {
        let number = Math.floor(Math.random() * data.length); // Returns a random number
        let img = data[number]
        setImage({ "image": img.blank, "id": img.id })
      });
  }, []);


  return (
    <div className="container mt-4">
      {image === null ||
        <div>

          <img src={image.image} className="mx-auto d-block" alt="Meme" />
          <p className="text-center">{image.id}</p>

          <div className="d-grid gap-2 col-2 mx-auto mt-4 mb-4">
            <button className="btn btn-dark" type="button" onClick={fetchRequest}>Generate Meme</button>
          </div>


        </div>
      }
    </div>

  );
};

export default Meme;