const form = document.getElementById("cbn1");
const depositor = document.getElementById("depositor");
const bank = document.getElementById("bank");
const accountname = document.getElementById("accountname");
const accountname1 = document.getElementById("accountname1");
const depositor1 = document.getElementById("depositor1");
const email = document.getElementById("email");
const address1 = document.getElementById("address1");
const two = document.getElementById("two");
const five = document.getElementById("five");
const one = document.getElementById("one");
const total = document.getElementById("total");
const emailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", function(x) {
    x.preventDefault();

    let isValid = true;

    if (!depositor.value) { 
        depositorError.textContent = "Pls signify: Individual/Corporate";
        isValid = false;
      } else {
        depositorError.textContent = "";
        depositorError.style.color="blue";
      }

      if (!bank.value) {
        bankError.textContent = "bank name is required";
        isValid = false;
      } else {
        bankError.textContent = "";
        bankError.style.color="blue";
      }
      if (!accountname.value) {
        accountError.textContent = "account  number is required";
        isValid = false;
      } else {
        accountError.textContent = "";
        accountError.style.color="blue";
      }
      if (!accountname1.value) {
        account1Error.textContent = "account  name is required";
        isValid = false;
      } else {
        account1Error.textContent = "";
        account1Error.style.color="blue";
      }
      if (!depositor1.value) {
        depositor1Error.textContent = "depositor name is required";
        isValid = false;
      } else {
        depositor1Error.textContent = "";
        depositor1Error.style.color="blue";
      }
      if (!email.value) {
        emailError.textContent = "you must put the email";
        isValid = false;
      } else if (!email.value.match(emailformat)) {
        emailError.textContent = "Email is not in the correct format";
        isValid = false;
      } else {
        emailError.textContent = "";
      }
      if (isValid) {
        form.submit();
      }

})

function rate(){
  let input1 =document.getElementById("two").value;
  let input2 = document.getElementById("five").value;
  let input3 = document.getElementById("one").value;
  let k =document.querySelector("#go")
  let myinput1 = Number(input1);
  let myinput2 = Number(input2);
  let myinput3 = Number(input3);
 
  let total = myinput1 + myinput2 + myinput3; 
  document.getElementById("total").value = total;
    
    if(total<5000){
             
            k.innerHTML="please kindly go to your bank to save";
            k.style.color= "red";
        }
        else if (total>5000){
          
            k.innerHTML="you can kindly bring your money to CBN";
            k.style.color="blue";
        }
        else{
          k.innerHTML="";
        }
            

}

