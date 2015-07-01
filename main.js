
var gameData = {
    "berries": {
        "sitrus": {
            "count": 0,
            "perSec": 0
        },
        "leppa": {
            "count": 0,
            "perSec": 0
        },
        "lum": {
            "count": 0,
            "perSec": 0
        },
        "oran": {
            "count": 0,
            "perSec": 0
        },
        "enigma": {
            "count": 0,
            "perSec": 0
        }
    }
};

var charmanders = 0;
var bulbasaurs = 0;
var squirtles = 0;
var pikachus = 0;
var piplups = 0;

var turtwigs = 0;
var weedle = 0;
var pidgey = 0;

var rattata = 0;
var ekans = 0;
var caterpie = 0;
var vulpix = 0;

var spearow = 0;
var sandshrew = 0;
var oddish = 0;
var diglett = 0;

var poliwag = 0;
var abra = 0;
var machop = 0;

function berryClick(number){
	gameData.berries.sitrus.count = gameData.berries.sitrus.count + number;
	document.getElementById("berries").innerHTML = gameData.berries.sitrus.count;
};
function leppaClick(number){
	gameData.berries.leppa.count = gameData.berries.leppa.count + number;
	document.getElementById("leppas").innerHTML = gameData.berries.leppa.count;
};
function lumClick(number){
	gameData.berries.lum.count = gameData.berries.lum.count + number;
	document.getElementById("lum").innerHTML = gameData.berries.lum.count;
};
function oranClick(number){
	gameData.berries.oran.count = gameData.berries.oran.count + number;
	document.getElementById("oran").innerHTML = gameData.berries.oran.count;
};
function enigmaClick(number){
	gameData.berries.enigma.count = gameData.berries.enigma.count + number;
	document.getElementById("enigma").innerHTML = gameData.berries.enigma.count;
};

function sitrusPerSec(){
	gameData.berries.sitrus.perSec = charmanders + (bulbasaurs * 5) + (squirtles * 10) + (pikachus * 50) + (piplups * 75);
	document.getElementById("sitrusPS").innerHTML = gameData.berries.sitrus.perSec;
};
function leppaPerSec(){
	gameData.berries.leppa.perSec = piplups + (turtwigs * 5) + (weedle * 10) + (pidgey * 50) + (rattata * 75);
	document.getElementById("leppaPS").innerHTML = gameData.berries.leppa.perSec;
};
function lumPerSec(){
	gameData.berries.lum.perSec = rattata + (caterpie * 5) + (ekans * 10) + (vulpix * 50) + (spearow * 75);
	document.getElementById("lumPS").innerHTML = gameData.berries.lum.perSec;
};
function oranPerSec(){
	gameData.berries.oran.perSec = spearow + (sandshrew * 5) + (oddish * 10) + (diglett * 50) + (poliwag * 75);
	document.getElementById("oranPS").innerHTML = gameData.berries.oran.perSec;
};
function enigmaPerSec(){
	gameData.berries.enigma.perSec = poliwag + (abra * 5);
	document.getElementById("enigmaPS").innerHTML = gameData.berries.enigma.perSec;
};

function buyCharmander(){
    var charmanderCost = Math.floor(10 * Math.pow(1.1,charmanders));     //works out the cost of this charmander
    if(gameData.berries.sitrus.count >= charmanderCost){                                   //checks that the player can afford the charmander
        charmanders = charmanders + 1;                                   //increases number of charmanders
        gameData.berries.sitrus.count = gameData.berries.sitrus.count - charmanderCost;                          //removes the berries spent
        document.getElementById('charmanders').innerHTML = charmanders;  //updates the number of charmanders for the user
        document.getElementById('berries').innerHTML = gameData.berries.sitrus.count;  //updates the number of berries for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,charmanders));       //works out the cost of the next charmander
    document.getElementById('charmanderCost').innerHTML = nextCost;  //updates the charmander cost for the user
};

function buyBulbasaur(){
    var bulbasaurCost = Math.floor(50 * Math.pow(1.3,bulbasaurs));
    if(gameData.berries.sitrus.count >= bulbasaurCost){
        bulbasaurs = bulbasaurs + 1;
        gameData.berries.sitrus.count = gameData.berries.sitrus.count - bulbasaurCost;
        document.getElementById('bulbasaurs').innerHTML = bulbasaurs;
        document.getElementById('berries').innerHTML = gameData.berries.sitrus.count;
    };
    var nextCost = Math.floor(50 * Math.pow(1.3,bulbasaurs));
    document.getElementById('bulbasaurCost').innerHTML = nextCost;
};

function buySquirtle(){
    var squirtleCost = Math.floor(100 * Math.pow(1.5,squirtles));
    if(gameData.berries.sitrus.count >= squirtleCost){
        squirtles = squirtles + 1;
        gameData.berries.sitrus.count = gameData.berries.sitrus.count - squirtleCost;
        document.getElementById('squirtles').innerHTML = squirtles;
        document.getElementById('berries').innerHTML = gameData.berries.sitrus.count;
    };
    var nextCost = Math.floor(100 * Math.pow(1.5,squirtles));
    document.getElementById('squirtleCost').innerHTML = nextCost;
};

function buyPikachu(){
    var pikachuCost = Math.floor(500 * Math.pow(1.5,pikachus));
    if(gameData.berries.sitrus.count >= pikachuCost){
        pikachus = pikachus + 1;
        gameData.berries.sitrus.count = gameData.berries.sitrus.count - pikachuCost;
        document.getElementById('pikachus').innerHTML = pikachus;
        document.getElementById('berries').innerHTML = gameData.berries.sitrus.count;
    };
    var nextCost = Math.floor(500 * Math.pow(1.5,pikachus));
    document.getElementById('pikachuCost').innerHTML = nextCost;
};

function buyPiplup(){
    var piplupCost = Math.floor(1000 * Math.pow(1.5,piplups));
    if(gameData.berries.sitrus.count >= piplupCost){
        piplups = piplups + 1;
        gameData.berries.sitrus.count = gameData.berries.sitrus.count - piplupCost;
        document.getElementById('piplups').innerHTML = piplups;
        document.getElementById('berries').innerHTML = gameData.berries.sitrus.count;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.5,piplups));
    document.getElementById('piplupCost').innerHTML = nextCost;
};

