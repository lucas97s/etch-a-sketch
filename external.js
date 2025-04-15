/* Create 16x16 grid using flexbox */

const body = document.querySelector("body") ; 
const titleContainer = document.createElement("div") ;
titleContainer.setAttribute("class", "title-container")
titleContainer.textContent = "Lets Etch a Sketch" ; 

const button = document.createElement("button") ; 
button.setAttribute("class","button") ; 
button.textContent = "Choose Number of Sides Here !" ; 

const blockContainer = document.createElement("div") ; 
blockContainer.setAttribute("class", "main-block") ; 

body.appendChild(titleContainer) ; 
body.appendChild(button) ; 
body.appendChild(blockContainer) ; 

function getRandominRange (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min ; 
}



let numberOfBlockPerSide = 16 ; 
let numberOfBlocks = numberOfBlockPerSide*numberOfBlockPerSide ; 
let percentageToSet = ((100)/numberOfBlockPerSide) + "%" ; 
console.log(percentageToSet) ; 

for (let i = 1 ; i <= numberOfBlocks; i++ ){
    let div = document.createElement("div") ; 
    div.setAttribute("class", "block") ;
    blockContainer.appendChild(div) ;
    console.log(i) ; 
}

//Using query selector to change CSS element as per the number of Sides

let blockElements = document.querySelectorAll(".block") ; 

blockElements.forEach( block => { 
    block.style.width = percentageToSet ; 
    block.style.aspectRatio = "1/1" ; 
    block.addEventListener("mouseenter", () => {
    
        let opacity = parseFloat(window.getComputedStyle(block).opacity) ;
        let redValue = getRandominRange(1,256); 
        let greenValue = getRandominRange(1,256);
        let blueValue = getRandominRange(1,256);
        
        console.log(opacity); 
        if (opacity>1) {
            opacity = 1 ; 
        } else if (opacity>= 0 && opacity <= 1) {
            opacity += 0.1 ; 
        }

        block.style.opacity = opacity ; 
        block.style.backgroundColor = `rgb(${redValue},${greenValue}, ${blueValue})`;

    })
});

// Using prompt to get the number of blocks 
button.addEventListener("click", () => {
    numberOfBlockPerSide = parseInt(prompt("How many number of blocks per side do you want to sketch ?") ); 

    if (numberOfBlockPerSide <= 0 ) {
        numberOfBlockPerSide = 16 ; 
    } else if ( numberOfBlockPerSide > 100 ) {
        numberOfBlockPerSide = 100 ; 
    };
  
    numberOfBlocks = numberOfBlockPerSide*numberOfBlockPerSide ; 
    percentageToSet = ((100)/numberOfBlockPerSide) + "%" ; 

    while (blockContainer.hasChildNodes()) {
        blockContainer.removeChild(blockContainer.firstChild) ; 
    };


    for (let i = 1 ; i <= numberOfBlocks; i++ ){
        let div = document.createElement("div") ; 
        div.setAttribute("class", "block") ;
        blockContainer.appendChild(div) ;
        console.log(i) ; 
    };
    blockElements = document.querySelectorAll(".block") ; 
    console.log(blockElements);

    blockElements.forEach( block => { 
        block.style.width = percentageToSet ; 
        block.style.aspectRatio = "1/1" ; 
        block.addEventListener("mouseenter", () => {

            let opacity = parseFloat(window.getComputedStyle(block).opacity) ;
            let redValue = getRandominRange(1,256); 
            let greenValue = getRandominRange(1,256);
            let blueValue = getRandominRange(1,256);
            
            console.log(opacity); 
            if (opacity>1) {
                opacity = 1 ; 
            } else if (opacity>= 0 && opacity <= 1) {
                opacity += 0.1 ; 
            }
    
            block.style.opacity = opacity ; 
            block.style.backgroundColor = `rgb(${redValue},${greenValue}, ${blueValue})`;
        })

    });
})

// Using mouse click to change colours of the blocks 

console.log(blockElements); 







