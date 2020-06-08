import React, {useState} from 'react'
import Base from '../core/Base';
import { resetpass } from '../auth/helper';

   const Reset= () => {

        const [values, setValues] = useState({
        
          password : "",

    
          success: false
        });
      
        const { password, success } = values;
      
        const handleChange = password => event => {
          setValues({ ...values, [password]: event.target.value });
        };
      
        const onSubmit = event => {
          event.preventDefault();
          setValues({ ...values });
          resetpass({ password })
            .then(data => {
              if (!data) {
                setValues({ ...values,  success: false });
              } else {
                setValues({
                  ...values,
                    password: data.password,
                  
                  success: true
                });
              }
            })
            .catch(console.log("Error in signup"));
        };

        if(success === true){
            alert("Password Reset Successfully")
        }
      
        const ResetForm = () => {
          return (
            <div className="row bg-white" >
              
              <div className="col-md-4 offset-sm-4 ">
                <form>
                  <div className=" form-group" >
                    <input
                      className="form-input form-control"
                      onChange={handleChange("password")}
                      type="password"
                      value={password}
                      placeholder="password"
      
                    />
                  </div>
                  <br></br>
                 
            
                  <br></br>
               
                  <button onClick={onSubmit} className="col-md-4 offset-sm-4 sinbtn btn btn-success round btn-block">
                   Reset
                  </button>
                </form>
              </div>
            </div>
          );
        };
      




      return (
        <Base title="Enter New Password" className="bg-white "  >
        
        {ResetForm()}
      </Base>
      )
  }
  
  
  export default Reset;