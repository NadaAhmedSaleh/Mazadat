import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Select from 'react-select';
import './HomePageHeader.css'

const HomePageHeader = (props) => {
    const[sortingOptions,setSortingOptions]= useState([{label:"Price",value:"Price"}])
    const[sortingOrder,setSortingOrder]= useState([{label:"Ascending",value:"Ascending"},{label:"Descending",value:"Descending"}])
    

    return (
     <div className="hp-header-main-container">
         <p>13 items</p>
         <div className="sort-by-container">
         <p>Sort By </p>
         <Select options={sortingOptions} className="drop-down-container"/> 
         <Select options={sortingOrder} className="drop-down-container"/> 
         </div>
    
     </div>
    );
};


export default HomePageHeader;

