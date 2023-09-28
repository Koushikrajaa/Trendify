// import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Men from "./components/Men"
import Women from "./components/Women"
import Kid from "./components/Kid"
import Sunglass from "./components/Sunglass"
import Watch from "./components/Watch"
import Shoe from "./components/Shoe"
import Men1 from "./components/Men-1"
import Men2 from "./components/Men-2"
import Men3 from "./components/Men-3"
import Men4 from "./components/Men-4"
import Men5 from "./components/Men-5"
import Men6 from "./components/Men-6"
import Men7 from "./components/Men-7"
import Men8 from "./components/Men-8"
import Men9 from "./components/Men-9"
import Men10 from "./components/Men-10"
import Men11 from "./components/Men-11"
import Men12 from "./components/Men-12"
import Women1 from "./components/Women-1"
import Women2 from "./components/Women-2"
import Women3 from "./components/Women-3"
import Women4 from "./components/Women-4"
import Women5 from "./components/Women-5"
import Women6 from "./components/Women-6"
import Women7 from "./components/Women-7"
import Women8 from "./components/Women-8"
import Women9 from "./components/Women-9"
import Women10 from "./components/Women-10"
import Women11 from "./components/Women-11"
import Women12 from "./components/Women-12"
import Kid1 from "./components/Kid-1"
import Kid2 from "./components/Kid-2"
import Kid3 from "./components/Kid-3"
import Kid4 from "./components/Kid-4"
import Kid5 from "./components/Kid-5"
import Kid6 from "./components/Kid-6"
import Kid7 from "./components/Kid-7"
import Kid8 from "./components/Kid-8"
import Sun1 from "./components/Sun-1"
import Sun2 from "./components/Sun-2"
import Sun3 from "./components/Sun-3"
import Sun4 from "./components/Sun-4"
import Watch1 from "./components/Watch-1"
import Watch2 from "./components/Watch-2"
import Watch3 from "./components/Watch-3"
import Watch4 from "./components/Watch-4"
import Shoe1 from "./components/Shoe-1"
import Shoe2 from "./components/Shoe-2"
import Shoe3 from "./components/Shoe-3"
import Shoe4 from "./components/Shoe-4"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/women" element={<Women/>}/>
          <Route path="/kids" element={<Kid/>}/>
          <Route path="/sunglasses" element={<Sunglass/>}/>
          <Route path="/watches" element={<Watch/>}/>
          <Route path="/shoes" element={<Shoe/>}/>
          <Route path="/men-1" element={<Men1/>}/>
          <Route path="/men-2" element={<Men2/>}/>
          <Route path="/men-3" element={<Men3/>}/>
          <Route path="/men-4" element={<Men4/>}/>
          <Route path="/men-5" element={<Men5/>}/>
          <Route path="/men-6" element={<Men6/>}/>
          <Route path="/men-7" element={<Men7/>}/>
          <Route path="/men-8" element={<Men8/>}/>
          <Route path="/men-9" element={<Men9/>}/>
          <Route path="/men-10" element={<Men10/>}/>
          <Route path="/men-11" element={<Men11/>}/>
          <Route path="/men-12" element={<Men12/>}/>
          <Route path="/women-1" element={<Women1/>}/>
          <Route path="/women-2" element={<Women2/>}/>
          <Route path="/women-3" element={<Women3/>}/>
          <Route path="/women-4" element={<Women4/>}/>
          <Route path="/women-5" element={<Women5/>}/>
          <Route path="/women-6" element={<Women6/>}/>
          <Route path="/women-7" element={<Women7/>}/>
          <Route path="/women-8" element={<Women8/>}/>
          <Route path="/women-9" element={<Women9/>}/>
          <Route path="/women-10" element={<Women10/>}/>
          <Route path="/women-11" element={<Women11/>}/>
          <Route path="/women-12" element={<Women12/>}/>
          <Route path="/kid-1" element={<Kid1/>}/>
          <Route path="/kid-2" element={<Kid2/>}/>
          <Route path="/kid-3" element={<Kid3/>}/>
          <Route path="/kid-4" element={<Kid4/>}/>
          <Route path="/kid-5" element={<Kid5/>}/>
          <Route path="/kid-6" element={<Kid6/>}/>
          <Route path="/kid-7" element={<Kid7/>}/>
          <Route path="/kid-8" element={<Kid8/>}/>
          <Route path="/sun-1" element={<Sun1/>}/>
          <Route path="/sun-2" element={<Sun2/>}/>
          <Route path="/sun-3" element={<Sun3/>}/>
          <Route path="/sun-4" element={<Sun4/>}/>
          <Route path="/watch-1" element={<Watch1/>}/>
          <Route path="/watch-2" element={<Watch2/>}/>
          <Route path="/watch-3" element={<Watch3/>}/>
          <Route path="/watch-4" element={<Watch4/>}/>
          <Route path="/shoe-1" element={<Shoe1/>}/>
          <Route path="/shoe-2" element={<Shoe2/>}/>
          <Route path="/shoe-3" element={<Shoe3/>}/>
          <Route path="/shoe-4" element={<Shoe4/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;