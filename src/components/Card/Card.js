import React from "react";

const Card = () => {
  return (
    <>
      <div class="card overflow-auto" style={{ maxWidth: "18rem", maxHeight: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Pokemon Indexer</h5>
          <h6 class="card-subtitle mb-2 text-muted">Project 1 Week 3</h6>
          <p class="card-text">
            This application was created as my first project during the course. This was our first introduction into API's our team decided to work on something nostalgic so we went with the first 150 Pokemon using https://pokeapi.co/
          </p>
          <a href="https://alanhlee.github.io/PokemonIndex/" class="card-link">
            Pokemon Indexer v1.0
          </a>
          <p>

          <a href="https://github.com/alanhlee/PokemonIndex/" class="card-link">
            Github Repo
          </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
