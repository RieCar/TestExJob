import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../app/models/store";

import "../../app/layout/style/order.scss";

const OrderDetail: React.FC = () => {
  const order = useSelector((store: IStore) => store.currentOrder);

  const orderTitel = useSelector((store: IStore) => store.currentOrder?.titel);
  const [isHidden, setisHidden] = useState(false);
  function handleOnToggle(event: any) {
    event.preventDefault();

    var doc = document.getElementById("order");
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
    <div className="orderview">
      <h2 onClick={handleOnToggle}>Selected Order</h2>
      {order && orderTitel ? (
        <Fragment>
          <div id="order" className="order">
            <h3> {order?.titel}</h3>
            <div className="orderpart_main">
              <div className="orderpart_content">
                <p>
                  <b>Day of start: </b> {order?.startDate}
                </p>
                <p>
                  {" "}
                  <b>Day of end: </b> {order?.endDate}
                </p>
                <p>
                  <b>Estimated cost: </b> {order?.estimatedCost}{" "}
                </p>
              </div>
              <div className="orderpart_content">
                <h4> Description</h4>
                <p>{order?.description}</p>
              </div>
            </div>
            <div className="orderpart_aside">
              <div className="orderpart_content">
                <p>
                  {" "}
                  <b>Status: </b> {order?.status}
                </p>
                <p>
                  <b> Total days of project:</b> {order?.totalOrderDays}
                </p>
              </div>
              <div className="orderpart_content">
                <div className="orderpart_contentitem"> 
                <h4>Kontakt</h4>
                <p>
                  <b>Name:</b> {order?.contact?.fullName}
                </p>
                <p>
                  <b>Titel:</b> {order?.contact?.titel}
                </p>
                <p>
                  <b>Email:</b>
                  <a href="mailto:{project.contact?.email}">
                    {" "}
                    {order?.contact?.email}
                  </a>
                </p>
                <p> <b>Phone: </b> {order?.contact?.phoneNumber}</p>
                <div className="orderpart_contentitem"> 
                </div>
                <h4> Contact at Camelonta</h4>
                <p><b>Name: </b> {order?.contactAtCamelonta?.fullname}</p>
                <p><b>Titel:</b> {order?.contactAtCamelonta?.titel}</p>
                <p><b>Email: </b> {order?.contactAtCamelonta?.email}</p>
                <p><b>Phone: </b> <a href="mailto:{order?.contactAtCamelonta?.phonenumber}"> {order?.contactAtCamelonta?.phonenumber}</a></p>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <p> No order selected</p>
      )}
    </div>
  );
};
export default OrderDetail;
