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


//onload page function
window.onload= ()=>{
    //starting focus on first name field. 
    nameInput.focus();
    //job role input hidden on load.
    yourJobRole.style.display= 'none';
    colorDiv.style.display= 'none';
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


