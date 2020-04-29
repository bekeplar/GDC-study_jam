import React, { useState, useEffect } from 'react';
import './App.css';

import firebase from 'firebase';
import './config.js';

// firebase.initializeApp();

const App = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ imageUrl, setImageUrl ] = useState('');

  useEffect(() => {
     login();
     return () => {
      // cleanup
    };
  }, []);

  const login = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.firestore().doc(`users/${email}`).set({ email, registered: Date.now().toString() }).then((res) => {
        console.log('response from db', res);
      });
      // console.log('sign up response', signup);
    } catch (error) {
      console.log('Error occured', error);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    const google = new firebase.auth.GoogleAuthProvider();
    await firebase
      .auth()
      .signInWithPopup(google)
      .then((response) => {
        setLoading(false);
        setImageUrl(response.user.photoURL);
        console.log('PROFILE', response.user.photoURL);
      })
      .catch((error) => console.log('error happened', error));
  };

  const loginWithFacebook = async () => {
    const facebook = new firebase.auth.FacebookAuthProvider();
  await firebase
     .auth()
     .signInWithPopup(facebook)
     .then((response) => {
       setLoading(false);
       setImageUrl(response.user.photoURL);
       console.log('PROFILE', response.user.photoURL);
     })
     .catch((error) => console.log('error happened', error));
  };
  


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
      }}
    >
      {loading && <h3>Loading, please, wait</h3>}
      <div>{imageUrl && <img src={imageUrl} alt="profile-pic" />}</div>
      <div style={{ display: 'flex' }}>
        <input
          style={{ width: '200px', height: '50px' }}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ width: '200px', height: '50px' }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>SignUp</button>
      </div>
      <div>
        <button
          onClick={loginWithGoogle}
          style={{ backgroundColor: 'blue', color: 'white', width: '200px', height: '50px', fontSize: '20px' }}
        >
          Login with google
        </button>
      </div>
      <div>
        <button
          onClick={loginWithFacebook}
          style={{ backgroundColor: 'blue', color: 'white', width: '200px', height: '50px', fontSize: '20px' }}
        >
          Login with Facebook
        </button>
      </div>
    </div>
  );
}

export default App;
