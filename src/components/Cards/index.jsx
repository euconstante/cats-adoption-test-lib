import React from 'react'
import { useContext } from "react";
import { PetsContext } from "../Pets";

import Card from '../Card'
import './style.css'




const Cards = () => {
  const { cats } = useContext(PetsContext);

  return (
    <div className="pet-cards-container">
      {cats.map((cat, index) => {
        return (
          <Card
            key={cat.id}
            name={cat.name}
            phone={cat.phone}
            email={cat.email}
            image={cat.image}
            favoured={cat.favoured}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Cards;
