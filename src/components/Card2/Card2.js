import React from "react";

const Card2 = () => {
  return (
    <>
      <div class="card overflow-auto" style={{ maxWidth: "18rem", maxHeight: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">n0tfacebook</h5>
          <h6 class="card-subtitle mb-2 text-muted">Project 2 Week 6</h6>
          <p class="card-text">
            For project two, after six weeks into the course, my team and I were
            tasked with creating a fullstack application. Since it was an
            application from start to finish our team decided to not use a
            styling library and create this one all from scratch to get the full
            effect. The functionality was much
            easier to handle than imagining what we wanted our website to look
            like, even with references.
          </p>
          <a href="https://n0tfacebook.herokuapp.com/" class="card-link">
            n0tfacebook v1.0
          </a>
          <p>

          <a
            href="https://github.com/pravinsisowath/notFacebook"
            class="card-link"
          >
            Github Repo
          </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card2;
