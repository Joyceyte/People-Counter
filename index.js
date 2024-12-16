// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

let pastEntries = ""
function save() {
    let saveEl = document.getElementById('save-el')
    console.log(saveEl)
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    pastEntries = count +" - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += pastEntries
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
    count = 0
    countEl.textContent = count

}
