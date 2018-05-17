//name input field
const nameInput= document.querySelector('#name');
//job role selector
const jobSelector= document.querySelector('#title');
//your job role field (hidden by default)
const yourJobRole= document.querySelector('#other-title');
//t-shirt design selector
const tshirtDesign= document.querySelector('#design');
//t-shirt design options
const designOptions= tshirtDesign.options;
//entire tshirt "Color" div
const colorDiv= document.querySelector('#colors-js-puns');
//t-shirt colors selector
const tshirtColor= document.querySelector('#color');
//t-shirt colors options
const tshirtColOptions= tshirtColor.options;
//activities fieldset
const actField= document.querySelector('.activities');
//activities fieldset checkboxes
const actsChecks= actField.getElementsByTagName('input');
//activities fieldset labels
const actsLabels= actField.getElementsByTagName('label');



//onload page function
window.onload= ()=>{
    //starting focus on first name field. 
    nameInput.focus();
    //job role input hidden on load.
    yourJobRole.style.display= 'none';
    //hiding tshirt color div
    colorDiv.style.display= 'none';
    //hiding bitcoin and paypal info by default
    paypalInfo.style.display= 'none';
    bitcoinInfo.style.display= 'none';
    paymentOptions[0].disabled= true;
    paymentOptions[1].selected= true;
}

//event listener for "other" job role selection
jobSelector.addEventListener('click', (e)=>{
    if(e.target.value== 'other'){
        yourJobRole.style.display= 'block';
    }else if(e.target.value != 'other'){
        yourJobRole.style.display= 'none';
    }
});

//event listener for tshirt design
tshirtDesign.addEventListener('click', (e)=>{
    if(e.target.value== 'js puns'){
        colorDiv.style.display= 'block';
        tshirtColOptions[0].style.display= 'block';
        tshirtColOptions[0].selected= true;
        tshirtColOptions[1].style.display= 'block';
        tshirtColOptions[2].style.display= 'block';
        tshirtColOptions[3].style.display= 'none';
        tshirtColOptions[4].style.display= 'none';
        tshirtColOptions[5].style.display= 'none';
    }else if(e.target.value== 'heart js'){
        colorDiv.style.display= 'block';
        tshirtColOptions[0].style.display= 'none';
        tshirtColOptions[1].style.display= 'none';
        tshirtColOptions[2].style.display= 'none';
        tshirtColOptions[3].style.display= 'block';
        tshirtColOptions[3].selected= true;
        tshirtColOptions[4].style.display= 'block';
        tshirtColOptions[5].style.display= 'block';
    }else{
        colorDiv.style.display= 'none';
    }
});


//checkbox function
function checkboxGrayOut(checked, conflicts){
    actsChecks[checked].addEventListener('change', ()=>{
        if(actsChecks[checked].checked == true){
        actsChecks[conflicts].disabled= true;
        actsLabels[conflicts].style.color= 'grey';
        }else if(actsChecks[checked].checked== false){
            actsChecks[conflicts].disabled= false;
            actsLabels[conflicts].style.color= '';
       } 
    });
}

//calling checkbox function on conflicting events. 
checkboxGrayOut(1, 3);
checkboxGrayOut(2, 4);
checkboxGrayOut(3, 1);
checkboxGrayOut(4, 2);
//*********************************************** */


//create element to display cost
const confCost= document.createElement('h4');



for(let i=0; i< actsChecks.length; i++){
    actsChecks[i].addEventListener('change', ()=>{
        if(actsChecks[i].checked == true){
            actField.appendChild(confCost);
            confCost.style.display= 'block';
        // }else if(actsChecks[i].checked == false){
        //     confCost.style.display= 'none';
       }
    });
}
//need to fix behaviour in above, it removes total if you uncheck one even if some still remain checked. 


//initialize variable of cost
let costOfConfTotal= 0;
//listener for first event
actsChecks[0].addEventListener('change', ()=>{
    if(actsChecks[0].checked== true){
        costOfConfTotal+= 200;
        confCost.textContent= 'Total: $' +costOfConfTotal;
    }
});
actsChecks[0].addEventListener('change', ()=>{
    if(actsChecks[0].checked== false){
        costOfConfTotal-= 200;
        confCost.textContent= 'Total: $' +costOfConfTotal;
    }
});
//listener for remaining events
for(let i=1; i<actsChecks.length; i++){
    actsChecks[i].addEventListener('change', ()=>{
        if(actsChecks[i].checked== true){
            costOfConfTotal+= 100;
            confCost.textContent= 'Total: $' +costOfConfTotal;
        }
    });
    actsChecks[i].addEventListener('change', ()=>{
        if(actsChecks[i].checked== false){
            costOfConfTotal-= 100;
            confCost.textContent= 'Total: $' +costOfConfTotal;
        }
    });
}

