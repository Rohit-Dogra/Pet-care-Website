document.getElementById('petForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const petName = document.getElementById('petName').value;
    const petType = document.getElementById('petType').value;
    const trainingLevel = document.getElementById('trainingLevel').value;
    
    if (petName && petType && trainingLevel) {
        addPetToList(petName, petType, trainingLevel);
        document.getElementById('petForm').reset();  // Clear form fields
    }
});

function addPetToList(petName, petType, trainingLevel) {
    const petList = document.getElementById('petList');
    const li = document.createElement('li');
    li.innerHTML = `<span>${petName}</span> is a ${petType} with ${trainingLevel} level training.`;
    petList.appendChild(li);
}


