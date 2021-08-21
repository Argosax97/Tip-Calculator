// //Calculate Tip
// function calculateTip() {
//     var billAmt = document.getElementById("billamt").value;
//     var serviceQual = document.getElementById("serviceQual").value;
//     var numOfPeople = document.getElementById("peopleamt").value;
  
//     //validate input
//     if (billAmt === "" || serviceQual == 0) {
//       alert("Please enter values");
//       return;
//     }
//     //Check to see if this input is empty or less than or equal to 1
//     if (numOfPeople === "" || numOfPeople <= 1) {
//       numOfPeople = 1;
//       document.getElementById("each").style.display = "none";
//     } else {
//       document.getElementById("each").style.display = "block";
//     }
  
//     //Calculate tip
//     var total = (billAmt * serviceQual) / numOfPeople;
//     //round to two decimal places
//     total = Math.round(total * 100) / 100;
//     //next line allows us to always have two digits after decimal point
//     total = total.toFixed(2);
//     //Display the tip
//     document.getElementById("totalTip").style.display = "block";
//     document.getElementById("tip").innerHTML = total;
  
//   }
  
//   //Hide the tip amount on load
//   document.getElementById("totalTip").style.display = "none";
//   document.getElementById("each").style.display = "none";
  
//   //click to call function
//   document.getElementById("calculate").onclick = function() {
//     calculateTip();
  
//   };


//variables
let bill = document.querySelector("#billAmount");
let quality = document.querySelector("#quality");
let people = document.querySelector("#peoples");
let tip = document.querySelector('span');

let resault = document.querySelector("#resaults")

let btn = document.querySelector("button");

//event function
btn.addEventListener('click', function(event){
    event.preventDefault();
    if(bill.value=="" || quality.value==0){
        alert('please enter values');
    }
    if (people === "" || people <= 1) {
         people = 1;
         document.getElementById("resaults").style.display = "none";
    } else {
         document.getElementById("resaults").style.display = "block";
    }
    let total = bill.value*quality.value;
    total = Math.round(total*100)/100;
    tip.innerHTML=total;
    if(people.value>0){
        let each = total/people.value;
        tip.innerHTML=each;
    }
});


