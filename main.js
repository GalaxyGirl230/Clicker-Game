var berries = 0;
var charmanders = 0;
var bulbasaurs = 0;
var squirtles = 0;
var cookies = 0; //this is really Pikachu, but the variable "pikachu" wasn't working for some reason, so I changed it to cookies.
var piplups = 0;
var leppas = 0;
var turtwigs = 0;
var weedle = 0;
var pidgey = 0;
var lum = 0;
var rattata = 0;

function berryClick(number){
	berries = berries + number;
	document.getElementById("berries").innerHTML = berries;
};
function leppaClick(number){
	leppas = leppas + number;
	document.getElementById("leppas").innerHTML = leppas;
};
function lumClick(number){
	lum = lum + number;
	document.getElementById("lum").innerHTML = lum;
};

function buyCharmander(){
    var charmanderCost = Math.floor(10 * Math.pow(1.1,charmanders));     //works out the cost of this charmander
    if(berries >= charmanderCost){                                   //checks that the player can afford the charmander
        charmanders = charmanders + 1;                                   //increases number of charmanders
    	berries = berries - charmanderCost;                          //removes the berries spent
        document.getElementById('charmanders').innerHTML = charmanders;  //updates the number of charmanders for the user
        document.getElementById('berries').innerHTML = berries;  //updates the number of berries for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,charmanders));       //works out the cost of the next charmander
    document.getElementById('charmanderCost').innerHTML = nextCost;  //updates the charmander cost for the user
};

function buyBulbasaur(){
    var bulbasaurCost = Math.floor(50 * Math.pow(1.3,bulbasaurs));
    if(berries >= bulbasaurCost){
        bulbasaurs = bulbasaurs + 1;
    	berries = berries - bulbasaurCost;
        document.getElementById('bulbasaurs').innerHTML = bulbasaurs;
        document.getElementById('berries').innerHTML = berries;
    };
    var nextCost = Math.floor(50 * Math.pow(1.3,bulbasaurs));
    document.getElementById('bulbasaurCost').innerHTML = nextCost;
};

function buySquirtle(){
    var squirtleCost = Math.floor(100 * Math.pow(1.5,squirtles));
    if(berries >= squirtleCost){
        squirtles = squirtles + 1;
    	berries = berries - squirtleCost;
        document.getElementById('squirtles').innerHTML = squirtles;
        document.getElementById('berries').innerHTML = berries;
    };
    var nextCost = Math.floor(100 * Math.pow(1.5,squirtles));
    document.getElementById('squirtleCost').innerHTML = nextCost;
};

function buyCookie(){
    var cookieCost = Math.floor(500 * Math.pow(1.5,cookies));
    if(berries >= cookieCost){
        cookies = cookies + 1;
    	berries = berries - cookieCost;
        document.getElementById('cookies').innerHTML = cookies;
        document.getElementById('berries').innerHTML = berries;
    };
    var nextCost = Math.floor(500 * Math.pow(1.5,cookies));
    document.getElementById('cookieCost').innerHTML = nextCost;
};

function buyPiplup(){
    var piplupCost = Math.floor(1000 * Math.pow(1.5,piplups));
    if(berries >= piplupCost){
        piplups = piplups + 1;
    	berries = berries - piplupCost;
        document.getElementById('piplups').innerHTML = piplups;
        document.getElementById('berries').innerHTML = berries;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.5,piplups));
    document.getElementById('piplupCost').innerHTML = nextCost;
};

function buyTurtwig(){
    var turtwigCost = Math.floor(2500 * Math.pow(1.5,turtwigs));
    if(leppas >= turtwigCost){
        turtwigs = turtwigs + 1;
    	leppas = leppas - turtwigCost;
        document.getElementById('turtwigs').innerHTML = turtwigs;
        document.getElementById('leppas').innerHTML = leppas;
    };
    var nextCost = Math.floor(2500 * Math.pow(1.5,turtwigs));
    document.getElementById('turtwigCost').innerHTML = nextCost;
};

function buyWeedle(){
    var weedleCost = Math.floor(4000 * Math.pow(1.5,weedle));
    if(leppas >= weedleCost){
        weedle = weedle + 1;
    	leppas = leppas - weedleCost;
        document.getElementById('weedle').innerHTML = weedle;
        document.getElementById('leppas').innerHTML = leppas;
    };
    var nextCost = Math.floor(4000 * Math.pow(1.5,weedle));
    document.getElementById('weedleCost').innerHTML = nextCost;
};

function buyPidgey(){
    var pidgeyCost = Math.floor(6000 * Math.pow(1.5,pidgey));
    if(leppas >= pidgeyCost){
        pidgey = pidgey + 1;
    	leppas = leppas - pidgeyCost;
        document.getElementById('pidgey').innerHTML = pidgey;
        document.getElementById('leppas').innerHTML = leppas;
    };
    var nextCost = Math.floor(6000 * Math.pow(1.5,pidgey));
    document.getElementById('pidgeyCost').innerHTML = nextCost;
};

function buyRattata(){
    var rattataCost = Math.floor(8000 * Math.pow(1.5,rattata));
    if(leppas >= rattataCost){
        rattata = rattata + 1;
    	leppas = leppas - rattataCost;
        document.getElementById('rattata').innerHTML = rattata;
        document.getElementById('leppas').innerHTML = leppas;
    };
    var nextCost = Math.floor(8000 * Math.pow(1.5,rattata));
    document.getElementById('rattataCost').innerHTML = nextCost;
};

window.setInterval(function(){
	berryClick(charmanders);
	berryClick(bulbasaurs * 5);
	berryClick(squirtles * 10);
	berryClick(cookies * 50);
	berryClick(piplups * 75);
	leppaClick(piplups);
	leppaClick(turtwigs * 5);
	leppaClick(weedle * 10);
	leppaClick(pidgey * 50);
	leppaClick(rattata * 75);
	lumClick(rattata);
}, 1000);
