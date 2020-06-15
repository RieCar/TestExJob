import React from "react";
import { IStore } from "../../app/models/store";
import { useSelector } from "react-redux";

const Message: React.FC = () => {
  const currentmessage = useSelector(
    (store: IStore) => store.currentOrg?.message
  );

  return (
    <div className="message">
            <h3>Message</h3>
            <div className="message-box">  
      {currentmessage ? (
        <div className="message-box_hascontent">
      
          <div>{currentmessage}</div>
        </div>
      ) : (
        <div className="message-box_nocontent">
          <text>No current message to show</text>
        </div>
      )}
      </div>
    </div>
  );
};

export default Message;
