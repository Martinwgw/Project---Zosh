import React from 'react'
import Slider1 from '../components/Slider1'
import Header from "../components/Header";
import Footer from "../components/Footer";

function News1() {
  return (
    <>
    <Header/>
    <div style={{backgroundColor: "lightgrey"}}>
      <Slider1 />
    </div>
    <Footer/>
    </>
  )
}

export default News1
