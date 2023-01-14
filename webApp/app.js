const apiGateway = '';

const h1 = document.querySelector('h1');
const submit = document.querySelector('#submitBtn');
const loadFeedback = document.querySelector('#loadFeedbackBtn');

function callAPI(input) { 
        const header = new Headers();
        header.append("Content-Type", "application/json");
        const raw = JSON.stringify({"input":input});

        const requestOptions = {
        method: 'POST',
        Headers: header,
        body: raw,
        redirect: 'follow'
    };

    fetch(apiGateway, requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));

    getAPI();
}

async function getAPI() {
    const response = await fetch(apiGateway);
    // Storing data in form of JSON
    const data = await response.json();
    show(data);
}

function show(data) {
    h1.innerHTML = '';
    
    /**
     * Typical return json
     * {"feedback": {"S": "23:19"}, "time": {"S": "Fri, 13 Jan 2023 10:19:48 +0000"}}
     * from data "feedback": , "S":
     */
    h1.innerHTML += '<p>' + data.feedback.S + '</p>';
}

document.addEventListener('DOMContentLoaded', () => {
    getAPI();
});

submit.addEventListener('click', () => {
    callAPI(document.getElementById('input').value);
    const input = document.querySelector('#input');
    input.value = '';
});

loadFeedback.addEventListener('click', () => {
    h1.innerText = '';
    h1.innerText = 'Loading feedback...';
    getAPI();
});