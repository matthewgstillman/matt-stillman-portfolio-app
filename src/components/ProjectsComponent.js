import React from "react";
import UpdatedNavbarComponent from "./UpdatedNavbarComponent";
import "../css/main.css";
import omdb from "../Images/omdbProjectScreenshot.png";

const ProjectsComponent = () => {
  return (
    <div>
      <UpdatedNavbarComponent />
      <div class="flip-card" tabIndex="0">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={omdb} height="380" />
          </div>
          <div class="flip-card-back">
            <a href="https://main.d22bh3gff8l7ye.amplifyapp.com/">
              OMDB API Project
            </a>
          </div>
        </div>
        <h3>OMDB Movie API</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <br />
        <br />
        <div class="flip-card-2" tabIndex="0">
          <div class="flip-card-2-inner">
            <div class="flip-card-2-front">
              <img src={omdb} height="380" />
            </div>
            <div class="flip-card-2-back">
              <a href="https://main.d22bh3gff8l7ye.amplifyapp.com/">
                OMDB API Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
