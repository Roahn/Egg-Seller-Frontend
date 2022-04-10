import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './Home';
import SignIn from './SignIn';
import { authentication } from './Firebase/firebase';
function App() {
  const [isUserSignedIn, setIsUserSignedIn] = React.useState(false);
  onAuthStateChanged(authentication, (user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
    console.log(isUserSignedIn);
  });
   if (isUserSignedIn)
   {
     return (
       <Router>
         <Routes>
           
           <Route path='/' exact='true' element={<Home />} />
           
         </Routes>
       </Router>
     );
   }else
   {
     return (
       <Router>
         <Routes>
           
           <Route path='/' exact='true' element={<SignIn />} />
           
         </Routes>
       </Router>
     )
   }
    
}

export default App;
