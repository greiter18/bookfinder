import React, {useState , useEffect} from 'react';
import { withRouter } from 'react-router-dom';

const SignupForm =({signup , errors}) => {
  const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email,
      username,
      password,
    };
    debugger
    signup(user); //prop being passed
  }

  const renderErrors = () => {
    return(
      <ul>
        {Object?.keys(errors)?.map((error, i) => (
          <li key={`error-${i}`}>
            {errors[error]}
          </li>
        ))}
      </ul>
    );
  }

    return (
      <div className="sessionbackground">
        <div className="sessionMain">
        <h1>
          Sign Up Page
        </h1>
         <form onSubmit={handleSubmit} className="sessionform">
          <div className="sessioninputs">
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
            <input type="submit" value="Sign Up" />
            {renderErrors()}
          </div>
        </form> 
        </div> 
      </div>
    );
}

export default withRouter(SignupForm);