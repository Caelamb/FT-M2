export default function SearchBar(props) {
   const {onSearch} = props
   const handleclick = () => {
      onSearch("cualquiera");
   };
   return (
      <div>
          <input type='search' />
      <button onClick={handleclick}>Agregar</button> 
      </div>
   );
}
