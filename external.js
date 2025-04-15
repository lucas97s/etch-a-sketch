/* Create 16x16 grid using flexbox */

const body = document.querySelector("body") ; 
const titleContainer = document.createElement("div") ;
titleContainer.setAttribute("class", "title-container")
titleContainer.textContent = "Lets Etch a Sketch" ; 

const button = document.createElement("button") ; 
button.setAttribute("class","button") ; 
button.textContent = "Change the number of tiles" ; 

const blockContainer = document.createElement("div") ; 
blockContainer.setAttribute("class", "main-block") ; 

body.appendChild(titleContainer) ; 
body.appendChild(button) ; 
body.appendChild(blockContainer) ; 



let numberOfBlockPerSide = 10 ; 
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
});

// Using prompt to get the number of blocks 
button.addEventListener("click", () => {
    numberOfBlockPerSide = prompt("How many number of blocks per side do you want to sketch ?") ; 
    numberOfBlocks = numberOfBlockPerSide*numberOfBlockPerSide ; 
    percentageToSet = ((100)/numberOfBlockPerSide) + "%" ; 

    while (blockContainer.hasChildNodes()) {
        blockContainer.removeChild(blockContainer.firstChild) ; 
    }


    for (let i = 1 ; i <= numberOfBlocks; i++ ){
        let div = document.createElement("div") ; 
        div.setAttribute("class", "block") ;
        blockContainer.appendChild(div) ;
        console.log(i) ; 
    }
    blockElements = document.querySelectorAll(".block") ; 
    console.log(blockElements);

    blockElements.forEach( block => { 
        block.style.width = percentageToSet ; 
        block.style.aspectRatio = "1/1" ; 
    });

    
})



