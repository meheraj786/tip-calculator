person=1
const people= document.querySelector(".people")

function increment() {
  if (person<1) {
    alert("minimum 1 person required")
  }else{
    person++
    people.innerHTML=person
  }
  
}
function decrement() {
  if (person<=1) {
    alert("minimum 1 person required")
  }else{
    person--
    people.innerHTML=person
  }
  
}
let payable= document.querySelector(".payable")
payable.parentElement.style.display="none"

function calc(){
let total= document.querySelector(".total").value
let tip= document.querySelector(".tip").value
let totalBill= document.querySelector(".totalBill")
let tipAmount= document.querySelector(".tipAmount")
let tax= document.querySelector(".tax")
let payable= document.querySelector(".payable")
let perPerson= document.querySelector(".perPerson")
const tipInt= parseInt(tip)
const totalInt= parseInt(total)

if (total=="" || tip=="" ) {
  alert("input something")
  payable.parentElement.style.display="none"
}else{
  payable.parentElement.style.display="block"
totalBill.innerHTML=`total bill : ${totalInt}`
tipAmount.innerHTML=`tip amount : ${(totalInt*(tipInt/100))}`
tax.innerHTML=`Tax %5 amount : ${(totalInt*(5/100))}`
payable.innerHTML=`Total payable : ${totalInt+(totalInt*(tipInt/100))+(totalInt*(5/100))}`
perPerson.innerHTML=`Per Person Cost : ${(totalInt+(totalInt*(tipInt/100))+(totalInt*(5/100)))/person}`
}
}


