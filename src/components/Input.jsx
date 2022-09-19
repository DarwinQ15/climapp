import React from "react";
import { useState } from "react";


const Input = ({location, setLocation,searchLocation}) => {

    const getlocation = (event) =>{
        setLocation(event.target.value)
    }

    
  return (
    <div className="search">
      <input
        value={location}
        onChange={getlocation}
        onKeyPress={searchLocation}
        placeholder="Enter Location 🔎"
        type="text"
      />

    </div>
  );
};

export default Input;