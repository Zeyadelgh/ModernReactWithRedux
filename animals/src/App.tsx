import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {
  const [animals, setAnimals] = useState<string[]>([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  console.log('hello');
  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}
