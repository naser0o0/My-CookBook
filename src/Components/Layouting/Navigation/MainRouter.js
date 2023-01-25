import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Body/Home";
import AlleRezepte from "../../Body/AlleRezepte";
import Surprise from "../../Body/Surprise";
import About from "../../Body/About";
import Contact from "../../Body/Contact";
import NavigationLinks from "./NavigationLinks";
import NotFound from "./Error";
import "./Navigation.css";
import RecipePage from '../../Body/recipes/RecipePage';
import LoginForm from '../../Login/LoginForm'




export default function MainRouter() {
    const [recipeList, setRecipeList] = useState();


  return (
    <div>
      <div className='links'>
        <hr />
        <NavigationLinks />
        <hr />
      </div>
      <div className='navigation-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/alle-rezepte' element={<AlleRezepte setRecipeList={setRecipeList}/>} />
          <Route path="/alle-rezepte/:id" element={<RecipePage recipeList={recipeList} />} />
          <Route path='/surprise' element={<Surprise />} />
          <Route path='/About' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LoginForm/>} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );

}
