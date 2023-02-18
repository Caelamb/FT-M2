//hacer un get para el bottom
document.addEventListener("DOMContentLoaded", function() {
    const [boton] = $("#boton");
    const url = "http://localhost:5000/amigos"
    
    const listfriends = (response)=>{
      const [lista] = $("#lista");
      response.forEach(friend => {
        const newLi = document.createElement("Li");
        newLi.innerHTML = friend.name;
        lista.appendChild(newLi);
      });
    };
    
    const showfriends = () => {
        $.get(url, listfriends);
     };
      
    
    boton.addEventListener("click", showfriends);
  });
  console.log(boton);





