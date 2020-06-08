  import React, {useState} from 'react'
import Base from '../core/Base';
import { forgetpass } from '../auth/helper';

   const Forget = () => {

        const [values, setValues] = useState({
        
          email: "",
          error: "",
          success: false
        });
      
        const { email, error, success } = values;
      
        const handleChange = name => event => {
          setValues({ ...values, error: false, [name]: event.target.value });
        };
      
        const onSubmit = event => {
          event.preventDefault();
          setValues({ ...values, error: false });
          forgetpass({ email})
            .then(data => {
              if (data.error) {
                setValues({ ...values, error: data.error, success: false });
              } else {
                setValues({
                  ...values,
                
                  email: data.email,
    
                  error: "",
                  success: true
                });
              }
            })
            .catch(console.log("Error in signup"));
        };

        if(success === true){
          alert("Check Your Email For Password Reset Link")
        }
      
        const signUpForm = () => {
          return (
            <div className="row bg-white" >
              
              <div className="col-md-4 offset-sm-4 ">
                <form>
                  <div className=" form-group" >
                    <input
                      className="form-input form-control"
                      onChange={handleChange("email")}
                      type="text"
                      value={email}
                      placeholder="email"
      
                    />
                  </div>
                  <br></br>
               
                  <button onClick={onSubmit} className="col-md-4 offset-sm-4 sinbtn btn btn-success round btn-block">
                   Signup
                  </button>
                </form>
              </div>
            </div>
          );
        };
      




      return (
        <Base title="Forget Password" className="bg-white "  >
        
        {signUpForm()}
      </Base>
      )
  }
  
  
  export default Forget;