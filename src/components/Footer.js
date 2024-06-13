import React from 'react'
import styled from "styled-components";
import { FaRegCopyright } from "react-icons/fa";

const Styles = styled.div`
.footer {
    margin-top: 5rem;
    padding-top: 10px;
    text-align: center;
    width: 100%;
    height: 3rem;
    background-color: #343535;
    // border-top: 2px solid black;
    position: fixed;
    bottom: 0;
    z-index: 5;
}

.txt {
  font-size: 18px;
  font-family: Times New Roman;
  // font-weight: bold;
  color: #fff;
}
`;

function Footer() {
  return (
    <>
    <Styles>
    <div className='footer'>
      <div className='txt'>Copyright <span>
      <FaRegCopyright />
        </span> 2023 Zosh Aerospace - All Rights Reserved</div>
    </div>
    </Styles>
    </>
  );
}

export default Footer
