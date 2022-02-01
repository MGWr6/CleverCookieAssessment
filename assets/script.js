// First, tell us your name
let yourName = "Mason Wagoner" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let body = document.querySelector('body')

let gbQuantity = 0 // Gingerbread
let ccQuantity = 0 // Chocolate Chip
let sugarQuantity = 0 // Sugar Sprinkle
let totalQuantity = gbQuantity + ccQuantity + sugarQuantity 

//change total quantity
let cookieQuantity = document.createElement('div')
cookieQuantity.setAttribute('id', 'qty-total')
cookieQuantity.textContent = totalQuantity


//change quantity of gingerbread cookies displayed
function changeQuantity(displayQuantity){
    let gbQuantity = document.querySelector('qty-gb')
    gbQuantity.textContent = displayQuantity
}
// Event listener for clicks on the "+" button for Gingerbread cookies
// selecting the element with an id of add-gb
gbPlusBtn = document.getElementbyId('add-gb')
gbPlusBtn.addEventListener('click', function(){
    gbQuantity = gbQuantity + 1
    totalQuantity = totalQuantity + 1
    console.log('Gingerbread + button was clicked!')
})



//change quantity of chocolote chip cookies displayed
function changeQuantity(displayQuantity){
    let ccQuantity = document.querySelector('qty-cc')
    ccQuantity.textContent = displayQuantity
}
//change quantity of sugar cookies displayed
function changeQuantity(displayQuantity){
    let sugarQuantity = document.querySelector('qty-sugar')
    sugarQuantity.textContent = displayQuantity
}
//change quantity of total cookies displayed
function changeQuantity(displayQuantity){
    let totalQuantity = document.querySelector('qty-total')
    totalQuantity.textContent = displayQuantity
}
//selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector('#add-cc')
//selecting the element with an id of minus-cc
const ccMinusBtn = document.querySelector('#minus-cc')

//selecting the element with an id of add-sugar
const sugPlusBtn = document.querySelector('#add-sugar')
//selecting the element with an id of minus-sugar
const sugMinusBtn = document.querySelector('#minus-sugar')



// Code to update name display
credit.textContent = `Created by ${yourName}`




//Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function(){
    console.log('Gingerbread - button was clicked!')
})


// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function(){
    console.log('Chocolate Chip + button was clicked!')
})
//Event listener for clicks on the "-" button for Chocolate Chip cookies
ccMinusBtn.addEventListener('click', function(){
    console.log('Chocolate Chip - button was clicked!')
})


// Event listener for clicks on the "+" button for Sugar cookies
sugPlusBtn.addEventListener('click', function(){
    console.log('Sugar + button was clicked!')
})
//Event listener for clicks on the "-" button for Sugar cookies
sugMinusBtn.addEventListener('click', function(){
    console.log('Sugar - button was clicked!')
})

// selecting the element with an id of credit
const credit = document.querySelector('#credit')