function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(res => res.json())
   .then(data =>console.log(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( users => users.json())
    .then(usersData => displayUsers(usersData))
}

function displayUsers(usersData){
    console.log(usersData)
}