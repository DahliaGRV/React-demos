import React from 'react';
import Card from './Card';

const pets = [{
  name: 'Spot',
  description: 'The best boy',
  id: 1,
},{
  name: 'Puppy',
  description: 'Great Dane with a heart of gold',
  id: 2,
},{
  name: 'Cocoa',
  description: 'very rambunctious',
  id: 3,
},{
  name: 'Bette Midler',
  description: 'Not a  cat',
  id: 4,
}];

export default function Display() {
  return (
    <div>
      {pets.map(pet => <Card key={pet.id} name={pet.name} description= {pet.descirption} id={pet.id}/>)}
    </div>
  );
}
