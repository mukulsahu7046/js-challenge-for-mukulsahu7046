function addData(el) {
  var table = document.getElementById('table');
  var tr = table.insertRow();
  el.form.querySelectorAll('input').forEach(function(el) {
    var cell = tr.appendChild(document.createElement('td'));
    cell.textContent = el.value;
  });
}

//fetch API part

const api_url = "https://jsonplaceholder.typicode.com/users";


async function getapi(url) {
  
  
  const response = await fetch(url);
  
  
  var data = await response.json();
  console.log(data);
  
  show(data);
}

getapi(api_url);


function show(data) {
  
  let tab =`<tr>
        <th>Sr. No.</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company name</th>
      </tr>`;
  

  
    data.forEach(function(r){
    tab += `<tr>
  <td>${r.id}</td>
  <td>${r.name}</td>
  <td>${r.username}</td>
  <td>${r.email}</td> 
  <td>${r.address.street},${r.address.suite},${r.address.city},${r.address.zipcode}</td>
  <td>${r.phone} </td>
  <td>${r.website} </td>
  <td>${r.company.name} </td>
</tr>`;
  });

  document.getElementById("table").innerHTML = tab;
}

