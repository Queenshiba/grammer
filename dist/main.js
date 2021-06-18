"use strict";

fetch("./data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const index = data.index;

        const result = document.getElementById('result')
        
index.forEach(element => {

    let createPtag = document.createElement('p')
    let samplesentence = element.sentence
    let textnode = document.createTextNode(samplesentence)
    console.log(samplesentence)
    createPtag.appendChild(textnode)
    result.appendChild(createPtag)
});
      
        console.log(index)
    });

