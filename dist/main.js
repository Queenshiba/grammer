"use strict";

fetch("./data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const index = data.index;

        const result = document.getElementById('result')
        // createCheckboxLebel
        index.forEach(element => {
            let createPtag = document.createElement('p')
            let grammercategory = element.grammercategory
            let grammercategoryTextnode = document.createTextNode(grammercategory)
            // console.log(samplesentence)
            createPtag.appendChild(grammercategoryTextnode)
            result.appendChild(createPtag)
        });


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
            // console.log(searchInput.value)
            index.forEach(element => {
                let samplesentence = element.sentence
                let lowercasedSamplesentence = samplesentence.toLowerCase()

                if (lowercasedSamplesentence.includes(searchInput.value)) {
                    console.log("yes")
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