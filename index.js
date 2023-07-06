//loads the content once the page fully loads 
document.addEventListener('DOMContentLoaded', function(){
    getCharacters();
})

//function for fetching Data
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
        nameDiv.addEventListener('click', () =>{
           fetchCharacterDetails(characterName);
        //function for displaying on the #character-details
       })
   })
};

//this is to get character details but to display we need to call the fetch function

//function to display characaterDetails onto the character details on the #character-details tag 
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
    characaterDetails.innerHTML = "<p>This character is:<p>";


        let displayDivMain = document.createElement('div');
        displayDivMain.classList = 'displayedDetailsMain';
        //displayDivMain.innerHTML = '<p>paragh<p>';

        //displays name 
        let displayDivName = document.createElement('div');
            displayDivName.classList = 'displayedDetailsChild';
            displayDivName.id = 'displayedDetailsName';
            displayDivName.innerText = `${character.name}`
            displayDivMain.appendChild(displayDivName);
            console.log(displayDivName);

        
        //displays status 
            let displayDivStatus = document.createElement('div');
                displayDivStatus.classList = 'displayedDetailsChild';
                displayDivStatus.id = 'displayedDetailsStatus';
                displayDivStatus.innerText = `${character.status}`
                displayDivMain.appendChild(displayDivStatus);
            
        //displays type 
            let displayDivType = document.createElement('div');
                displayDivType.classList = 'displayedDetailsChild';
                displayDivType.id = 'displayedDetailsType';
                displayDivType.innerText = `${character.type}`
                displayDivMain.appendChild(displayDivType);  


        //displays species 
            let displayDivSpecies = document.createElement('div');
                displayDivSpecies.classList = 'displayedDetailsChild';
                displayDivSpecies.id = 'displayedDetailsSpecies';
                displayDivSpecies.innerText = `${character.species}`
                displayDivMain.appendChild(displayDivSpecies);  

        //displays gender 
            let displayDivGender = document.createElement('div');
                displayDivGender.classList = 'displayedDetailsChild';
                displayDivGender.id = 'displayedDetailsGender';
                displayDivGender.innerText = `${character.gender}`
                displayDivMain.appendChild(displayDivGender);

        //displays origin 
            let displayDivOrigin = document.createElement('div');
                displayDivOrigin.classList = 'displayedDetailsChild';
                displayDivOrigin.id = 'displayedDetailsOrigin';
                displayDivOrigin.innerText = `${character.origin}`
                displayDivMain.appendChild(displayDivOrigin); 

    characaterDetails.appendChild(displayDivMain)
    console.log(character)
};