function buyTurtwig(){
    var turtwigCost = Math.floor(1000 * Math.pow(1.5,turtwigs));
    if(gameData.berries.leppa.count >= turtwigCost){
        turtwigs = turtwigs + 1;
    	gameData.berries.leppa.count = gameData.berries.leppa.count - turtwigCost;
        document.getElementById('turtwigs').innerHTML = turtwigs;
        document.getElementById('leppas').innerHTML = gameData.berries.leppa.count;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.5,turtwigs));
    document.getElementById('turtwigCost').innerHTML = nextCost;
};

function buyWeedle(){
    var weedleCost = Math.floor(4000 * Math.pow(1.5,weedle));
    if(gameData.berries.leppa.count >= weedleCost){
        weedle = weedle + 1;
    	gameData.berries.leppa.count = gameData.berries.leppa.count - weedleCost;
        document.getElementById('weedle').innerHTML = weedle;
        document.getElementById('leppas').innerHTML = gameData.berries.leppa.count;
    };
    var nextCost = Math.floor(4000 * Math.pow(1.5,weedle));
    document.getElementById('weedleCost').innerHTML = nextCost;
};

function buyPidgey(){
    var pidgeyCost = Math.floor(6000 * Math.pow(1.5,pidgey));
    if(gameData.berries.leppa.count >= pidgeyCost){
        pidgey = pidgey + 1;
    	gameData.berries.leppa.count = gameData.berries.leppa.count - pidgeyCost;
        document.getElementById('pidgey').innerHTML = pidgey;
        document.getElementById('leppas').innerHTML = gameData.berries.leppa.count;
    };
    var nextCost = Math.floor(6000 * Math.pow(1.5,pidgey));
    document.getElementById('pidgeyCost').innerHTML = nextCost;
};

function buyRattata(){
    var rattataCost = Math.floor(8000 * Math.pow(1.5,rattata));
    if(gameData.berries.leppa.count >= rattataCost){
        rattata = rattata + 1;
    	gameData.berries.leppa.count = gameData.berries.leppa.count - rattataCost;
        document.getElementById('rattata').innerHTML = rattata;
        document.getElementById('leppas').innerHTML = gameData.berries.leppa.count;
    };
    var nextCost = Math.floor(8000 * Math.pow(1.5,rattata));
    document.getElementById('rattataCost').innerHTML = nextCost;
};

function buyCaterpie(){
    var caterpieCost = Math.floor(1000 * Math.pow(1.5,caterpie));
    if(gameData.berries.lum.count >= caterpieCost){
        caterpie = caterpie + 1;
    	gameData.berries.lum.count = gameData.berries.lum.count - caterpieCost;
        document.getElementById('caterpie').innerHTML = caterpie;
        document.getElementById('lum').innerHTML = gameData.berries.lum.count;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.5,caterpie));
    document.getElementById('caterpieCost').innerHTML = nextCost;
};

function buyEkans(){
    var ekansCost = Math.floor(4000 * Math.pow(1.5,ekans));
    if(gameData.berries.lum.count >= ekansCost){
        ekans = ekans + 1;
    	gameData.berries.lum.count = gameData.berries.lum.count - ekansCost;
        document.getElementById('ekans').innerHTML = ekans;
        document.getElementById('lum').innerHTML = gameData.berries.lum.count;
    };
    var nextCost = Math.floor(4000 * Math.pow(1.5,ekans));
    document.getElementById('ekansCost').innerHTML = nextCost;
};

function buyVulpix(){
    var vulpixCost = Math.floor(6000 * Math.pow(1.5,vulpix));
    if(gameData.berries.lum.count >= vulpixCost){
        vulpix = vulpix + 1;
    	gameData.berries.lum.count = gameData.berries.lum.count - vulpixCost;
        document.getElementById('vulpix').innerHTML = vulpix;
        document.getElementById('lum').innerHTML = gameData.berries.lum.count;
    };
    var nextCost = Math.floor(6000 * Math.pow(1.5,vulpix));
    document.getElementById('vulpixCost').innerHTML = nextCost;
};

