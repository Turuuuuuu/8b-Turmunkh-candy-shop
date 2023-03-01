var Subtoatal , gummyBear, harshey, skittles, chip, budget, displayTotalItem, clearButton, checkOutButton

Subtotal = 0
gummyBear = document.getElementById('gummyBear')
harshey = document.getElementById('Harshey')
skittles = document.getElementById('skittles')
budget = document.getElementById('budget')
displayTotalItem = document.getElementById('totalItem')
clearButton = document.getElementById('clearCart')

clearButton.onclick = () => {
    location.reload()
}
var D, hours, minutes, seconds, day, month, year, taxRate, tax, total

taxRate = 1.06
checkOutButton.onclick = () => {
    D = new date()
    hours = D.getHours()
    minutes = D.getMinutes()
    seconds = D.getSeconds()
    day = D.getDay()
    month = D.getMonth +1
    year = D.getFullYear
    total = Subtotal*taxRate
    tax = Subtotal * 0.06
    if(hours > 12){
        hours = '0' + hours - 12
    }
    if(seconds <10){
        seconds = '0' + seconds
    }
    if(minutes <10){
        minutes = '0'+ minutes
    }
    alert(`
    Date    ${month}/${day+5}/${year}
    time    ${hours}:${minutes}:${seconds}
    ${gummyCount} Gummy Bears
    ${hersheyCount} Harsheys
    ${skittlesCount} Skittles
    
    Subtotal     $${Subtotal.toFixed(2)}
    Tax          $${tax.toFixed(2)}
    Total        $${total.toFixed(2)}          
    `)
}
var gummyCounter = document.querySelector('gummyCount')
var hersheyCounter = document.querySelector('hersheyCount')
var skittlesCounter = document.querySelector('skittlesCount')

function checker(){
    if(Subtotal < 1){
        alert('...😦Invaild Option....Make another purchase')
        location.reload()
    }
}
function updateItems(){
    displayTotalItem.innerHTML = `${totalITem} Items in Shopping Cart`
}

function updateBudget(){
    budget.innerHTML = `Subtotal: $${Subtotal}`
} 

var snackObj = [
    {price:1},
    {price:1.25},
    {price: 0.75},
]

var buyButton1, buyButton2, buyButton3

buyButton1 = document.querySelector('.buy1')
buyButton2 = document.querySelector('.buy2')
buyButton3 = document.querySelector('.buy3')
var gummmyCount = 0
var hersheyCount = 0
var skittlesCount = 0
var totalItem = 0

buyButton1.onclick = () => {
    Subtotal +=snackObj[0].price
    gummmyCount++
    totalItem++
    gummyCounter.innerHTML = `${gummmyCount*1}.00`
}
buyButton2.onclick = () => {
    Subtotal +=snackObj[1].price
    hersheyCount++
    totalItem++
    hersheyCounter.innerHTML = `${hersheyCount} packs = $${hersheyCount*1.25}`
}
buyButton3.onclick = () => {
    Subtotal += snackObj[2].price
    skittlesCount++
    totalItem++
    skittlesCounter.innerHTML = `${skittlesCount} packs = $${skittlesCount *0.75}`
}
var buyButtons = [buyButton1, buyButton2, buyButton3]

buyButtons.forEach(btn =>{
    btn.addEventListener('click' , () => {
        checker()
        updateItems()
        updateBudget()
    })
}) 