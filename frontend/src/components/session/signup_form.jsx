import React, {useState , useEffect} from 'react';
import { withRouter } from 'react-router-dom';

const SignupForm =({signup , errors}) => {
  const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	

  // useEffect(() => {
  //   console.log('email', email)
  //   // console.log('username',username)
  //   // console.log('password',password)
  //   console.log('effect is working')
  //   },[])// checking if the dependency / state changes - or whatever has changed

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push('/login');
  //   }
  //   this.setState({errors: nextProps.errors})
  // }

  // const update = (field) => {
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email,
      username,
      password,
    };
    debugger
    signup(user); 
  }

  // const renderErrors = () => {
  //   return(
  //     <ul>
  //       {Object?.keys(errors)?.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {errors[error]}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

    return (
      <div className="signup-form-container">
        <h1>
          Sign Up Page
        </h1>
         <form onSubmit={handleSubmit}>
          <div className="signup-form">
            <br/>
              <input type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
              />
            <br/>
              <input type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
            <br/>
            <br/>
            <input type="submit" value="Sign Up" />
            {/* {renderErrors()} */}
          </div>
        </form>  
      </div>
    );
}

export default withRouter(SignupForm);