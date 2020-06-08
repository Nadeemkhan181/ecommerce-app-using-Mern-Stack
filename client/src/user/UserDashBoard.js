import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getallorders } from "../core/helper/orderHelper";

const UserDashBoard = () => {


const {user : {name, _id}} = isAutheticated();





  return (
    <Base title="" description="">
      <center>
      <h1>Hi, {name} <br></br><br></br>Wecome To Mycart</h1>
      <br></br>
      <Link to="/">
      Continue Your Shopping 
      
      </Link>
      <Link to={`/user/myorder/${_id}`}>
      myorders
      
      </Link>
      </center>
    </Base>
  );
};

export default UserDashBoard;
