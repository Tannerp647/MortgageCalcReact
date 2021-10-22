export function getCalc(body) {
    console.log(body);
    return fetch('http://localhost:1234/calculate-mortgage', {
        method: 'POST',
        body: JSON.stringify(body),
        //add a header saying that the data that we are sending is JSON
        headers: { "content-type": "application/json" }
    })
        .then(data => data.json())
};