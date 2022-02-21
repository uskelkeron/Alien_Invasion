let FLY_DURATION = 0;

const flyspaceCraft = (spaceship,flightSpeed)=>
{

    const flySpaceCraft1 = setInterval(() => 
    {
      
        console.log(flightSpeed+"flight speed");

        FLY_DURATION = FLY_DURATION + flightSpeed;

       
        
        spaceship.style.marginTop = `${FLY_DURATION}%`;
    
        if(FLY_DURATION>=120)
        {
            clearInterval(flySpaceCraft1);
          
        }
        console.log(FLY_DURATION+"flight duration");
        
    }, 1000);
    

}

const main = (()=>
{
//Declaration of Variables
const spaceCraft = document.querySelectorAll(".spaceCraft");


console.log(spaceCraft);



let spaceCraft1 = spaceCraft[0];
let spaceCraft2 = spaceCraft[1];
let spaceCraft3 = spaceCraft[2];
let spaceCraft4 = spaceCraft[3];
let spaceCraft5 = spaceCraft[4];



const flightSpeed = [15,15,15,15,15,15];

let random = Math.floor(Math.random()*5);
flyspaceCraft(spaceCraft1,flightSpeed[random]);

random = Math.floor(Math.random()*5);
flyspaceCraft(spaceCraft2,flightSpeed[random]);

random = Math.floor(Math.random()*5);
flyspaceCraft(spaceCraft3,flightSpeed[random]);

random = Math.floor(Math.random()*5);
flyspaceCraft(spaceCraft4,flightSpeed[random]);

random = Math.floor(Math.random()*5);
flyspaceCraft(spaceCraft5,flightSpeed[random]);





})();