"use strict";

fetch("./data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const sampleSentences = data.sentences;
        let ptag = document.getElementsByTagName('p')
        ptag = sampleSentences
        console.log(sampleSentences)
    });

