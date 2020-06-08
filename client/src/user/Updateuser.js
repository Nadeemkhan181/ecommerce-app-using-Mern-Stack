import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { updateuser, getUser } from "./helper/userapicalls"

const Updateuser = ({ match }) => {
  const {
    user: {  email, role }
  } = isAutheticated();

  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    name: "",
    error : ""
     });

  const {
    name,
    error
      } = values;


      const preload =  userId => {
        getUser(userId).then(data => {
          //console.log(data);
          if (data.error) {
        setValues({ ...values, error: data.error });
          } else {
            setValues({
              ...values,
              name: data.name,
             
            });
          }
        });
      };
 



      useEffect(() => {
        preload(match.param.userId);
      }, []);
    
       

      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
   
  //TODO: work on it
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values,   });

    updateuser(match.param.userId , token. user._id, ).then(
      data => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            error: false 
        });
        }
      }
    );
  };




  
  const errorMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: error ? "" : "none" }}
    >
      <h4>error</h4>
    </div>
  );


  

  

  const createProductForm = () => (
    <form>
     
          <div className="form-group">
        <p className="lead">Enter Email</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange("name")}
          value={email}
          required
          placeholder={email}
         disabled/></div>
      <div className="form-group">
        <p className="lead">Enter  name</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange("name")}
          value={name}
          required
          placeholder="Enter name"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
Update user        </button>
      </div>
    </form>
  );

  return (
    <Base
      title="Add a product here!"
      description="Welcome to product creation section"
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {createProductForm()}
          {errorMessage()}
        </div>
      </div>
    </Base>
  );
};

export default Updateuser;
