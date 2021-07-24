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
    
                for (let i = 0; i < results.length; i++) {
                    let createPForResults = document.createElement('p')
                    let textnodeResult = document.createTextNode(results[i])
                    console.log(results.length)
                    createPForResults.appendChild(textnodeResult)
                    // console.log(textnodeResult)
                    resultWrap.appendChild(createPForResults)

                }
            }

        }

    });



let searchInput = document.getElementById("search-input")
let searchInputBtn = document.getElementById("search-input-btn")
let filteringCheckboxBtn = document.getElementById("filteringCheckboxBtn")

// Add checkbox contents detail below
const typesofsentences = ["SV", "SVC", "SVO", "SVOO", "SVOC"]
const typesoftenses = ["現在時制", "現在形", "Present continuous", "Present perfect continuous", "過去形", "Past tense", "Past continuous", "Present perfect", "Past perfect", "Past perfect continuous", "Future simple", "Future simple", "Future continuous", "Future perfect", "Future perfect continuous"]
const typesofcomparative = ["原級比較", "比較級", "最上級"]
const typesofcfiniteVerbs = ["不定詞", "動名詞"]

// Add checkbox contents below
const checkboxContents = [typesofsentences, typesoftenses, typesofcomparative,typesofcfiniteVerbs]
const checkboxContentsLabel = ['typesofsentences', 'typesoftenses', 'typesofcomparative',"typesofcfiniteVerbs"]


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




// createCheckboxLebel
// const typesofsentences = ["SV", "SVC", "SVO", "SVOO", "SVOC"]
// let checkboxWrapType = document.getElementById('group-type')
// typesofsentences.forEach(element => {
//     let createCheckbox = document.createElement('input')
//     createCheckbox.setAttribute("type", "checkbox")
//     createCheckbox.setAttribute("class", "checkbox")
//     createCheckbox.setAttribute("value", element)
//     let createCheckboxLebel = document.createElement('label')
//     let typesofsentencesTextnode = document.createTextNode(element)
//     createCheckboxLebel.appendChild(typesofsentencesTextnode)
//     checkboxWrapType.appendChild(createCheckbox)
//     checkboxWrapType.appendChild(createCheckboxLebel)
// })

// const typesoftenses = ["Present simple", "Present tense", "Present continuous", "Present perfect continuous", "Past simple", "Past tense", "Past continuous", "Present perfect", "Past perfect", "Past perfect continuous", "Future simple", "Future simple", "Future continuous", "Future perfect", "Future perfect continuous"]
// const typesoftensesJp = { "現在時制": ["現在形", "現在進行形", "現在完了進行形"], "過去時制": ["過去形", "過去進行形", "現在完了形", "過去完了", "過去完了進行形"], "未来時制": ["未来形", "未来進行形", "未来完了形", "未来完了進行形"] }

// let checkboxWrapTense = document.getElementById('group-tense')
// typesoftenses.forEach(element => {
//     let createCheckbox = document.createElement('input')
//     createCheckbox.setAttribute("type", "checkbox")
//     createCheckbox.setAttribute("class", "checkbox")
//     createCheckbox.setAttribute("value", element)
//     let createCheckboxLebel = document.createElement('label')
//     let typesofsentencesTextnode = document.createTextNode(element)
//     createCheckboxLebel.appendChild(typesofsentencesTextnode)
//     checkboxWrapTense.appendChild(createCheckbox)
//     checkboxWrapTense.appendChild(createCheckboxLebel)
// })


// const typesofcomparative = ["原級比較", "比較級", "最上級"]
// const comparativeJp = ["原級比較", "比較級", "最上級"]

// let checkboxWrapComparative = document.getElementById('group-comparative')
// typesofcomparative.forEach(element => {
//     let createCheckboxForComparative = document.createElement('input')
//     createCheckboxForComparative.setAttribute("type", "checkbox")
//     createCheckboxForComparative.setAttribute("class", "checkbox")
//     createCheckboxForComparative.setAttribute("value", element)
//     let createCheckboxLebelForComparative = document.createElement('label')
//     let typesofinfinitiveTextnode = document.createTextNode(element)
//     createCheckboxLebelForComparative.appendChild(typesofinfinitiveTextnode)
//     checkboxWrapComparative.appendChild(createCheckboxForComparative)
//     checkboxWrapComparative.appendChild(createCheckboxLebelForComparative)
// })


const typesofinfinitive = ["noun", "adjective", "adverb"]
const gerund = ["none"]
// an affirmative sentence
// a negative sentence
// an interrogative sentence