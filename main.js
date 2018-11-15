











axios.get("http://fizal.me/pokeapi/api/v2/name/meowth.json")
  .then(function(response) {
    console.log(response);
    console.log(response.data.stats[5]);
  })
