import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../app/models/store";

import "../../app/layout/style/project.scss";

const ProjectDetail: React.FC = () => {
  const project = useSelector((store: IStore) => store.currentProject);
  const projectStatus = useSelector(
    (store: IStore) => store.currentProject?.currentStatus
  );

  return (
    <div className="projectview">
      <h2>Selected Project</h2>
      {project && projectStatus ? (
        <Fragment>
          <div className="project">
            <h3> {project.titel}</h3>
            <div className="projectpart_main">
              <p> Day of start: {project.startDate}</p>
              <p> Day of end: {project.endDate}</p>
              <h4> Description</h4>
              <p>{project.description}</p>
            </div>
            <div className="projectpart_aside">
              <p> Status: {project.currentStatus}</p>
              <p> Total days of project: {project.totalProjectDays}</p>
              <h4>Kontakt</h4>
              <p>Name: {project.contact?.fullName}</p>
              <p>Titel: {project.contact?.titel}</p>
              <p>
                Email:{" "}
                <a href="mailto:{project.contact?.email}">
                  {" "}
                  {project.contact?.email}
                </a>
              </p>
              <p>Phone: {project.contact?.phoneNumber}</p>
              <h4> Project leader</h4>
              <p>Name: {project.projectLeader?.fullname}</p>
              <p>Titel: {project.projectLeader?.titel}</p>
              <p>
                Email: <a href="mailto:{project.projectleader?.email}"> {project.projectLeader?.email} </a>{" "}
               
              </p>
              <p>Phone: {project.projectLeader?.phonenumber}</p>
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
