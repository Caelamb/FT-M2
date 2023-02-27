import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
      zooName: '',
      animals: [],
      allAnimals: [],
      species: []
    });

    React.useEffect(() => {
      fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
         setZoo({
            ...zoo,
            animals: data.animals,
            species: data.species,
            allAnimals: data.animals,
         })
      )
      .catch((error) => console.log(error));
    }, []);

    const handleSpecies = (e) => {
      //console.log(e.target.value);
      setZoo({
         ...zoo,
         animals: zoo.allAnimals.filter(
            animal => animal.specie === e.target.value
         )
      })
    };
    const handleAllSpecies = e => {
      setZoo({
         ...zoo,
         animals: zoo.allAnimals
      })
    };


    const handleInputChange = (e) => {
      //const value = e.target.value;
      const {value} = e.target;
      setZoo({
         ...zoo,
         zooName: value,
      })
    }

   return (
      <div>
         <label>Zoo Name:</label>
         <input
            value={zoo.zooName}
            onChange={handleInputChange}
         ></input>
         <h1>{zoo.zooName}</h1>
         <Species
            species={zoo.species}
            handleSpecies={handleSpecies}
            handleAllSpecies={handleAllSpecies}
         />
         <Animals animals={zoo.animals} />
      </div>
   );
}
