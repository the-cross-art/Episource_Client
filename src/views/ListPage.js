import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Jumbotron,
  NewArrivals,
  BestSellers,
  CategoryList,
  SubcategoryList,
} from "../components";

import { Card, Col, Row } from 'antd';

// import './ListPage.css';



// function ListPage() {
//     const [lists, setlists] = useState("");
  
//     // Similar to componentDidMount and componentDidUpdate:
//     useEffect(() => {
//         axios.get('https://reqres.in/api/users?page=2')
//                 .then(function (response) {
//                     // handle success
//                     setlists(response.data);
//                     console.log(lists);
//                 })
//                 .catch(function (error) {
//                     // handle error
//                     console.log(error);
//                 })
//                 .then(function () {
//                     // always executed
//                 });
//     },[]);

//     return (
//         <div>
//           <p>You clicked  times</p>
          
//         </div>
//       );

// }

function ListPage() {
    const [lists, setlists] = useState("");

    useEffect(() => {
            axios.get('https://reqres.in/api/users?page=2')
        .then(function (response) {
            // handle success
            setlists(response.data.data);
            console.log(response.data.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    },[]);
    return (
        <>
        <div>
        <div className="site-card-wrapper">
        <Row gutter={16}>

        {lists.map((listq) => (
            <Col span={8}>
            <Card title={listq.last_name} bordered={false}>
              {listq.email}
              <p>{listq.first_name}</p>
              {/* <p>{listq.last_name}</p> */}
            </Card>
          </Col>
        ))}

      
    </Row>
  </div>
            
        
        </div>
        </>
    );
 };


export default ListPage;
