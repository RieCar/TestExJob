import React from "react";
import "../../app/layout/style/global.scss";
import "../../app/layout/style/home.scss";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <div className="home">
        <h2 className="home-titel"> Welcome to Camelonta's Customer portal</h2>

        <p className="home-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ornare accumsan sapien id aliquet. Duis id magna lacinia, mattis
          sapien et, iaculis mi. Pellentesque libero ipsum, vestibulum eget
          commodo nec, tincidunt ac felis. Nulla et neque vestibulum, dapibus
          nisl id, vestibulum magna. Phasellus vulputate magna nec lorem
          pulvinar, sed maximus sem sollicitudin. Quisque ac dui consequat odio
          venenatis finibus. Aenean id tortor mi. 
          </p>
          <p className="home-content"> Cras finibus sit amet mauris
          non scelerisque. Quisque fermentum rhoncus sem et finibus. Nullam sit
          amet ex leo. Sed ultrices viverra lectus, quis tincidunt sem varius
          at. Mauris semper metus urna, non consequat dui volutpat a. Maecenas
          at metus dignissim, fringilla risus ultricies, posuere lectus. Duis
          est metus, tempor sed felis imperdiet, aliquam ornare neque. Maecenas
          et dui eget leo fringilla tempor. Nullam vestibulum maximus dui, et
          pellentesque diam feugiat sed.
        </p>
     
        <p className="home-content">
          <Link to="/login">Login </Link>
        </p>
      </div>
    </div>
  );
}
