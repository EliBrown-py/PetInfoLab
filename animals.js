const petsData = [
    {
        petName: "Stella",
        petType: "dog",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        petType: "dog",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        petType: "cat",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        petType: "snake",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        petType: "dog",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];
function showInfo() {
    
    const petNumInput = document.querySelector("#petNum"); // Select the input element by its id
    const petNum = parseInt(petNumInput.value);
    const selectedPetInfo = document.querySelector(".selectedPetInfo");

    if (!isNaN(petNum) && petNum >= 1 && petNum <= petsData.length) {
        const pet = petsData[petNum - 1];
        selectedPetInfo.textContent = `${pet.petName} the ${pet.petType} 
        is ${pet.age} years old. This ${pet.petType} weighs ${pet.weightInKilos} kilos and is a ${pet.breed} breed`;
    } else {
        selectedPetInfo.textContent = "Invalid input. Please enter a valid pet number.";
    }
}

