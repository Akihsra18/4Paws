import PageCat from "./Pages/PageCat";
import PageDog from "./Pages/PageDog";
import CatContent from "./Components/CatContent";
import DogContent from "./Components/DogContent";
import HomePage from "./Components/Home";
import NavBarComponent from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react"
// import { fonctionPromessesCatBreeds } from "./Controller"
// import { fonctionPromessesDogBreeds } from "./Controller"

export default function App() {
  const [catBreeds, setCatBreeds] = useState([]);
  const [dogBreeds, setDogBreeds] = useState([]);

  // useEffect(
  //   () => { 
  //     fonctionPromessesCatBreeds().then(result => setCatBreeds(result));
  //   }
  // ,[]);

  // useEffect(
  //   () => { 
  //     fonctionPromessesDogBreeds().then(result => setDogBreeds(result));
  //   }
  // ,[]);

  useEffect(
    () => { 
      fetch('/cats.json')
      .then((response) => response.json())
      .then((data) => setCatBreeds(data))
      .catch((error) => console.error(error))
    }
  ,[]);

  useEffect(
    () => { 
      fetch('/dogs.json')
      .then((response) => response.json())
      .then((data) => setDogBreeds(data))
      .catch((error) => console.error(error))
    }
  ,[]);

  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cats" element={<CatContent catBreeds = {catBreeds} />} />
        <Route path="/Cats/:catName" element={<PageCat catBreeds={catBreeds} />} />
        <Route path="/Dogs" element={<DogContent dogBreeds = {dogBreeds} />} />
        <Route path="/Dogs/:dogName" element={<PageDog dogBreeds = {dogBreeds} />} />
      </Routes>
    </>
  );
}