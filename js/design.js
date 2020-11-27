var count = 0;

element2 = document.querySelector('.startbt');
element = document.querySelector('.CompName'); 
element1 = document.querySelector('.FirstCompimg'); 
element3 = document.querySelector('.C1T1');
element4 = document.querySelector('.C1T2');
element5 = document.querySelector('.backbt');
element6 = document.getElementsByClassName('Block');
element7 = document.getElementsByClassName('Block2');

element8 = document.querySelector('.FERWD');
element9 = document.querySelector('.Animate');
element10 = document.getElementsByClassName('C1');
element11 = document.querySelector('.ar1');
element12 = document.querySelector('.ar2');
element13 = document.querySelector('.ar3');
element14 = document.querySelector('.ar4');
element15 = document.querySelector('.ar5');
element18 = document.querySelector('.ar6');

element17 = document.querySelector('.Animate2');
element19 = document.getElementsByClassName('C2');

element27 = document.querySelector('.FEFWD');
element28 = document.querySelector('.Animate3');
element29 = document.getElementsByClassName('C3');
element21 = document.querySelector('.ar12');
element22 = document.querySelector('.ar22');
element23 = document.querySelector('.ar32');
element24 = document.querySelector('.ar42');

element30 = document.querySelector('.Animate4');
element31 = document.getElementsByClassName('C4');
element32 = document.querySelector('.ar33');
element33 = document.querySelector('.ar13');
element34 = document.querySelector('.ar43');
element35 = document.querySelector('.ar23');
element36 = document.querySelector('.ar53');
element37 = document.querySelector('.ar63');
element38 = document.querySelector('.ar73');
element39 = document.querySelector('.ar83');
element40 = document.querySelector('.ar93');
element41 = document.querySelector('.ar99');

element42 = document.querySelector('.Animate5');
element43 = document.getElementsByClassName('C5');

element44 = document.querySelector('.Animate6');
element45 = document.getElementsByClassName('C6');

element46 = document.querySelector('.Animate7');
element47 = document.getElementsByClassName('C7');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }


