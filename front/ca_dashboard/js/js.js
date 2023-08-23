 // API for get requests
 let fetchRes = async()=> {
  document.getElementById('price').innerHTML;
  console.log("page load***")
  const result = await fetch("http://localhost:3000/api/services/");
   const data = await result.json();
   console.log(data)
 } 
 
 addEventListener(onload,fetchRes())



// fetch(`http://localhost:3000/api/services/${productId}`, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


  // function updateData(event) {
  //   event.preventDefault()
  //   fetch('your_api_endpoint', {
  //     method: 'PUT',
  //     body: JSON.stringify(dataToUpdate),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       // Handle success
  //       return response.json();
  //     }
  //     throw new Error('Network response was not ok.');
  //   })
  //   .then(data => {
  //     console.log('Data updated successfully:', data);
  //     // Perform any state updates or other actions here
  //   })
  //   .catch(error => {
  //     console.error('Error updating data:', error);
  //   });
  // }