import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './Components/Home';
import AdminLog from './Admin/AdminLog'
import SignIn from './Components/SignIn';
import Data from './Components/Data';
import { authentication } from './Firebase/firebase';
import AddEggs from './Components/AddEggs';
function App() {
  const [isUserSignedIn, setIsUserSignedIn] = React.useState(false);

  var userObj = authentication.currentUser;

  onAuthStateChanged(authentication, (user) => {
    if (user) {
      userObj = authentication.currentUser;
      console.log(userObj.uid);

      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
  });

  if (isUserSignedIn && userObj.uid == 'JRPrue7eVEU2EC1XZDNhleie6fN2') {
    return (
      <Router>
        <Routes>
          <Route
            path='/'
            exact='true'
            element={<AdminLog title={userObj}></AdminLog>}
          />
        </Routes>
       
      </Router>
    );
  } else if (isUserSignedIn) {
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
          <Route path='/data' exact='true' element={<Data></Data>} />
        </Routes>
        <Routes>
          <Route path='/Buy' exact='true' element={<AddEggs></AddEggs>} />
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
