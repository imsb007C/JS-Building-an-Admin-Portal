async function getbooklist(){
    let response = await fetch('http://localhost:3001/listBooks',{
        method : "GET"
    });
    let books = await response.json()
    let body = document.querySelector('body')
    for(let i = 0; i < books.length; i++){
        let label = document.createElement('label')
        label.innerHTML = books[i].title

        let input = document.createElement('input')
        input.value = books[i].quantity

        let button = document.createElement('button')
        button.innerHTML = "save"
        button.addEventListener('click',function(){
            fetch('http://localhost:3001/updateBook',{
                method : "PATCH", 
                headers:{'Content-Type':'application/json'}, 
                body: JSON.stringify({ "id":books[i].id, "quantity": input.value})
            })
        })
        let br = document.createElement('br')

        body.append(label,br)
        label.append(input,button)
    }
}

getbooklist();

// Your Code Here
