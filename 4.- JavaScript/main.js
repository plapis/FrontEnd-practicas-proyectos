function enterKeyPressed(event){
    if(event.which == 13){
        fetchPokemon();

    }
}

const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokeInput;
    pokeclsInput();
    fetch(url).then((res) =>{
        if(res.status != "200"){
            pokeImage("./images/sad.png");
            pokeError(); 
        }
        else{
            return res.json();
        }
    }).then((data) => {
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        pokeSet(data);
    })
}


const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

}

const pokeError = () => {

}

const pokeSet = (data) => {
    //Establece nombre e id
    document.getElementById("nombre").innerHTML = "#" + data.id + " " + 
    data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1);

    //Establece el tipo de pokemon
    let numTipos = Object.keys(data.types).length;
    if(numTipos == 1){
        document.getElementById("tipo").innerHTML = 
        data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
    }
    else{
        document.getElementById("tipo").innerHTML = 
        data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1) + " " + 
        data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1);
    }

    //
}

const pokeclsInput = () =>{
    document.getElementById("pokeName").value = "";
}

pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");
