import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

const LoginForm = ({login}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  // Once the user has been authenticated, redirect to the Tweets page
  // cont componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     this.props.history.push('/tweets');
  //   }

  //   // Set or clear errors
  //   this.setState({errors: nextProps.errors})
  // }

  // Handle field updates (called in the render method)
  // update(field) {
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   });
  // }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: email,
      password: password
    };
    login(user); 
  }

  // Render the session errors if there are any
  // renderErrors() {
  //   return(
  //     <ul>
  //       {Object.keys(this.state?.errors).map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {this.state?.errors[error]}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

    return (
      <div>
        <h1>  
          Log In Page
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
              <input type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
            <br/>
            <input type="submit" value="Log In" />
            {/* {this.renderErrors()} */}
          </div>
        </form>
      </div>
    );
}

export default withRouter(LoginForm);