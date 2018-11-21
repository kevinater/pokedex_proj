class Pokemon {
  constructor (pokeImage, name, hp, attack, defense, ability) {
    this.pokeImage = pokeImage;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.ability = ability;
    this.container = document.querySelector('#pokeStats');
    this.element = document.createElement("div");
    this.element.className = 'poke_products';
  }


display () {

  let pokeImage = document.getElementById('imgPlaceHolder');
  pokeImage.src = this.pokeImage;
  this.element.appendChild(pokeImage);
  this.container.appendChild(this.element);

  let name = document.createElement('h2');
  name.innerHTML = "Name: " + this.name;
  this.element.appendChild(name);
  this.container.appendChild(this.element);

  let hp = document.createElement('h3');
  hp.innerHTML = "HP: " + this.hp;
  this.element.appendChild(hp);
  this.container.appendChild(this.element);

  let attack = document.createElement('h3');
  attack.innerHTML = "Attack: " + this.attack;
  this.element.appendChild(attack);
  this.container.appendChild(this.element);

  let defense = document.createElement('h3');
  defense.innerHTML = "Defense: " + this.defense;
  this.element.appendChild(defense);
  this.container.appendChild(this.element);

  let ability = document.createElement('h3');
  ability.innerHTML = "Abilities: " + this.ability;
  this.element.appendChild(ability);
  this.container.appendChild(this.element);

}
}


let meowth;
axios.get("http://fizal.me/pokeapi/api/v2/name/meowth.json")
  .then(function(response) {
    let meowth_img = "meowthstrum.gif";
    let meowth_name = "Meowth";
    let meowth_hp = response.data.stats[5].base_stat;
    let meowth_attack = response.data.stats[4].base_stat;
    let meowth_defense = response.data.stats[3].base_stat;

    let meowth_ability = response.data.abilities[0].ability.name;
    console.log(meowth_ability);
    for (let i = 0; i < response.data.abilities[i].ability.length; i++) {
      let result = response.data.abilities[i].ability.name;
      console.log ("Abilities: ", result);
    }


    meowth = new Pokemon(meowth_img, meowth_name, meowth_hp, meowth_attack, meowth_defense, meowth_ability,);
    meowth.display();

  })



let wobbuffet;
axios.get("http://fizal.me/pokeapi/api/v2/name/wobbuffet.json")
  .then(function(response) {
    let wobb_image = "wobbuffetfood.gif";
    let wobb_name = "Wobbuffet";
    let wobb_hp = response.data.stats[5].base_stat;
    let wobb_attack = response.data.stats[4].base_stat;
    let wobb_defense = response.data.stats[3].base_stat;

    let wobb_ability = response.data.abilities[0].ability.name;
    for (let i = 0; i < response.data.abilities[i].ability.length; i++) {
      let result = response.data.abilities[i].ability.name;

    }


    wobbuffet = new Pokemon(wobb_image, wobb_name, wobb_hp, wobb_attack, wobb_defense, wobb_ability);
    wobbuffet.display();


  })

let arbok;
axios.get("http://fizal.me/pokeapi/api/v2/name/arbok.json")
  .then(function(response) {
    let arbok_hp = response.data.stats[5].base_stat;
    let arbok_attack = response.data.stats[4].base_stat;
    let arbok_defense = response.data.stats[3].base_stat;

    let arbok_ability = response.data.abilities[0].ability;
    for (let i = 0; i < response.data.abilities[i].ability.length; i++) {
      let result = response.data.abilities[i].ability.name;
    }

    arbok = new Pokemon(arbok_hp, arbok_attack, arbok_defense, arbok_ability);

  })
