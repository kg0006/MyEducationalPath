

window.addEventListener('click', (e) => {
    const id = e.target.id
    if(e.target.dataset.action === 'remove'){
       fetch(`http://localhost:3000/${id}`, {
        method : "DELETE"
       }) 
    }
    
    if(e.target.dataset.action === 'edite'){
        // debugger
        const editeValue = document.getElementById('edite-inp').value 
        
        fetch(`http://localhost:3000/edite/${id}`, {
            method : "PATCH",
            headers : {
                "Content-Type" : 'application/json'
            },
            body : JSON.stringify({value : editeValue})
           }).then((res) => res.json())
           .then((res) => console.log(res))
    }
    
})