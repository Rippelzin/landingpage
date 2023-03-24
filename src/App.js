import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Sobre from './pages/Sobre';
import React, { useState, useMemo } from "react";
import { UserContext } from "./utils/UserContext";

function App() {
 
  const [logado, setLogado] = useState(false);

  const value = useMemo(() => ({ logado, setLogado }), [logado, setLogado]);

  

  return (
    <div className="App">
      
      <Router>
          <UserContext.Provider value={value}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/sign-in" element={<SignIn/>}/>
              <Route path="/sign-up" element={<SignUp/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/sobre" element={<Sobre/>}/>

              {/*<Route path='/services' component={Services} />
              <Route path='/products' component={Products} />
      <Route path='/sign-up' component={SignUp} />*/}
            </Routes>
            </UserContext.Provider>
      </Router>
      
      
    </div>
  );
}

export default App;
