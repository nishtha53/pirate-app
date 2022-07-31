var buttonTranslate = document.querySelector("#btn-pirate-translator");
var txt = document.querySelector(".txt-input-pirate");
var outputdiv = document.querySelector("#output-pirate");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function getServerURL(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error is :", error);
    alert("Try Again after one hour!")
}

function clickHandler(){
    var inputtxt = txt.value;
    fetch(getServerURL(inputtxt))
    .then(response => response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        outputdiv.innerText = translatedText;
    }) 
    .catch(errorHandler)  
}

buttonTranslate.addEventListener("click", clickHandler);
