import './App.css';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import firebaseAuth from './Firebase/Firebase.initialize';

const provider = new GoogleAuthProvider();

firebaseAuth();

function App() {
  const clickMe = () =>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
  })
}

  return (
    <div className="App">
      <button onClick={clickMe}>Click me</button>
    </div>
  );
}

export default App;
