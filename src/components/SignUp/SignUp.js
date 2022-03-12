import React,{useState} from 'react';
import {Wrapper,Form,InputFormat, Button, Text} from './SignUp.styles';
import RegisteredPopup from '../RegisteredPopup/RegisteredPopup';
import '../../App.css';


import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";


const SignUp=()=> {
  // const [data, setData] = useState({fullName:'',email:''password:'',confirmPassword:'',dob:'',allergies:'',address:'',gender:'',profession:''})
  
    const [registeredModal, setRegisteredModal] = useState({show:false, content: "", heading: '', proceedCTA: false});

    const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    confirmPassword: "",
    showConfirmPassword: false,
  });
  
  // PLAIN PASSWORD
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // CONFIRM PASSWORD
  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };
  
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
  
  const handleConfirmPasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
// SUBMIT HANDLER
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        for (let [key, value] of formData.entries()) {
      if(value && values.password === values.confirmPassword){
        console.log('WELLDONE, YOU MAY PROCEED');
        setRegisteredModal(prevState=> {
          return {...prevState,
            heading:'HURRAY!!!',
            proceedCTA: true,
            content:'Welcome to the team...Path to a healthier life.ABEGGGG!!!!', show:!prevState.show}
        }
          );
        // proceed to next page...
      }
      else if(values.password !== values.confirmPassword){
        console.log('check password');
        // alert to check password matching
        setRegisteredModal(prevState=> {
          return {...prevState,
            proceedCTA: false,
            heading: 'Verify Password', content:'password and confirm password fields do not match.', show:!prevState.show}
        }
          );
        }
      else{
        console.log('FILL IN THE FIELDS');
        // alert to fill fields...
        setRegisteredModal(prevState=> {
          return {...prevState, content:'ALL FIELDS REQUIRED.', show:!prevState.show}
        }
          );
      }
      console.log(value);
    }
    //  setValues(prevValues => ({...prevValues, password: '', confirmPassword:''}))
     
    };

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <Text>
                    <h2>register</h2>
                    <h3> &larr;kindly fill all fields&rarr;</h3>
                </Text>

                <InputFormat>
                <label htmlFor='fullname'>FullName</label>
                <input type='text'name='fullName' id='fullname' required/>
                </InputFormat>

                <InputFormat>
                <label htmlFor='email'>email</label>
                <input type='email' name='email' id='email' required/>
                </InputFormat>

                <InputFormat>
                <label htmlFor='password'>password</label>
                   <Input className='password-input'
        type={values.showPassword ? "text" : "password"}
        required
        onChange={handlePasswordChange("password")}
        value={values.password} 
        endAdornment={
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        }
      />
                </InputFormat>

                 <InputFormat>
                <label htmlFor='confirmPassword'>confirm password</label>
                   <Input className='password-input'
        type={values.showConfirmPassword ? "text" : "password"}
        required
        onChange={handleConfirmPasswordChange("confirmPassword")}
        value={values.confirmPassword}
        endAdornment={
            <IconButton
              onClick={handleClickShowConfirmPassword}
              onMouseDown={handleMouseDownConfirmPassword}
            >
              {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        }
      />
                </InputFormat>

                <InputFormat>
                <label htmlFor='dob'>date of birth</label>
                <input type='date'name='dob' id='dob' required/>
                </InputFormat>

                <InputFormat>
                <label htmlFor='profession'>profession</label>
                <input type='text'name='profession' id='profession' placeholder='current/retired profession' required />
                </InputFormat>

                <InputFormat>
                <label htmlFor='allergies'>food allergies</label>
                <input type='text' name='allergies' id='allergies' placeholder='e.g gluten' required/>
                </InputFormat>
                
                <InputFormat>
                <label htmlFor='address'>address</label>
                <input type='text' name='address' id='address' placeholder='include nearest bus-stop, P.O Box address(if available),LGA and state' required/>
                </InputFormat>

                <h3 className='title'>Gender</h3>
                <InputFormat className='gender'>
                <label htmlFor='male' className='male'>male</label>
                <input type='radio' name='gender' id="male" value="male" required/>
                <div className='male-check'></div>

                <label htmlFor='female' className='female'>female</label>
                 <input type='radio' name='gender' id="female" value="female" required/>
                 <div className='female-check'></div>
                </InputFormat>
                
                <InputFormat>
                <h4>upload profile picture</h4>
                 <input type="file" id="picture" name="profile-image" required/>
                </InputFormat>

                <InputFormat>
                <h4>upload recent medical status if available</h4>
                 <input type="file" id="medical" name="medical-status"/>
                </InputFormat>
                <Button type='submit' className='submit-btn'>
                    submit
                </Button>
            </Form>
            <RegisteredPopup registeredModal={registeredModal} setRegisteredModal={setRegisteredModal}/>
        </Wrapper>
    )
}

export default SignUp;
