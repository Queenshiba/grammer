"use strict";

fetch("./data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const index = data.index;

        const resultWrap = document.getElementById('resultWrap')




        index.forEach(element => {
            let createPtag = document.createElement('p')
            let grammercategory = element.grammercategory
            let grammercategoryTextnode = document.createTextNode(grammercategory)
            // console.log(grammercategory)
            // createPtag.appendChild(grammercategoryTextnode)
            // result.appendChild(createPtag)
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


        //get lebels of checked checkbox value
        filteringCheckboxBtn.addEventListener('click', () => getCheckboxLabels())

        function getCheckboxLabels() {
            let checkedcheckboxes = document.querySelectorAll('input[type=checkbox]:checked')

            let checkedCheckboxValuesArr = []
            for (let i = 0; i < checkedcheckboxes.length; i++) {
                let checkedCheckboxValue = checkedcheckboxes[i].value
                // console.log(checkedCheckboxValue.length)
                checkedCheckboxValuesArr.push(checkedCheckboxValue)
                // console.log(checkedCheckboxValuesArr)
                test(checkedCheckboxValuesArr)
            }

            function test(checkedCheckboxValuesArr) {
                let results = [];
                index.forEach(element => {
                    let grammercategoryValues = Object.values(element.grammercategory)

                    for (let k = 0; k < checkedCheckboxValuesArr.length; k++) {
                        if (grammercategoryValues.includes(checkedCheckboxValuesArr[k])) {
                            results.push(element.sentence)
                        }

                        test(results)
                    }

                })
                console.log(results)
                showResults(results)

            }


            function showResults(results) {
                // console.log(results.length)
                // if (results.length === 0) {
                //     let createPForNotfound = document.createElement('p')
                //     let textnodeNotfound = document.createTextNode("Not found")
                //     createPForNotfound.appendChild(textnodeNotfound)
                //     resultWrap.appendChild(createPForNotfound)
                // } else {
                for (let i = 0; i < results.length; i++) {
                    let createPForResults = document.createElement('p')
                    createPForResults.setAttribute("class", "filteredSetence")
                    let textnodeResult = document.createTextNode(results[i])
                    console.log(results.length)
                    createPForResults.appendChild(textnodeResult)
                    resultWrap.appendChild(createPForResults)
                }
                // }

            }

        }


    });

const resultWrap = document.getElementById('resultWrap')

let searchInput = document.getElementById("search-input")
let searchInputBtn = document.getElementById("search-input-btn")
let filteringCheckboxBtn = document.getElementById("filteringCheckboxBtn")

// Add checkbox contents detail below
const typesofsentences = ["SV", "SVC", "SVO", "SVOO", "SVOC"]
const typesoftenses = ["????????????", "?????????", "Present continuous", "Present perfect continuous", "?????????", "Past tense", "Past continuous", "Present perfect", "Past perfect", "Past perfect continuous", "Future simple", "Future simple", "Future continuous", "Future perfect", "Future perfect continuous"]
const typesofcomparative = ["????????????", "?????????", "?????????"]
const typesofgrammer = ["?????????", "?????????", "???????????????", "??????", "??????", "????????????", "?????????"]

// Add checkbox contents below
const checkboxContents = [typesofsentences, typesoftenses, typesofcomparative, typesofgrammer]
const checkboxContentsLabel = ['??????', '??????', '??????', "??????"]


// function to create checkboxes and labels
creatingCheckboxAndLabel(checkboxContents)

function creatingCheckboxAndLabel(checkboxContents) {
    let checkboxLabelWrap = document.getElementById('checkboxLabelWrap')



    for (let i = 0; i < checkboxContents.length; i++) {

        let createCheckboxWrap = document.createElement('div')
        createCheckboxWrap.setAttribute("id", checkboxContentsLabel[i])

        let createh2 = document.createElement('h2')
        let h2Textnode = document.createTextNode(checkboxContentsLabel[i])
        createh2.appendChild(h2Textnode)
        createCheckboxWrap.appendChild(createh2)

        checkboxLabelWrap.appendChild(createCheckboxWrap)

        checkboxContents[i].forEach(content => {
            let createCheckbox = document.createElement('input')
            createCheckbox.setAttribute("type", "checkbox")
            createCheckbox.setAttribute("class", "checkbox")
            createCheckbox.setAttribute("value", content)
            let createCheckboxLebel = document.createElement('label')
            let textnode = document.createTextNode(content)

            createCheckboxLebel.appendChild(textnode)
            createCheckboxWrap.appendChild(createCheckbox)
            createCheckboxWrap.appendChild(createCheckboxLebel)


        })

    }

}

let clearCheckboxBtn = document.getElementById("clearCheckbox")
clearCheckboxBtn.addEventListener('click', () => clearCheckbox())
function clearCheckbox() {
    let checkboxes = document.getElementsByClassName('checkbox')
    for (let i in checkboxes)
        if (checkboxes[i].type == "checkbox") {
            checkboxes[i].checked = false;
        }
        let resultWrap = document.getElementById('resultWrap')
        resultWrap.remove()

}





const typesofinfinitive = ["noun", "adjective", "adverb"]
const gerund = ["none"]
    // an affirmative sentence
    // a negative sentence
    // an interrogative sentence