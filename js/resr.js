function test(){
    let q = "blabla";
    return q;
}

function doDis(test){
    console.log(test());
}

doDis(test);

//branch test

const buttons = document.querySelectorAll('.buttons button');

function getChoice(e){
    let chocice = e.target.textContent.toLowerCase();
    console.log(chocice);
}


buttons.forEach(button =>{button.addEventListener('click',getChoice)});

