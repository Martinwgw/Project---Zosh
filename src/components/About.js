import React, {useState} from 'react'
// import Header from '../components/Header'
import { Button, Modal } from 'react-bootstrap';
import styled from "styled-components";

const Styles = styled.div`
.btn1 {
  font-size: 20px;
  width: 6rem;
  height: auto;
  margin-top: -5px;
  border: 2px solid #5ce84f;
  background: none;
  }

  .btn1:hover {
    background: #5ce84f;
    transition: 0.5s ease;
    color: #000;
  }
`;

const FormStyle = styled.form`
  label {
    padding-bottom: 5px;
  }

  input {
    margin-bottom: 15px;
  }

  button {
    border-radius: 10px;
  }

  .etxt {
    color: blue;
    text-decoration: underline;
  }
`;


const About = () => {
  const [showModal, setModal] = useState(false);
  const handleShow = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <>
    <div>
      <Styles>
      <Button onClick={handleShow} className='btn1'>Join Us</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Careers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormStyle>
        <form>
          <div className='form-group'>
          <label>Name</label>
          <input type='text' className='form-control' placeholder='Enter your name here'></input>
          <label>Email address</label>
          <input type='email' className='form-control' placeholder='Enter your Email here'></input>
          <label>Mobile No.</label>
          <input type='number' className='form-control' placeholder='Mobile'></input>
          <label>Upload your CV</label>
          <input className='form-control' type='file'></input>
          <button type='submit' className='button1'>Submit</button>
          </div>
          <br/>
          <div>
            Or
          </div>
          <br/>
          <div>
            Send your resume to : <span className='etxt'>hr@zoshaerospace.in</span>
          </div>
        </form>
          </FormStyle>  

        </Modal.Body>
      </Modal>
      </Styles>
    </div>
    </>
  );
}

export default About
