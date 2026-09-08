
const api_url = "http://localhost:3000/api";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded fired!");

    // Get data from localhost:3000 
    //fetch("data.json")
    fetch(api_url + "/content")
        // Take the data from response and convert it to JSON
        .then(response => response.json())
        // Take the JSON data and parse it into function
        .then(jsonData => parseJSON(jsonData))
        // Catch the error
        .catch(error => {
            console.log(error);
        })
})

function parseJSON(jsonData) {
    console.log("In parseJSON");
    console.log(jsonData);

    let conDiv = document.getElementById("content")

    // Loop through content in each pages
    jsonData.content.forEach(page => {
        
        // Create a tag
        let bookDiv = document.createElement("div")
        let h2Div = document.createElement("h2")
        let paraDiv = document.createElement("div")

        // Loop through each paragraphs
        page.paragraphs.forEach(paragraph => {
            
            // Create a tag
            let para = document.createElement("p")

            para.textContent = paragraph;

            paraDiv.appendChild(para);
        })

        // Assign text to tag
        h2Div.textContent = page.heading1;

        // Append child
        conDiv.appendChild(bookDiv);
        bookDiv.appendChild(h2Div);
        bookDiv.appendChild(paraDiv);

    })
}

function getHome() {
    fetch(api_url + "/content")
        .then(response => response.json())
        .then(data => {

            const contDiv = document.getElementById('content');
            console.log("Length of data: " + data.length);

            
        })
}