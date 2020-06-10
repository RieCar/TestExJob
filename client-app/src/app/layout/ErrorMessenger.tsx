import React from "react";
import { AxiosResponse } from "axios";

import "./style/errormessage.scss";

interface IProps {
    error: any;
    text?: string;
  }
  
  const ErrorMessage: React.FC<IProps> = ({ error, text }) => {
    console.log("test this", error.error.data);
    return (
      <div className="errorMessage">
        <header>{error.error.statusText}</header>
        {error.error.data && Object.keys(error.error.data.Errors).length > 0 && (
          <ul>
            {Object.values(error.error.data.Errors).flat().map((err, i) => (
              <li key={i}>{err}</li>
              
            ))}
          </ul>
        )}
        {text && <p> {text} </p> }
      </div>
    );
  };

  export default ErrorMessage; 