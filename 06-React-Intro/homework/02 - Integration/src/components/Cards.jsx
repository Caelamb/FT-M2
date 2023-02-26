import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map((props) => {
            return (
               <Card
                  key={props.id}
                  name={props.name} 
                  species={props.species} 
                  gender={props.gender} 
                  image={props.image} 
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            )
         })}
      </div>
   )
};
