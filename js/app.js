let stopflights = 0;

const flyspaceCraft = (spaceship,flightSpeed,shipid)=>
{
    let FLY_DURATION=0 

    const flySpaceCraft1 = setInterval(() => 
    {
        
       

        console.log(`Current Flight Speed :${flightSpeed}, Current Duration: ${FLY_DURATION}, Current Ship id: ${shipid}, Stopflight value ${stopflights}`);
        
         

            if(stopflights >= 60)
            {
                clearInterval(flySpaceCraft1);
              
            }
            else
            {
                
                FLY_DURATION += flightSpeed;

                if(stopflights < FLY_DURATION)
                {
                    stopflights = FLY_DURATION;
                }
            }
        
        const spaceshipduration=spaceship.style.marginTop = `${FLY_DURATION}vh`;
    
   
        
     
    }, 1000);
    

}

const main = (()=>
{
//Declaration of Variables
const spaceCraft = document.querySelectorAll(".spaceCraft");
const canon = document.querySelector("#canon_container > div");
let spaceCraft1 = spaceCraft[0];
let spaceCraft2 = spaceCraft[1];
let spaceCraft3 = spaceCraft[2];
let spaceCraft4 = spaceCraft[3];
let spaceCraft5 = spaceCraft[4];



const flightSpeed = [1,2,3,4,5,6];

    let random = Math.floor(Math.random()*5);
    flyspaceCraft(spaceCraft1,flightSpeed[random],"101");

    random = Math.floor(Math.random()*5);
    flyspaceCraft(spaceCraft2,flightSpeed[random],"102");

    random = Math.floor(Math.random()*5);
    flyspaceCraft(spaceCraft3,flightSpeed[random],"103");

    random = Math.floor(Math.random()*5);
    flyspaceCraft(spaceCraft4,flightSpeed[random],"104");

    random = Math.floor(Math.random()*5);
    flyspaceCraft(spaceCraft5,flightSpeed[random],"105");

    let margin = 0;
    document.addEventListener("keydown",(event)=>{
        
       

        if(event.key == "ArrowLeft")
        {
            margin = margin - 10;
           
            canon.style.marginLeft = `${margin}px`
           
        }
        if (event.key ==="ArrowRight")
        {
            margin = margin + 10;
           
            canon.style.marginLeft = `${margin}px`
        }
        
        
    })




})();
