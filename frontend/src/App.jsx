import { useEffect } from 'react'

import './App.css'
import axios from "axios";
import Hero from "./components/hero/Hero";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Project from './components/project/Project';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8000/api/users");
    console.log(response.data.users)
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className='container'>
      <section id="#home"><Hero /></section>
      <section id="#about"><About /></section>

      <section id="#project"><Project /></section>
      <section id="#contact"><Contact /></section>
      
    </div>
  )
}

export default App
