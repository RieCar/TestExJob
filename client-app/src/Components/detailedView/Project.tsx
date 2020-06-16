import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../app/models/store";

import "../../app/layout/style/project.scss";
import { NONAME } from "dns";

const ProjectDetail: React.FC = () => {
  const project = useSelector((store: IStore) => store.currentProject);
  // const projectTitel = useSelector(
  //   (store: IStore) => store.currentProject?.titel
  // );
  const [isHidden, setisHidden] = useState(false);
  function handleOnToggle(event: any) {
    event.preventDefault();

    var doc = document.getElementById("project");
    if (doc) {
      if (isHidden === false) {
        doc.style.display = "none";
        setisHidden(true);
      } else {
        doc.style.display = "block";
        setisHidden(false);
      }
    }
  }

  return (
    <div className="projectview">
      <h2 onClick={handleOnToggle}>Selected Project </h2>
      {project && project.titel ? (
        <Fragment>
          <div id="project" className="project">
            <h3> {project.titel}</h3>
            <div className="projectpart_main">
              <div className="projectpart_content">
                <p>
                  {" "}
                  <b>Start: </b> {project.startDate ?project.startDate : "-" }
                </p>
                <p>
                  {" "}
                  <b>End: </b> {project.endDate ? project.endDate : "-"}
                </p>
              </div>
              <div className="projectpart_content">
                <h4> Description</h4>
                <p>{project.description}</p>
              </div>
            </div>
            <div className="projectpart_aside">
              <div className="projectpart_content">
                <p>
                  {" "}
                  <b>Status: </b> {project.currentStatus}
                </p>
                <p>
                  {" "}
                  <b>Total days of project: </b> {project.totalProjectDays}
                </p>
              </div>
              <div className="projectpart_content">
                <div className="projectpart-contentitem">
                  <h4>Kontakt</h4>
                  <p>
                    {" "}
                    <b>Name: </b> {project.contact?.fullName}
                  </p>
                  <p>
                    <b>Titel: </b> {project.contact?.titel}
                  </p>
                  <p>
                    <b>Email: </b>{" "}
                    <a href="mailto:{project.contact?.email}">
                      {" "}
                      {project.contact?.email}
                    </a>
                  </p>
                  <p>
                    <b>Phone: </b> {project.contact?.phoneNumber}
                  </p>
                </div>
                <div className="projectpart_contentitem">
                  <h4> Project leader</h4>
                  <p>
                    {" "}
                    <b>Name: </b> {project.projectLeader?.fullname}
                  </p>
                  <p>
                    <b>Titel: </b> {project.projectLeader?.titel}
                  </p>
                  <p>
                    <b>Email: </b>{" "}
                    <a href="mailto:{project.projectleader?.email}">
                      {" "}
                      {project.projectLeader?.email}{" "}
                    </a>{" "}
                  </p>
                  <p>
                    <b>Phone: </b>
                    {project.projectLeader?.phonenumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <p> No project selected.</p>
      )}
    </div>
  );
};
export default ProjectDetail;
