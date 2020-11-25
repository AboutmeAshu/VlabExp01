var count = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function display(){
    if(count==1){
    element2 = document.querySelector('.startbt'); 
    element2.innerHTML = "NEXT";
    element = document.querySelector('.CompName'); 
    element.innerHTML = "Introduction to Chassis Layout";
    element.style.animation = 'an1 2s ease-out 1';
    await sleep(2000);
    element.style.visibility = 'visible'; 
    element1 = document.querySelector('.FirstCompimg');  
    element1.style.animation = 'an4 3s ease-out 1' ;
    await sleep(3000);
    element1.style.visibility = 'visible';
    element3 = document.querySelector('.C1T1');
    element3.style.animation = 'an2 2s ease-out 1';
    await sleep(2000);
    element3.style.visibility = 'visible';
    element4 = document.querySelector('.C1T2');
    element4.style.animation = 'an3 2s ease-out 1';
    element4.style.visibility = 'visible';
    }
    else if(count==2){
        element = document.querySelector('.backbt');
        element.style.visibility = 'visible';

        element1 = document.querySelector('.FirstCompimg');
        element1.style.visibility = 'hidden';
        element3 = document.querySelector('.C1T1');
        element3.style.visibility = 'hidden';
        element4 = document.querySelector('.C1T2');
        element4.style.visibility = 'hidden';
        element1 = document.querySelector('.CompName'); 
        element1.innerHTML = "Components: Basic Structure" ;
        element1.style.animation = 'an1 2s ease-out 1';
        await sleep(2000);
        element1.style.visibility = 'visible';
    }
}

function Increment(){
    count = count + 1 ;
    display();
}

function decrement(){
    count = count - 1;
    display();
}

