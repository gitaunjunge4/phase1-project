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
        nameDiv.innerText = `-${characterName.name}`
        characterList.appendChild(nameDiv)
        nameDiv.addEventListener('click', () =>{
            fetchCharacterDetails(characterName);
            //function for displaying on the #character-details
        })
    })
};

//this is to get character details but to display we need to call the fetch function

//function to display characaterDetails onto the character details on the #character-details tag 
function fetchCharacterDetails(characterName){
    fetch(`http://localhost:3000/characters/${characterName.id}`)
    .then(resp => resp.json())
    .then(data =>{
        displayCharacterDetails(data)
    })
}

//fucntion to display the details now
function displayCharacterDetails(details){
    let characaterDetails = document.getElementById('character-details');

    details.forEach(details => {
        let displayDivMain = document.createElement('div');
        displayDivMain.classList = 'displayedDetailsMain';

        //displays name 
        let displayDivName = document.createElement('div');
            displayDivName.classList = 'displayedDetailsChild';
            displayDivName.id = 'displayedDetailsName';
            displayDivName.inneText = `${details.name}`
            displayDivMain.appendChild(displayDivName);

        //displays status 
        let displayDivStatus = document.createElement('div');
            displayDivStatus.classList = 'displayedDetailsChild';
            displayDivStatus.id = 'displayedDetailsStatus';
            displayDivStatus.inneText = `${details.name}`
            displayDivMain.appendChild(displayDivStatus);
        
        // //displays type 
        // let displayDivChild = document.createElement('div');
        // displayDivChild.classList = 'displayedDetailsChild';
        // displayDivChild.inneText = details.name
        // characaterDetails.appendChild(displayDivChild)  


        // //displays species 
        // let displayDivChild = document.createElement('div');
        // displayDivChild.classList = 'displayedDetailsChild';
        // displayDivChild.inneText = details.name
        // characaterDetails.appendChild(displayDivChild)  

        // //displays gender 
        // let displayDivChild = document.createElement('div');
        // displayDivChild.classList = 'displayedDetailsChild';
        // displayDivChild.inneText = details.name
        // characaterDetails.appendChild(displayDivChild)  

        // //displays origin 
        // let displayDivChild = document.createElement('div');
        // displayDivChild.classList = 'displayedDetailsChild';
        // displayDivChild.inneText = details.name
        // characaterDetails.appendChild(displayDivChild)  

        characaterDetails.appendChild(displayDivMain)

    })
}