async function display(){
  if(count==1){ 
    closeAll();
    disable();
    element2.innerHTML = "NEXT";
    element.style.visibility = 'hidden';
    element.innerHTML = "&nbsp;Introduction to Chassis Layout &nbsp;";
    element.style.animation = 'an1 2s ease-out 1';
    await sleep(2000);
    element.style.visibility = 'visible';  
    element1.style.animation = 'an4 3s ease-out 1' ;
    await sleep(3000);
    element1.style.visibility = 'visible';
    element3.style.animation = 'an2 2s ease-out 1';
    await sleep(2000);
    element3.style.visibility = 'visible';
    element4.style.animation = 'an3 2s ease-out 1';
    element4.style.visibility = 'visible';
    inable();
  }
    
    else if(count==2){ 
        closeAll();
        disable();
    
        element.innerHTML = "&nbsp;Components: Basic Structure &nbsp;" ;
        await sleep(2000);
        element.style.visibility = 'visible';
        for(var i=0;i<element6.length;i++){
            element6[i].style.animation = 'imgB 1s linear 1';
            element6[i].style.visibility = 'visible';
            await sleep(1500);
        }
        await sleep(1000);
        inable();
    }

    else if(count==3){
        closeAll();
        disable();
        element.innerHTML = '&nbsp;Transmission System &nbsp;' ;
        await sleep(2000);
        element.style.visibility = 'visible';
        for(var i=0;i<element7.length;i++){
            element7[i].style.animation = 'imgB2 1s linear 1';
            element7[i].style.visibility = 'visible';
            await sleep(2000);
        }
        await sleep(1000);
        inable();
    }
    
    else if(count==4){
        closeAll();
        disable();
        element.innerHTML = '&nbsp;Front Engine Rear Wheel Drive &nbsp;' ;
        await sleep(2000);
        element.style.visibility = 'visible' ;
        element8.style.animation = 'FERW 2s linear 1' ;
        await sleep(2000);
        element8.style.visibility = 'visible';
        await sleep(6000);
        element8.style.visibility = 'hidden';
        element9.style.animation = 'an01 2s linear 1';
        await sleep(2000);
        element9.style.visibility = 'visible' ; 
        await sleep(2000);
           
        element10[0].style.animation = 'border 2s linear 1';
        element10[0].style.visibility = 'visible';
        await sleep(4000);
        element11.style.visibility = 'visible' ;
        await sleep(2000);
        element12.style.visibility = 'visible' ;
        await sleep(2000);
        element10[1].style.animation = 'border 2s linear 1';
        element10[1].style.visibility = 'visible';
        await sleep(5000) ;
        element13.style.visibility = 'visible' ;
        await sleep(2000);
        element10[2].style.animation = 'border 2s linear 1';
        element10[2].style.visibility = 'visible';
        await sleep(4000) ;
        element14.style.visibility = 'visible' ;
        await sleep(2000) ;
        element15.style.visibility = 'visible' ;
        element18.style.visibility = 'visible' ;
        await sleep(1000);
        inable();
        
    }

    else if(count==5){
       closeAll();
       disable();
        element.innerHTML = '&nbsp;Rear Engine Rear Wheel Drive &nbsp;' ;
        await sleep(2000);
        element.style.visibility = 'visible' ;

        element17.style.animation = 'an01 2s linear 1';
        await sleep(2000);
        element17.style.visibility = 'visible' ; 
        await sleep(2000);
           
        element19[0].style.animation = 'border 2s linear 1';
        element19[0].style.visibility = 'visible';
        await sleep(4000);
        element19[1].style.animation = 'border 2s linear 1';
        element19[1].style.visibility = 'visible';
        await sleep(4000) ;
        element19[2].style.animation = 'border 2s linear 1';
        element19[2].style.visibility = 'visible';    
        await sleep(1000);
        inable();
    }

    else if(count==6){
           closeAll();
           disable();

        element.innerHTML = '&nbsp;Front Engine Front Wheel Drive &nbsp;' ;
        await sleep(2000);
        element.style.visibility = 'visible' ;

        element27.style.animation = 'FERW 2s linear 1' ;
        await sleep(2000);
        element27.style.visibility = 'visible';
        await sleep(6000);
        element27.style.visibility = 'hidden';
        element28.style.animation = 'an01 2s linear 1';
        await sleep(2000);
        element28.style.visibility = 'visible' ; 
        await sleep(2000);
           
        element29[0].style.animation = 'border 2s linear 1';
        element29[0].style.visibility = 'visible';
        await sleep(4000);
        element21.style.visibility = 'visible' ;
        await sleep(2000);
        element22.style.visibility = 'visible' ;
        await sleep(2000);
        element29[1].style.animation = 'border 2s linear 1';
        element29[1].style.visibility = 'visible';
        await sleep(5000) ;
        element29[2].style.animation = 'border 2s linear 1';
        element29[2].style.visibility = 'visible';
        await sleep(5000) ;
        element23.style.visibility = 'visible' ;
        element24.style.visibility = 'visible' ;
        await sleep(1000);
        inable();
    }

    else if(count==7){
        
        closeAll();
        disable();
        element.innerHTML = '&nbsp;Front Engine Four/All Wheel Drive &nbsp;' ;
        await sleep(2000);
        element.style.visibility = 'visible' ;

        element30.style.animation = 'an01 2s linear 1';
        await sleep(2000);
        element30.style.visibility = 'visible' ; 
        await sleep(2000);  
        element31[0].style.animation = 'border 2s linear 1';
        element31[0].style.visibility = 'visible';
        await sleep(5000);
        element31[1].style.animation = 'border 2s linear 1';
        element31[1].style.visibility = 'visible';
        await sleep(5000);
        element31[2].style.animation = 'border 2s linear 1';
        element31[2].style.visibility = 'visible';
        await sleep(4000) ;
        element32.style.visibility = 'visible' ;
        await sleep(2000);
        element33.style.visibility = 'visible' ;
        await sleep(2000);
        element34.style.visibility = 'visible' ;
        await sleep(2000);
        element35.style.visibility = 'visible' ;
        await sleep(2000);
        element36.style.visibility = 'visible' ;
        element37.style.visibility = 'visible' ;
        await sleep(3000);
        element38.style.visibility = 'visible' ;
        element39.style.visibility = 'visible' ;
        element40.style.visibility = 'visible' ;
        element41.style.visibility = 'visible' ;
        await sleep(1000);
        inable();

    }

    else if(count==8){
        closeAll();
        disable();
        element.innerHTML = '&nbsp;Mid Engine Rear Wheel Drive &nbsp;' ;
        await sleep(2000);
        element.style.visibility = 'visible' ;

        element42.style.animation = 'an01 2s linear 1';
        await sleep(2000);
        element42.style.visibility = 'visible' ; 
        await sleep(2000);
           
        element43[0].style.animation = 'border 2s linear 1';
        element43[0].style.visibility = 'visible';
        await sleep(4000);
        element43[1].style.animation = 'border 2s linear 1';
        element43[1].style.visibility = 'visible';
        await sleep(4000) ;
        element43[2].style.animation = 'border 2s linear 1';
        element43[2].style.visibility = 'visible';  
        await sleep(1000);
        inable();  

    }

    else if(count==9){
        closeAll();
        disable();
        element.innerHTML = '&nbsp;Articulated Vehicles &nbsp;' ;
        await sleep(2000);
        element.style.visibility = 'visible' ;

        element44.style.animation = 'an01 2s linear 1';
        await sleep(2000);
        element44.style.visibility = 'visible' ; 
        await sleep(2000);
           
        element45[0].style.animation = 'border 2s linear 1';
        element45[0].style.visibility = 'visible';
        await sleep(4000);
        element45[1].style.animation = 'border 2s linear 1';
        element45[1].style.visibility = 'visible';
        await sleep(4000) ;
        element45[2].style.animation = 'border 2s linear 1';
        element45[2].style.visibility = 'visible';    
        await sleep(1000);
        inable();

    }

    else if(count==10){
        closeAll();
        disable();
        element.innerHTML = '&nbsp;Heavy Commercial Vehicles &nbsp;' ;
        await sleep(2000);
        element.style.visibility = 'visible' ;

        element46.style.animation = 'an01 2s linear 1';
        await sleep(2000);
        element46.style.visibility = 'visible' ; 
        await sleep(2000);
           
        element47[0].style.animation = 'border 2s linear 1';
        element47[0].style.visibility = 'visible';
        await sleep(4000);
        element47[1].style.animation = 'border 2s linear 1';
        element47[1].style.visibility = 'visible';
        await sleep(4000) ;
        element47[2].style.animation = 'border 2s linear 1';
        element47[2].style.visibility = 'visible';
        await sleep(1000);
        element2.innerHTML = 'FINISHED' ;
        inable();   
    }

    else{
        window.close();
        count = 10;
    }

}

