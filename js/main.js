//select the form

let form = document.getElementById("form");

console.log(form);

//api url
let apiUrl = "https://api.github.com/users";




//select input

let searchValue = document.getElementById("userName");

console.log(searchValue);

//A function to get us all the users from the github api

let getUsers = async (e) => {
    e.preventDefault();

    let user = searchValue.value.split(' ').join('');
    try{
         const response = await fetch(`${apiUrl}/${user}`);
         
         let data = await response.json();

         let displayArea = document.getElementById('users');

         displayArea.innerHTML = `
             
             <img src='${data.avatar_url}' alt='${data.login}'/>
             <h1>${data.login}</h1>
             <h2>${data.type}</h2>
             <a href="${data.html_url}" target="_blank" class="btn btn-primary">View Profile</a>
             
         `
         console.log(data);
    }catch(error){
        console.log(error);
    } 

    console.log(user);
}
//adding an event listener to the form in order to submit the information in the input

form.addEventListener('submit', getUsers);

//a new button
let newButton = document.createElement('button');

newButton.textContent = 'Display all users';

newButton.addEventListener('click', displayAllUsers);

//Appending DOM
document.body.appendChild(newButton);

// GitHub API-users
async function displayAllUsers() {
    try {
        const response = await fetch(`${apiUrl}`);
        
        let data = await response.json();

        let displayArea = document.getElementById('users');

        displayArea.innerHTML = '';
        displayArea.style.display = 'grid';
        displayArea.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
        displayArea.style.columnGap = '20px';


        data.forEach(user => {
            displayArea.innerHTML += `
            
            <img src='${user.avatar_url}' alt='${user.login}'/>
            <h1>${user.login}</h1>
            <h2>${user.type}</h2>
            <a href="${user.html_url}" target="_blank" class="btn btn-primary">View Profile</a>
            
            `;
        });

        console.log(data);
    } catch (error) {
        console.log(error);
    } 
}




