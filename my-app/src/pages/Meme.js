import React, { useEffect, useState } from 'react';



const Meme = () => {
  const [image, setImage] = useState(null);


  useEffect(() => {fetch('https://api.memegen.link/templates')
  .then(response => response.json())
  .then(data => {
    let number = Math.floor(Math.random() * data.length); // Returns a random number
    let img = data[number].blank
    setImage(img)
  })}, []);

  


  return (
    <div>
      <h1>Meme page</h1>
      <img src={image} alt="Meme"></img>
    </div>

  );
};

export default Meme;