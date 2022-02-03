// First, tell us your name
var yourName = "Mason Wagoner" // HINT: Replace this with your own name!

let body = document.querySelector('body')

// We'll use these variables to track the counts of each cookie type
var gb = 0 // Gingerbread
var cc = 0 // Chocolate Chip
var sugar = 0 // Sugar Sprinkle
var orderTotal = 0 // Total cookies


// Code to update name display
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`


// Button functionality
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Quantity displayed in Order Summary
var gbQty = document.querySelector('#qty-gb')
var ccQty = document.querySelector('#qty-cc')
var sugarQty = document.querySelector('#qty-sugar')
var quantityTotal = document.querySelector('#qty-total')


// Gingerbread plus button
gbPlusBtn.addEventListener('click', function() {
    gb++                                        // Each click of the gbPlusBtn will increase count by 1
    gbQty.textContent = gb 
    orderTotal++                                // Each click of the gbPlusBtn will increase the order total by 1
    quantityTotal.textContent = orderTotal 
})
// Gingerbread minus button
gbMinusBtn.addEventListener('click', function() {
    if (gb > 0) {                               // As long as gb cookies are > 0, you can subtract the count by 1 for each button click
    gb-- }                              
    gbQty.textContent = gb
    if (gb > 0) {                               // As long as gb cookies are > 0, the order total will subtract by 1 for each button click
        orderTotal-- }                  
        else (gb = 0)                           // If the gb cookie count is 0, the order total will reflect the total of all three cookies.
        orderTotal = gb + cc + sugar            // I wrote this to eliminate the issue of when gb cookies reached "0" and there were other cookies in the order summary,
    quantityTotal.textContent = orderTotal      // clicking the gbMinusBtn would still remove 1 cookie from the total each time it was clicked. I'm sure this is not the best way to do it but it works ¯\_(ツ)_/¯
})


// Chocolate Chip plus button
ccPlusBtn.addEventListener('click', function() {
    cc++
    ccQty.textContent = cc
    orderTotal++
    quantityTotal.textContent = orderTotal 
})
//Chocolate Chip minus button
ccMinusBtn.addEventListener('click', function() {
    if (cc > 0) {
        cc-- }
    ccQty.textContent = cc
    if (cc > 0) {
        orderTotal-- } 
        else (cc = 0)
        orderTotal = gb + cc + sugar 
    quantityTotal.textContent = orderTotal 
})


//Sugar cookie plus button
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    sugarQty.textContent = sugar
    orderTotal++
    quantityTotal.textContent = orderTotal 
})
//Sugar cookie minus button
sugarMinusBtn.addEventListener('click', function(){
    if (sugar > 0) {
        sugar-- }
    sugarQty.textContent = sugar
    if (sugar > 0) {
        orderTotal-- } 
        else (sugar = 0)
        orderTotal = gb + cc + sugar 
    quantityTotal.textContent = orderTotal
})