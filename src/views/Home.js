import React from "react";
import {
  Jumbotron,
  NewArrivals,
  BestSellers,
  CategoryList,
  SubcategoryList,
} from "../components";
import ListPage from './ListPage';

const Home = () => {
  return (
    <>
     <h1>
       <ListPage />
            </h1>
    </>
  );
};

export default Home;
