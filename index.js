//loads the content once the html page fully loads 
document.addEventListener('DOMContentLoaded', function(e){
    e.preventDefault();
    getCharacters();
})

//function for fetching Data and calls the function for getting character names
function getCharacters(){
    fetch('http://localhost:3000/characters')
    .then(resp => resp.json())
    .then(data => {
        getCharacterNames(data)
    })
};

//function for displaying the character names from the server on to the html
function getCharacterNames(characterName){
    let characterList = document.getElementById('character-list');

    characterName.forEach(characterName =>{
        let nameDiv = document.createElement('div');
        nameDiv.classList ="characterName"
        nameDiv.innerText = `-${characterName.name}`;
        characterList.appendChild(nameDiv);

        //has an event listener for a click event that calls on the funciton that displays character names
        nameDiv.addEventListener('click', () =>{
           fetchCharacterDetails(characterName);
       })
   })
};

//function to display characaterDetails onto the #character-details tag 
function fetchCharacterDetails(character){
    fetch(`http://localhost:3000/characters/${character.id}`)
    .then(resp => resp.json())
    .then(data =>{
        displayCharacterDetails(data)
    })
}

//function to display the details now
function displayCharacterDetails(character){
    let characaterDetails = document.getElementById('character-details');
    characaterDetails.innerHTML = "<p id= 'sentence' >This character is:<p>";

        let displayDivMain = document.createElement('div');
        displayDivMain.classList = 'displayedDetailsMain';

        //displays Character Image
        let displayImage = document.createElement('img');
            displayImage.id = 'displayedImaged'
            displayImage.src = character.image
            displayDivMain.appendChild(displayImage)


        //displays Character name 
        let displayDivName = document.createElement('div');
            displayDivName.classList = 'displayedDetailsChild';
            displayDivName.id = 'displayedDetailsName';
            displayDivName.innerText = `Name: ${character.name}`
            displayDivMain.appendChild(displayDivName);
            console.log(displayDivName);

        
        //displays Character status 
            let displayDivStatus = document.createElement('div');
                displayDivStatus.classList = 'displayedDetailsChild';
                displayDivStatus.id = 'displayedDetailsStatus';
                displayDivStatus.innerText = `Status: ${character.status}`
                displayDivMain.appendChild(displayDivStatus);
            
        //displays Character type 
            let displayDivType = document.createElement('div');
                displayDivType.classList = 'displayedDetailsChild';
                displayDivType.id = 'displayedDetailsType';
                displayDivType.innerText = `Type: ${character.type}`
                displayDivMain.appendChild(displayDivType);  


        //displays Character species 
            let displayDivSpecies = document.createElement('div');
                displayDivSpecies.classList = 'displayedDetailsChild';
                displayDivSpecies.id = 'displayedDetailsSpecies';
                displayDivSpecies.innerText = `Species: ${character.species}`
                displayDivMain.appendChild(displayDivSpecies);  

        //displays Character gender 
            let displayDivGender = document.createElement('div');
                displayDivGender.classList = 'displayedDetailsChild';
                displayDivGender.id = 'displayedDetailsGender';
                displayDivGender.innerText = `Gender: ${character.gender}`
                displayDivMain.appendChild(displayDivGender);

        //displays Character origin 
            let displayDivOrigin = document.createElement('div');
                displayDivOrigin.classList = 'displayedDetailsChild';
                displayDivOrigin.id = 'displayedDetailsOrigin';
                displayDivOrigin.innerText = `Origin: ${character.origin}`
                displayDivMain.appendChild(displayDivOrigin); 

    characaterDetails.appendChild(displayDivMain)
};


//POST FEATURE FOR THE ADD CHARACTER FORM

//globalVariables for addCharacter
let addForm = document.getElementById('add-character'); 
let addFormData = document.getElementsByClassName('inputFormData');
let addButton = document.getElementById('addButton');

//adding a submit event to the form 
addForm.addEventListener('submit', submitForm) 

//fucntion for the submit event 
function submitForm(e) {
    e.preventDefault();

    //obtaining the ID's and values of the inputs on the add character form 
    let nameInput = document.getElementById('name').value
    let statusInput = document.getElementById('status').value
    let speciesInput = document.getElementById('species').value
    let typeInput = document.getElementById('type').value
    let genderInput = document.getElementsByClassName('gender').value
    let originInput = document.getElementById('origin').value
    let urlInput = document.getElementById('imageurl').value

    //putting the values in an object format to enable it to be posted to the server as JSON
    let formData = {
        name: nameInput,
        status: statusInput,
        species: speciesInput ,
        type: typeInput,
        gender: genderInput,
        origin: originInput,
        image: urlInput,
    };

    //ensures that each input field is filled up with valid data
    if(nameInput === ""){
        alert("Ensure you input a valid name in the name field!");
    }else if (statusInput === ""){
        alert("Ensure you input a valid status in the status field!");
    }else if (speciesInput.value === ""){
        alert("Ensure you input a valid species in the species field!");
    }else if (typeInput.value === ""){
        alert("Ensure you input a valid type in the type field!");
    }else if (genderInput.value === ""){
        alert("Ensure you input a valid gender in the gender field!");
    }else if (originInput.value === ""){
        alert("Ensure you input a valid origin in the origin field!");
    }else if (urlInput.value === ""){
        alert("Ensure you input a valid URL in the Image URL field!");
    }
    //once all the requirements are met the data is posted 
    else{
    e.preventDefault();
        fetch('http://localhost:3000/characters', {
            method:'POST',
            headers: {
            'Content-Type' : 'application/json',
                },
            body: JSON.stringify(formData)
            })
        .then(response => response.json())
        .then(data => {
            console.log(data);
     })
}
}
