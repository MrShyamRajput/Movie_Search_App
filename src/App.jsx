import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MovieCard from "./components/MovieCard";
import { useState,useEffect } from "react";


const App = () => {
  const [allmovieData,setAllMovieData]=useState([]);
  const [searchMovie,setSearchMovie]=useState("Search Movies here....");
  const [loading,setLoading]=useState(false);

  const fetchMovieData=async ()=>{
    try{
      setLoading(true)
      const response=await fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=132415c4`,{
        method: "GET",
        mode: "cors"
    });
      const data=await response.json();

      setAllMovieData(data.Search)
      setLoading(false)
      
    }
    catch(error){
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <Router>
      <Navbar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
      <Routes>
        <Route path="/" element={<MovieCard  allmovieData={allmovieData} loading={loading} />} />
        <Route path="/about" element={<About searchMovie={searchMovie} />} />
      </Routes>
    </Router>
  );
};

export default App;
