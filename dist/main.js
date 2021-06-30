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
            let grammercategory = element.grammercategory
            let grammercategoryTextnode = document.createTextNode(grammercategory)
            // console.log(grammercategory)
            // createPtag.appendChild(grammercategoryTextnode)
            // result.appendChild(createPtag)
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
let filteringCheckboxBtn = document.getElementById("filteringCheckboxBtn")

//get lebels of checkbox
filteringCheckboxBtn.addEventListener('click', () => filteringCheckboxLabels())
function filteringCheckboxLabels() {
    let checkboxes = document.getElementsByClassName("checkbox")
    for (let i = 0; i < checkboxes.length; i++) {
        let checkboxValue = checkboxes[i].value;
        if (checkboxes[i].value) {
            let checkedCheckbox = checkboxes[i].value
            
            console.log(checkboxes[i].value)

        }
    }

}


// createCheckboxLebel
const typesofsentences = ["SV", "SVC", "SVO", "SVOO", "SVOC"]
let checkboxWrapType = document.getElementById('group-type')
typesofsentences.forEach(element => {
    let createCheckbox = document.createElement('input')
    createCheckbox.setAttribute("type", "checkbox")
    createCheckbox.setAttribute("class", "checkbox")
    createCheckbox.setAttribute("value", element)
    let createCheckboxLebel = document.createElement('label')
    let typesofsentencesTextnode = document.createTextNode(element)
    createCheckboxLebel.appendChild(typesofsentencesTextnode)
    checkboxWrapType.appendChild(createCheckbox)
    checkboxWrapType.appendChild(createCheckboxLebel)
})

const typesoftenses = ["Present simple", "Present tense", "Present continuous", "Present perfect continuous", "Past simple", "Past tense", "Past continuous", "Present perfect", "Past perfect", "Past perfect continuous", "Future simple", "Future simple", "Future continuous", "Future perfect", "Future perfect continuous"]
const typesoftensesJp = { "現在時制": ["現在形", "現在進行形", "現在完了進行形"], "過去時制": ["過去形", "過去進行形", "現在完了形", "過去完了", "過去完了進行形"], "未来時制": ["未来形", "未来進行形", "未来完了形", "未来完了進行形"] }

let checkboxWrapTense = document.getElementById('group-tense')
typesoftenses.forEach(element => {
    let createCheckbox = document.createElement('input')
    createCheckbox.setAttribute("type", "checkbox")
    createCheckbox.setAttribute("value", element)
    let createCheckboxLebel = document.createElement('label')
    let typesofsentencesTextnode = document.createTextNode(element)
    createCheckboxLebel.appendChild(typesofsentencesTextnode)
    checkboxWrapTense.appendChild(createCheckbox)
    checkboxWrapTense.appendChild(createCheckboxLebel)
})

const infinitive = ["noun", "adjective", "adverb"]
const gerund = ["none"]
const comparativeJp = ["原級比較", "比較級", "最上級"]
// an affirmative sentence
// a negative sentence
// an interrogative sentence