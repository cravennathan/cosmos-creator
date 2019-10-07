function getWord() {
     const wordUrl = 'https://random-word-api.herokuapp.com/word?key=0FSC0D10&number=1';
        fetch(wordUrl).then((response) => {
            return response.json();
        }).then( (wordArray) => {
            document.getElementById('randomWord').innerHTML = wordArray[0];
        })
}

function getPicture(searchWords) {
    const pictureUrl = 'https://source.unsplash.com/featured/?' + searchWords.join(',');
    fetch(pictureUrl).then((response) => {
        return response.url;
    }).then((image) => {
        document.getElementById('imageDisplay').innerHTML = '<img src="' + image + '">'
    })
}

function inputKey(event) {
    if( event.code === "Enter") {
        const searchText = document.getElementById('imageSearch').value;
        getPicture(searchText.split(','));
    }
}