//payment option selector
const paymentSelector= document.querySelector('#payment');
//payment option selector options
const paymentOptions= paymentSelector.options;
//credit card div
const creditCardField= document.querySelector('#credit-card');
//paypal info
const paypalInfo= document.querySelector('#paypal-info');
//bitcoin info
const bitcoinInfo= document.querySelector('#bitcoin-info');
//event listener to display correct info based on payment choice
paymentSelector.addEventListener('click', (e)=>{
    if(e.target.value== 'paypal'){
        creditCardField.style.display= 'none';
        paypalInfo.style.display= 'block';
        bitcoinInfo.style.display= 'none';
    }else if(e.target.value== 'bitcoin'){
        creditCardField.style.display= 'none';
        paypalInfo.style.display= 'none';
        bitcoinInfo.style.display= 'block';
    }else if(e.target.value== 'credit card'){
        creditCardField.style.display= 'block';
        paypalInfo.style.display= 'none';
        bitcoinInfo.style.display= 'none'; 
    }
});



const nameField= document.getElementById('name');
const emailField= document.getElementById('mail');
const cardNumField= document.getElementById('cc-num');
const zipCode= document.getElementById('zip');
const cvv= document.getElementById('cvv');
const form= document.querySelector('form');
const submitButton= document.querySelector('button');
const nameRegex= /^[a-zA-Z]{1,19}$/;
const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const creditCardRegex= /^[0-9]{13,16}$/;
const zipRegex= /^[0-9]{5}$/;
const cvvRegex= /^[0-9]{3}$/;


//validation functions****
//name field
function nameValid(name){
    return nameRegex.test(name.value);
}

//email field
function emailValid(email){
    return emailRegex.test(email.value);
}

//function to validate atleast one activity selected
function activitiesChecked(){
    let count=0;
    for(let i=0; i<actsChecks.length; i++){
        if(actsChecks[i].checked==true){
            count ++;
        }
    }
    return count;
}

//credit card validation
function cardNumberValid(cardNumber){
    return creditCardRegex.test(cardNumber.value);
}

//zip validation
function zipValid(zip){
    return zipRegex.test(zip.value);
}

//cvv validation
function cvvValid(cvvNumber){
    return cvvRegex.test(cvvNumber.value);
}



//submit validation**********
submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    //name field validation
    if(nameValid(nameField)== false){
        nameField.style.borderColor= 'red';
    }else if(nameValid(nameField)== true){
        nameField.style.borderColor= '';
    }
    //email validation
    if(emailValid(emailField)== false){
        emailField.style.borderColor= 'red';
    }else if (emailValid(emailField)== true){
        emailField.style.borderColor= '';
    }
    
    //check for registration of activities
    if(activitiesChecked()==0){
        actField.style.color= 'red';
    }else{
        actField.style.color= '';
    }

    //if credit card selected as payment, run this check
    if(paymentSelector.value== "credit card"){
        if(cardNumberValid(cardNumField)== false){
            cardNumField.style.borderColor= 'red';
        } else if (cardNumberValid(cardNumField)== true){
            cardNumField.style.borderColor= '';
        }
    
        if(zipValid(zipCode)== false){
            zipCode.style.borderColor= 'red';
        } else if (zipValid(zipCode)== true){
            zipCode.style.borderColor= '';
        }

        if(cvvValid(cvv)== false){
            cvv.style.borderColor= 'red';
        } else if (cvvValid(cvv)== true){
            cvv.style.borderColor= '';
        }
        if( (nameValid(nameField)== false)||
        (emailValid(emailField)== false)||
        (cardNumberValid(cardNumField)== false)||
        (zipValid(zipCode)== false)||
        (cvvValid(cvv)== false))
        {
        alert('Please correctly enter information marked red');
        }else{
            alert('Form successfully submitted');
            window.location.reload();
        }
    }
    if(paymentSelector.value!= "credit card"){
        if((nameValid(nameField)== false)||
        (emailValid(emailField)== false)){
            alert('Please correctly enter information marked red');
        }else{
            alert('Form successfully submitted');
            window.location.reload();
        }
    }
 
});




