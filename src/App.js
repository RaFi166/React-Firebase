import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import firebaseAuth from './Firebase/Firebase.initialize';

const provider = new GoogleAuthProvider();

firebaseAuth();

function App() {

  const clickMe = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const formsubmitHandler = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("password should be up to 6 characters");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

      })
  }

  const catchEmail = (e) => {
    setEmail(e.target.value);

  }
  const catchPassword = (e) => {
    setPassword(e.target.value);
  }

  return (

    <div className="">
      <form className="mx-3 my-3" onSubmit={formsubmitHandler}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onBlur={catchEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onBlur={catchPassword} type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>

        <input type="submit" className="btn btn-primary" value="Register" />

      </form>

      <div>
        <h4>Email is {email}</h4>
        <p>Password is {password}</p>
      </div>
      <div className="text-danger ">
        <p>{error}</p>
      </div>

      <br /><br /><br /><br /><br />

      <div>
        <button onClick={clickMe}>Click me</button>
      </div>
    </div>
  );
}

export default App;
