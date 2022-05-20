import React, { useState } from 'react';



const Meme = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);


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


  return (
    <div className="container mt-4">
      {image === null ||
        <div>
          <img src={image.image} className="mx-auto d-block" alt="Meme" />
          <p>{image.id}</p>
        </div>
      }
    </div>

  );
};

export default Meme;