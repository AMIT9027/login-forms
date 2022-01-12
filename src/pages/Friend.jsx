import React from "react";
import "../App.css";



const Friend = ({ availability, setavailability }) => {
 

  return (
    <>
      <button
        // onClick={() => setavailability("details")}
        className="btn btn-primary"
      >
        Show data
      </button>


      <hr />
      <div className="App">Friend Status {availability}</div> 
    </>
  );
};

export default Friend;
