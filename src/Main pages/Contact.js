import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import bg from "../images/s2.jpg";

const Styles = styled.div`

*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "Public Sans", Sans-serif;
}

body{
	height: 100%;
	width: 100%;
}

.Container{
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 100px;
}

.Container:after{
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	
	// top: 0;
	background: url(${bg}) no-repeat center;
	background-size: cover;
	filter: blur(30px);
	z-index: -1;
}
.contact-box{
	max-width: 850px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	align-items: center;
	text-align: center;
	background-color: #fff;
	box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
}

.left{
	background: #fff;
	background-size: cover;
	height: 100%;
}

.left-info {
	text-align: left;
	margin-left: 2rem;
	margin-top: 1.5rem;
    overflow-wrap: break-word;
	inline-size: 420px;
	// border: 1px solid black;
	line-height: 2;
}

.right{
	padding: 25px 40px;
	background-color: #343535;
}

h2{
	position: relative;
	padding: 0 0 10px;
	margin-bottom: 10px;
	color: #fff;
}

h2:after{
	content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: #5ce84f;
}

.field{
	width: 100%;
	border: 2px solid rgba(0, 0, 0, 0);
	outline: none;
	// background-color: rgba(230, 230, 230, 0.6);
	background-color: #fff;
	padding: 0.5rem 1rem;
	font-size: 1.1rem;
	margin-bottom: 22px;
	transition: .3s;
}

.field:hover{
	border: 2px solid #5ce84f;
}

textarea{
	min-height: 150px;
}

.btn{
	width: 100%;
	padding: 0.5rem 1rem;
	background-color: #5ce84f;
	color: #fff;
	font-size: 1.1rem;
	border: none;
	outline: none;
	cursor: pointer;
	transition: .3s;
}

.btn:hover{
    background-color: #27ae60;
}

.field:focus{
    border: 2px solid #5ce84f;
    background-color: #fff;
}

.contact-title {
	font-weight: bold;
	font-size: 24px;
	color: #343535;
	font-family: "Aleo", serif;
}



@media screen and (max-width: 800px){

	.Container{
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px 100px;
	}

	.contact-box{
		grid-template-columns: 1fr;
	}
	.left{
		margin-top: 4rem;
		height: 33rem;
	}

	.right {
		margin-bottom: 1.5rem;
	}

	
}
`;

function Contact() {
  return (
    <div>
      <Header />
      <Styles>
        
        <div class="Container">
		<div class="contact-box">
			<div class="left">
				<div className="left-info">
					<span className="contact-title">Sales/ Marketing/ Business </span>
					<br/>
					<i class="fa-solid fa-phone fa-xl" style={{color: "#5ce84f"}}></i>
					<span style={{fontSize: "19px", marginLeft: "1rem"}}><b>CONTACT</b></span>
					<br/> 
					<b>Dr. Swetha Amit</b> 
					<br/>
					Business Development Head
					<br/>
					<span style={{color: "blue", textDecoration: "underline"}}>swetha.amit@zoshaerospace.in</span>
					<br/>
					<span style={{color: "blue", textDecoration: "underline"}}>marketing@zoshaerospace.in</span>
					<br/>
					<b>843-147-2867</b>
					<br/>
					<br/>
					<i class="fa-solid fa-location-dot fa-xl" style={{color:"#5ce84f"}}></i>
					<b style={{marginLeft:"1rem", fontSize:"19px"}}>LOCATION</b><br/>
					<b>Near Chamudeshwari Bus stop<br/>
					Vidyaranyapura Main Road</b><br/>
					Bangalore 560097<br/>
					<b>080-7969-7175</b><br/>
					Email us at <u style={{color:"blue"}}>info@zoshaerospace.in</u><br/>
					<br/>
				</div>
			</div>
			<div class="right">
			
				<h2>Contact Us</h2>
				<input type="text" class="field" placeholder="Your Name"/>
				<input type="text" class="field" placeholder="Your Email"/>
				<input type="text" class="field" placeholder="Phone"/>
				<textarea placeholder="Message" class="field"></textarea>
				<button class="btn">Send</button>
			</div>
		</div>
		
	</div>
	<Footer /> 
	
      </Styles>
      
    </div>
  );
}

export default Contact;
