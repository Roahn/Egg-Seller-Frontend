import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import Data from './Components/Data';
import { authentication } from './Firebase/firebase';
import AddEggs from './Components/AddEggs'
function App() {
  const [isUserSignedIn, setIsUserSignedIn] = React.useState(false);
  
    var userObj = authentication.currentUser;

  onAuthStateChanged(authentication, (user) => {
    if (user) {
      
      userObj = authentication.currentUser;
      //console.log(userObj);

      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
  });
  if (isUserSignedIn) {
    return (
      <Router>
        <Routes>
          <Route
            path='/'
            exact='true'
            element={<Home title={userObj}></Home>}
          />
        </Routes>
        <Routes>
          <Route
            path='/data'
            exact='true'
            element={<Data></Data>}
          />
        </Routes>
         <Routes>
          <Route
            path='/Buy'
            exact='true'
            element={<AddEggs></AddEggs>}
          />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path='/' exact='true' element={<SignIn />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
