import React from "react";
import { FetchDataContext } from "../context/dataContext";
import { useContext } from "react";
import { Grid, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";




function Show() {
  const [formValues, setFormValues] = useContext(FetchDataContext);
  const history = useHistory();
  console.log("formValues+++++", formValues);

  const paperStyle = {
    padding: 20,
    height: 800,
    width: 400,
    margin: "20px auto",
  };
  const ss = {
    margin: "5px",
    padding: "50px",
  };
  const handleSubmit=()=>{


    if (localStorage.getItem("auth")) history.push("/");
  }
  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/");
  });


  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid>
        <Paper>
          <h1>Profile data</h1>

          <label style={ss}>Name:{formValues?.firstname}</label>
          <label style={ss}>Email:{formValues?.email}</label>
          <label style={ss}>Phonenumber:{formValues?.phonenumber}</label>
          <label style={ss}>Salary:{formValues?.salary}</label>
          <label style={ss}>Employed:{formValues?.employed}</label>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Dashboard
          </button>
        </Paper>



      </Grid>
    </Paper>
  );
}

export default Show;
