class Pokemon {
  constructor (name, hp, attack, defense, ability) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.ability = ability;
  }
}


axios.get("http://fizal.me/pokeapi/api/v2/name/meowth.json")
  .then(function(response) {
    let meowth_hp = response.data.stats[5].base_stat;
    let meowth_attack = response.data.stats[4].base_stat;
    let meowth_defense = response.data.stats[3].base_stat;
    let meowth_ability = response.data.abilities[0].ability;

  })

axios.get("http://fizal.me/pokeapi/api/v2/name/wobbuffet.json")
  .then(function(response) {
    let wobb_hp = response.data.stats[5].base_stat;
    let wobb_attack = response.data.stats[4].base_stat;
    let wobb_defense = response.data.stats[3].base_stat;
    let wobb_ability = response.data.abilities[0].ability;
  })

axios.get("http://fizal.me/pokeapi/api/v2/name/arbok.json")
  .then(function(response) {
    let arbok_hp = response.data.stats[5].base_stat;
    let arbok_attack = response.data.stats[4].base_stat;
    let arbok_defense = response.data.stats[3].base_stat;
    let arbok_ability = response.data.abilities[0].ability;

  })
