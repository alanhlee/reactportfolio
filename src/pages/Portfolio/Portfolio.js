import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Card2 from "../../components/Card2";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <h3>Projects</h3>
      <div className="row">
        <div className="col-sm-6">
          <div
            className="card overflow-auto"
            style={{ maxWidth: "80%", maxHeight: "80%" }}
          >
            <div className="card-body">
              <h5 className="card-title">Pokemon Indexer</h5>
              <p className="card-text">
                This application was created as my first project during the
                course. This was our first introduction into API's. The team
                decided to work on something nostalgic so we went with the first
                150 Pokemon using https://pokeapi.co/ notes taken away from this
                project were how calls were made to an API, teamwork, and how
                much focus is required for CSS styling.
              </p>
              <a
                href="https://alanhlee.github.io/PokemonIndex/"
                className="card-link"
              >
                Pokemon Indexer v1.0
              </a>
              <p>
                <a
                  href="https://github.com/alanhlee/PokemonIndex/"
                  className="card-link"
                >
                  Github Repo
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            className="card overflow-auto"
            style={{ maxWidth: "80%", maxHeight: "80%" }}
          >
            <div className="card-body">
              <h5 className="card-title">n0tfacebook</h5>
              <p className="card-text">
                For project two, after six weeks into the course, my team and I
                were tasked with creating a fullstack application. Since it was
                an application from start to finish our team decided to not use
                a styling library and create this one all from scratch to get
                the full effect. The functionality was much easier to handle
                than imagining what we wanted our website to look like, even
                with references.
              </p>
              <a
                href="https://n0tfacebook.herokuapp.com/"
                className="card-link"
              >
                n0tfacebook v1.0
              </a>
              <p>
                <a
                  href="https://github.com/pravinsisowath/notFacebook"
                  className="card-link"
                >
                  Github Repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3>Works</h3>
      <div className="row">
        <div className="col-sm-6">
          <div
            className="card overflow-auto"
            style={{ maxWidth: "80%", maxHeight: "80%" }}
          >
            <div className="card-body">
              <h5 className="card-title">Employee Tracker</h5>
              <p className="card-text">
                When we were introduced to node.js for this we were shown how to
                work through the terminal and create applications that worked
                with node.js + a database. For this application we used the
                terminal to prompt a user and from the user responses create and
                display a employee directory
              </p>

              <p>
                <a
                  href="https://github.com/alanhlee/employeeTracker"
                  className="card-link"
                >
                  Github Repo
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            className="card overflow-auto"
            style={{ maxWidth: "80%", maxHeight: "80%" }}
          >
            <div className="card-body">
              <h5 className="card-title">Node Express Handlebars</h5>
              <p className="card-text">
                For this application we were shown how to use tech (handlebars)
                that handles the middle ground between basic and complex
                applications. Again connecting the front end and the backend.
              </p>
              <a
                href="https://burgersdevoured11.herokuapp.com/"
                className="card-link"
              >
                Burger Application v1.0
              </a>
              <p>
                <a
                  href="https://github.com/alanhlee/burger"
                  className="card-link"
                >
                  Github Repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div
            className="card overflow-auto"
            style={{ maxWidth: "80%", maxHeight: "80%" }}
          >
            <div className="card-body">
              <h5 className="card-title">PWA</h5>
              <p className="card-text">
                Learning about progressive web applications, I was shown how to
                make a PWA, making sure standards were up to par. Understanding
                components that make a PWA and why they are in place. If you
                open the link to the website open up your element inspector you
                may check the lighthouse score given on said application.
              </p>
              <a
                href="https://mysterious-ocean-33099.herokuapp.com/"
                className="card-link"
              >
                PWA application
              </a>

              <p>
                <a
                  href="https://github.com/alanhlee/pwaBudgetTrack"
                  className="card-link"
                >
                  Github Repo
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            className="card overflow-auto"
            style={{ maxWidth: "80%", maxHeight: "80%" }}
          >
            <div className="card-body">
              <h5 className="card-title">Code Quiz</h5>
              <p className="card-text">
                This was our very first application I created with the limited
                knowledge I had in coding (2 weeks) I was able to produce an
                application that took an array of questions and kept scores for
                a user also displaying high scores
              </p>
              <a
                href="https://alanhlee.github.io/CodeQuiz/"
                className="card-link"
              >
                Code Quiz v1.0
              </a>
              <p>
                <a
                  href="https://github.com/alanhlee/CodeQuiz"
                  className="card-link"
                >
                  Github Repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-lg-1">
            <Card />
          </div>
          <div className="col-lg-1">
            <Card2 />
          </div>
          <div className="col-lg-1">
            <Card2 />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Portfolio;
