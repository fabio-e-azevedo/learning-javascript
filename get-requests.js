const url = 'https://reqres.in/api/users?page=2';

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