async function closeAll(){

    element.style.visibility = 'hidden';
    element1.style.visibility = 'hidden';
    element3.style.visibility = 'hidden';
    element4.style.visibility = 'hidden';
        
    for(var i=0;i<element6.length;i++){
        element6[i].style.visibility = 'hidden';
    }
    for(var i=0;i<element7.length;i++){
        element7[i].style.visibility = 'hidden';
    }
    element8.style.visibility = 'hidden';
    element9.style.visibility = 'hidden' ; 
    element10[0].style.visibility = 'hidden';
    element11.style.visibility = 'hidden' ;
    element12.style.visibility = 'hidden' ;
    element10[1].style.visibility = 'hidden';
    element13.style.visibility = 'hidden' ;
    element10[2].style.visibility = 'hidden';
    element14.style.visibility = 'hidden' ;
    element15.style.visibility = 'hidden' ;
    element18.style.visibility = 'hidden' ;
    element17.style.visibility = 'hidden' ; 
    element19[0].style.visibility = 'hidden';
    element19[1].style.visibility = 'hidden';
    element19[2].style.visibility = 'hidden'; 
    element27.style.visibility = 'hidden';
    element28.style.visibility = 'hidden' ;
    element29[0].style.visibility = 'hidden';
    element21.style.visibility = 'hidden' ;
    element22.style.visibility = 'hidden' ;
    element29[1].style.visibility = 'hidden';
    element29[2].style.visibility = 'hidden';
    element23.style.visibility = 'hidden' ;
    element24.style.visibility = 'hidden' ;
    element30.style.visibility = 'hidden' ;
    element31[0].style.visibility = 'hidden';
    element31[1].style.visibility = 'hidden';
    element31[2].style.visibility = 'hidden';
    element32.style.visibility = 'hidden' ;
    element33.style.visibility = 'hidden' ;
    element34.style.visibility = 'hidden' ;
    element35.style.visibility = 'hidden' ;
    element36.style.visibility = 'hidden' ;
    element37.style.visibility = 'hidden' ;
    element38.style.visibility = 'hidden' ;
    element39.style.visibility = 'hidden' ;
    element40.style.visibility = 'hidden' ;
    element41.style.visibility = 'hidden' ;
    element42.style.visibility = 'hidden' ;
    element43[0].style.visibility = 'hidden';
    element43[1].style.visibility = 'hidden';
    element43[2].style.visibility = 'hidden';
    element44.style.visibility = 'hidden' ;
    element45[0].style.visibility = 'hidden';
    element45[1].style.visibility = 'hidden';
    element45[2].style.visibility = 'hidden';
    element46.style.visibility = 'hidden' ;
    element47[0].style.visibility = 'hidden';
    element47[1].style.visibility = 'hidden';
    element47[2].style.visibility = 'hidden';
}

async function inable(){
    element2.style.visibility = 'visible';
    element5.style.visibility = 'visible' ;
}

async function disable(){
    element2.style.visibility = 'hidden';
    element5.style.visibility = 'hidden' ;
}

function Increment(){
    count = count + 1 ;
    display();
}

function decrement(){
    count = count - 1;
    display();
}

