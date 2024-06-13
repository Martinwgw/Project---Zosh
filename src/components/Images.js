// import img1 from "../images/v1.jpg";
// import img2 from "../images/v2.jpg";
// import img3 from "../images/a1.jpg";
// import img4 from "../images/a3.jpg";
// import styled from "styled-components";
// import { Carousel } from "react-bootstrap";
// import { motion } from "framer-motion";
// import { React, useRef, useEffect, useState } from "react";

// const Styles = styled.div`

// .item {
//     min-height: 30rem;
//     min-width: 30rem;
//     padding: 40px;
//   }

//   .item img {
//     width: 100%;
//     height: 100%;
//     border-radius: 1rem;
//     pointer-events: none;
//   }

//   .inner-carousel {
//     display: flex;
//     background-color: grey;
//   }

//   .carousel {
//     cursor: grab;
//     overflow: hidden;
//     background-color: lightblue;
    
//   }
// `;

// function Images() {
//     const [width, setWidth] = useState(0);
//     const carousel = useRef();
  
//     useEffect(() => {
//       setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//     }, []);

//   return (
//     <>
//       <Styles>
//         <motion.div ref={carousel} className="carousel">
//           <motion.div
//             drag="x"
//             dragConstraints={{ right: 0, left: -width }}
//             className="inner-carousel"
//           >
//               <img src={img1} alt="" />
//               <img src={img2} alt="" />
//               <img src={img3} alt="" />
//               <img src={img4} alt="" />
            
//           </motion.div>
//         </motion.div>
//       </Styles>
//     </>
//   );
// }

// export default Images;
