fetch('http://loclhost:3000/', { method: 'GET'})
  .then(res => res.json())
  .then(json => console.log(json))

  