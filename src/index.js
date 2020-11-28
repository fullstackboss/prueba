import "./styles.css";

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((datos) => {
    return datos.json();
  })
  .then((otros) => {
    // console.log(otros.results)
    otros.results.forEach((element) => {
      console.log(element.name);
    });
  })
  .catch((error) => console.log(error));
