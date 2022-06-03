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
    //Saves a meme to local storage in JSON-format
    let localMemes = loadMemes();
    const newId = localMemes.length > 0 ? localMemes[localMemes.length - 1].id + 1 : 1;
    localMemes = [...localMemes, {
        id: newId,
        text: meme.text,
        url: meme.url,
        memeId: meme.memeId
    }]
    //localMemes.push(meme);
    localStorage.setItem("memes", JSON.stringify(localMemes));
}

export function DeleteMeme(index) {
    //Removes a meme
    let currentMemes = loadMemes();
    //currentMemes.splice(index, 1);
    currentMemes = currentMemes.filter((meme) => meme.id !== index)
    window.localStorage.setItem("memes", JSON.stringify(currentMemes));
    
    let card = document.getElementById(index)
    card.remove()
};


