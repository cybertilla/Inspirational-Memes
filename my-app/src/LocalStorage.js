export function loadMemes() {
    //Get memes from local storage 
    let jsonMemes = localStorage.getItem("memes");

    //If there are no memes, create an empty list
    if (jsonMemes == null) {
        return [];
    }
    else {
        //Else, parse json and return it
        return JSON.parse(jsonMemes);
    }
}

export function saveMeme(meme) {
    //Saves a todo to local storage in JSON-format
    let localMemes = loadMemes();
    localMemes.push(meme);
    localStorage.setItem("memes", JSON.stringify(localMemes));
}

export function DeleteMeme(index) {

    let currentMemes = loadMemes();
    currentMemes.splice(index, 1);
    window.localStorage.setItem("memes", JSON.stringify(currentMemes));
    
    let card = document.getElementById(index)
    card.remove()
};


