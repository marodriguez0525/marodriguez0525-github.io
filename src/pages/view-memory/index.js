// import React from "react";
// import "./style.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   dataMemories,
//   meta,
// } from "../../content_option";
// /* 
// WORK IN PROGRESS
// */ 
// export const ViewMemory = () => {
//   return (
//     <HelmetProvider>
//       <Container className="About-header">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title> View Memory | {meta.title}</title>
//           <meta name="description" content={meta.description} />
//         </Helmet>
//         <Row className="mb-5 mt-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4">The Memory</h1>
//           </Col>
//         </Row>
        
//         <div className="mb-5 po_items_ho">
//           {dataMemories.map((data, i) => {
//             return (
//               <div key={i} className="po_item">
//                 <img src={data.img} alt="" />
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </HelmetProvider>
//   );
// };
