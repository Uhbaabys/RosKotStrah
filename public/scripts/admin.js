fetch('http://loclhost:3000/animal_type', { method: 'GET' })
  .then(res => res.json())
  .then(json => console.log(json))
