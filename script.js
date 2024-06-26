let fruitObjects = [
    {name: "apple", color: "red", shape: "round", emoji: "🍎"},
    {name: "banana", color: "yellow", shape: "curved", emoji: "🍌"},
    {name: "orange", color: "orange", shape: "round", emoji: "🍊"},
    {name: "kiwi", color: "brown", shape: "oval", emoji: "🥝"},
    {name: "mango", color: "yellow", shape: "oval", emoji: "🥭"}
]

function clearCards() {
    let fruitContainer = document.querySelector('#cards');
    while(fruitContainer.firstChild) {
        fruitContainer.removeChild(fruitContainer.firstChild);
    }
}

function runProgram() {
    console.log("Program is running");
    let apple = fruitObjects[0];
    let newFruitCard = document.createElement('div');
    //heading
    let fruitHeading = document.createElement('h3');
    fruitHeading.textContent = apple.name;
    newFruitCard.appendChild(fruitHeading);
    //color 
    let fruitColor = document.createElement('p');
    fruitColor.textContent = `Color: ${apple.color}`;
    fruitColor.style.color = apple.color;
    console.log(fruitColor)
    newFruitCard.appendChild(fruitColor);
    console.log(newFruitCard.childNodes)


    let fruitContainer = document.querySelector('#cards');
    newFruitCard.classList.add('fruitCard');
    fruitContainer.appendChild(newFruitCard);

}

document.addEventListener('DOMContentLoaded', runProgram);
