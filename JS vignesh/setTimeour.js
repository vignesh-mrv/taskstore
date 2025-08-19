// execution happened based on the time given  --------- Async
// Execution happened based on the order given in program ------ Sync


function appa(){
setTimeout(() => {

    console.log("Hero");
    
    
}, 4000);

}

function amma(){
setTimeout(() => {

    console.log("Heroine");
    
    
}, 5000);

}

function vikky(){
setTimeout(() => {

    console.log("Prince");
    
    
}, 2000);

}

function kivi(){
setTimeout(() => {

    console.log("princess");
    
    
}, 1000);

}

appa();
amma();
kivi();
vikky();