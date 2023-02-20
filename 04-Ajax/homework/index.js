//hacer un get para el bottom

    const [boton] = $("#boton");
    const url = "http://localhost:5000/amigos"
    const [search] = $("#search");
    const [deletebuttom] = $("#delete");
    const [lista] = $("#lista");
    
    
    
    const listfriends = (response)=>{
      lista.innerHTML = "";
      response.forEach(friend => {
        const newLi = document.createElement("Li");
        newLi.innerHTML = `${friend.id} - ${friend.name}`;
        lista.appendChild(newLi);
      });
    };
    
    const showfriends = () => {
      $.get(url, listfriends);
    };
    
    const searchfriend = () => {
       const [input] = $("#input");
      const id = input.value;
      input.value = "";

      $.get(`${url}/${id}`, (response) => {
        const [amigo] = $("#amigo")
        amigo.innerText = response.name
      })
     };

     const deleteclean = () => {
      const [inputDelete] = $("#inputDelete");
      const id = inputDelete.value
      $.ajax({
        url:`${url}/${id}`,
        type: "DELETE",
        success: (response) => listfriends(response)
      })
     }
    
    boton.addEventListener("click", showfriends);
    search.addEventListener("click", searchfriend);
    deletebuttom.addEventListener("click", deleteclean)





