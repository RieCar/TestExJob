import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../app/models/store";

import "../../app/layout/style/contract.scss";

const Contract: React.FC = () => {
  const contract = useSelector((store: IStore) => store.currentContract);
  const contractTitel = useSelector((store: IStore) => store.currentContract?.titel);
  const [isHidden, setisHidden] = useState(false);
  function handleOnToggle(event: any) {
    event.preventDefault();

    var doc = document.getElementById("contract");
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
    <div className="contractview">
      <h2 onClick={handleOnToggle}>Selected Contract</h2>
      {contract && contractTitel ? (
        <div id="contract" className="contract">
          <h3> {contract.titel}</h3>
          <p> {contract.description}</p>

          <object
            data={contract.fileUrl}
            type="application/pdf"
            width="100%"
            height="500px"
          >
            <iframe src={contract.fileUrl} width="100%" height="500px">
              <p>
                Your browser does not support PDFs.
                <a href={contract.fileUrl}>Download the PDF</a>.
              </p>
            </iframe>
          </object>
        </div>
      ) : (
        <p> No selected contract to show</p>
      )}
    </div>
  );
};

export default Contract;