function buySpearow(){
    var spearowCost = Math.floor(8000 * Math.pow(1.5,spearow));
    if(gameData.berries.lum.count >= spearowCost){
        spearow = spearow + 1;
    	gameData.berries.lum.count = gameData.berries.lum.count - spearowCost;
        document.getElementById('spearow').innerHTML = spearow;
        document.getElementById('lum').innerHTML = gameData.berries.lum.count;
    };
    var nextCost = Math.floor(8000 * Math.pow(1.5,spearow));
    document.getElementById('spearowCost').innerHTML = nextCost;
};

function buySandshrew(){
    var sandshrewCost = Math.floor(1000 * Math.pow(1.5,sandshrew));
    if(gameData.berries.oran.count >= sandshrewCost){
        sandshrew = sandshrew + 1;
    	gameData.berries.oran.count = gameData.berries.oran.count - sandshrewCost;
        document.getElementById('sandshrew').innerHTML = sandshrew;
        document.getElementById('oran').innerHTML = gameData.berries.oran.count;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.5,sandshrew));
    document.getElementById('sandshrewCost').innerHTML = nextCost;
};

function buyOddish(){
    var oddishCost = Math.floor(4000 * Math.pow(1.5,oddish));
    if(gameData.berries.oran.count >= oddishCost){
        oddish = oddish + 1;
    	gameData.berries.oran.count = gameData.berries.oran.count - oddishCost;
        document.getElementById('oddish').innerHTML = oddish;
        document.getElementById('oran').innerHTML = gameData.berries.oran.count;
    };
    var nextCost = Math.floor(4000 * Math.pow(1.5,oddish));
    document.getElementById('oddishCost').innerHTML = nextCost;
};

function buyDiglett(){
    var diglettCost = Math.floor(6000 * Math.pow(1.5,diglett));
    if(gameData.berries.oran.count >= diglettCost){
        diglett = diglett + 1;
    	gameData.berries.oran.count = gameData.berries.oran.count - diglettCost;
        document.getElementById('diglett').innerHTML = diglett;
        document.getElementById('oran').innerHTML = gameData.berries.oran.count;
    };
    var nextCost = Math.floor(6000 * Math.pow(1.5,diglett));
    document.getElementById('diglettCost').innerHTML = nextCost;
};

function buyPoliwag(){
    var poliwagCost = Math.floor(8000 * Math.pow(1.5,poliwag));
    if(gameData.berries.oran.count >= poliwagCost){
        poliwag = poliwag + 1;
    	gameData.berries.oran.count = gameData.berries.oran.count - poliwagCost;
        document.getElementById('poliwag').innerHTML = poliwag;
        document.getElementById('oran').innerHTML = gameData.berries.oran.count;
    };
    var nextCost = Math.floor(8000 * Math.pow(1.5,poliwag));
    document.getElementById('poliwagCost').innerHTML = nextCost;
};

function buyAbra(){
    var abraCost = Math.floor(1000 * Math.pow(1.5,abra));
    if(gameData.berries.enigma.count >= abraCost){
        abra = abra + 1;
    	gameData.berries.enigma.count = gameData.berries.enigma.count - abraCost;
        document.getElementById('abra').innerHTML = abra;
        document.getElementById('enigma').innerHTML = gameData.berries.enigma.count;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.5,abra));
    document.getElementById('abraCost').innerHTML = nextCost;
};

function buyMachop(){
    var machopCost = Math.floor(4000 * Math.pow(1.5,machop));
    if(gameData.berries.enigma.count >= machopCost){
        machop = machop + 1;
    	gameData.berries.enigma.count = gameData.berries.enigma.count - machopCost;
        document.getElementById('machop').innerHTML = machop;
        document.getElementById('enigma').innerHTML = gameData.berries.enigma.count;
    };
    var nextCost = Math.floor(4000 * Math.pow(1.5,machop));
    document.getElementById('machopCost').innerHTML = nextCost;
};

window.setInterval(function(){
	berryClick(charmanders);
	berryClick(bulbasaurs * 5);
	berryClick(squirtles * 10);
	berryClick(pikachus * 50);
	berryClick(piplups * 75);
	
	leppaClick(piplups);
	leppaClick(turtwigs * 5);
	leppaClick(weedle * 10);
	leppaClick(pidgey * 50);
	leppaClick(rattata * 75);
	
	lumClick(rattata);
	lumClick(caterpie * 5);
	lumClick(ekans * 10);
	lumClick(vulpix * 50);
	lumClick(spearow * 75);
		
	sitrusPerSec();
	leppaPerSec();
	lumPerSec();
	oranPerSec();
	enigmaPerSec();
	
	oranClick(spearow);
	oranClick(sandshrew * 5);
	oranClick(oddish * 10);
	oranClick(diglett * 50);
	oranClick(poliwag * 75);
	
	enigmaClick(poliwag);
	enigmaClick(abra * 5);
	enigmaClick(machop * 10);
}, 1000);
