async function getService() {
  let url = 'http://localhost:3000/api/services/';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}


async function renderUsers() {
  let users = await getService();
  let html = '';
  users.forEach(user => {
      let htmlSegment = ` 
      <div class="class="col-md-10">                        
      <input class="form-check-input me-1" type="checkbox" value="">
                          <h2>service name ${user.service_name}</h2>    
                          <h2>service price ${user.price}</h2>    
                          <input class="form-control" type="number" name="amount" id="amount-1" value="{{service.starting_price}}" style="text-align: center"/>                    
                          <button class="btn btn-primary mt-2">Update</button>
                      </div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.containerdata');
  container.innerHTML = html;
}

renderUsers();


