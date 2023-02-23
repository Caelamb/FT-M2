import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   // eslint-disable-next-line array-callback-return
   const cards = characters.map((character) => {
      <Card
         key={character.id}
         name={character.name} 
         species={character.species} 
         gender={character.gender} 
         image={character.image} 
      />
   })
   return <div>{cards}</div>;
}
