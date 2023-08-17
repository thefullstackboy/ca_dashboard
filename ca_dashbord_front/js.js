async function getUsers() {
    let response = await fetch("http://localhost:3000/list");
    let data = await response.json()
    return data;
   const dae = document.getElementById("dataContainer").innerHTML = JSON.stringify(data);
}

getUsers().then(data => console.log(data));


