import React from "react";

import "./Project.css";

const Project = () => {
  const renderProject = () => {};

  return (
    <div className="Project">
      <div className="Project_Container">
        <div className="container">
          <div className="row">
            <div className="col-6 ">
              <h1 className="Pp1">maitrik</h1>
              <p className="Pp2">
                width: 100%; height: auto; -webkit-animation-delay:
                .25s!important; animation-delay: .25s!important;
                -webkit-transition: all .65s; -o-transition: all .65s;
                transition: all .65s width: 100%; height: auto;
                -webkit-animation-delay: .25s!important; animation-delay:
                .25s!important;
              </p>
              <div class="dev-icons">
                <div class="row">
                  <i class="devicon-html5-plain-wordmark colored"></i>
                  <i class="devicon-heroku-plain colored"></i>
                  <i class="devicon-javascript-plain colored"></i>
                  <i class="devicon-angularjs-plain colored"></i>
                  <i class="devicon-nodejs-plain colored"></i>
                </div>
              </div>
              <button className="ViewCase">View Case Study</button>
            </div>
            <div className="col-6">
              <img
                className="project-img"
                src="https://static.wixstatic.com/media/9a25f2_defd3573480348009e8a0c08889ad54c~mv2.png/v1/fill/w_600,h_315,al_c/9a25f2_defd3573480348009e8a0c08889ad54c~mv2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
