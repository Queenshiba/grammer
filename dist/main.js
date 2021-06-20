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
            // console.log(samplesentence)
            createPtag.appendChild(textnode)
            result.appendChild(createPtag)
        });

        console.log(index)

        searchInputBtn.addEventListener('click', () => filteringSentences())
        function filteringSentences() {
            console.log(searchInput.value)
            index.forEach(element => {
                let samplesentence = element.sentence
                if (samplesentence.includes(searchInput.value)) {
                console.log(samplesentence)
                } else {
                    console.log("no")
                }

            });

        }
    });



let searchInput = document.getElementById("search-input")
let searchInputBtn = document.getElementById("search-input-btn")





// an affirmative sentence
// a negative sentence
// an interrogative sentence