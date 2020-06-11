import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../app/models/store";

import "../../app/layout/style/order.scss";

const OrderDetail: React.FC = () => {

  const order = useSelector((store: IStore) => store.currentOrder);

  const orderTitel = useSelector(
    (store: IStore) => store.currentOrder?.titel
  );

  console.log("currentOrder detail",  order);


  return (
    <div className="orderview">
      <h2>Selected Order</h2>
      {order && orderTitel ? ( 
         <Fragment>
          <div className="order">
            <h3> {order?.titel}</h3>
            <div className="orderpart_main">
              <p> Day of start: {order?.startDate}</p>
              <p> Day of end: {order?.endDate}</p>
              <p>Estimated cost: {order?.estimatedCost} </p>
              <h4> Description</h4>
              <p>{order?.description}</p>
            </div>
            <div className="orderpart_aside">
              <p> Status: {order?.status}</p>
              <p> Total days of project: {order?.totalOrderDays}</p>
              <h4>Kontakt</h4>
              <p>Name: {order?.contact?.fullName}</p>
              <p>Titel: {order?.contact?.titel}</p>
              <p>
                Email:{" "}
                <a href="mailto:{project.contact?.email}">
                  {" "}
                  {order?.contact?.email}
                </a>
              </p>
              <p>Phone: {order?.contact?.phoneNumber}</p>
              <h4> Contact at Camelonta</h4>
              <p>Name: {order?.contactAtCamelonta?.fullname}</p>
              <p>Titel: {order?.contactAtCamelonta?.titel}</p>
              <p>Email: {order?.contactAtCamelonta?.email}</p>
              <p>Phone: {order?.contactAtCamelonta?.phonenumber}</p>
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
