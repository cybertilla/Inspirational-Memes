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
      let img = data[number].blank
      setImage(img)
    });
  }

  
  return (
    <div>
      <h1>Meme page</h1>
      {image === null || <img src={image} alt="Meme" />}
    </div>

  );
};

export default Meme;