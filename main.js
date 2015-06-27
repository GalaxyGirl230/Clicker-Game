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
var ekans = 0;
var caterpie = 0;
var vulpix = 0;

var sitrusPS = 0;
var leppaPS = 0;
var lumPS = 0;
var oranPS = 0;

var oran = 0;
var spearow = 0;
var sandshrew = 0;
var oddish = 0;
var diglett = 0;

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
function oranClick(number){
	oran = oran + number;
	document.getElementById("oran").innerHTML = oran;
};

function sitrusPerSec(){
	sitrusPS = charmanders + (bulbasaurs * 5) + (squirtles * 10) + (cookies * 50) + (piplups * 75);
	document.getElementById("sitrusPS").innerHTML = sitrusPS;
};
function leppaPerSec(){
	leppaPS = piplups + (turtwigs * 5) + (weedle * 10) + (pidgey * 50) + (rattata * 75);
	document.getElementById("leppaPS").innerHTML = leppaPS;
};
function lumPerSec(){
	lumPS = rattata + (caterpie * 5) + (ekans * 10) + (vulpix * 50) + (spearow * 75);
	document.getElementById("lumPS").innerHTML = lumPS;
};
function oranPerSec(){
	oranPS = spearow + (sandshrew * 5) + (oddish * 10) + (diglett * 50);
	document.getElementById("oranPS").innerHTML = oranPS;
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

function buyCaterpie(){
    var caterpieCost = Math.floor(2500 * Math.pow(1.5,caterpie));
    if(lum >= caterpieCost){
        caterpie = caterpie + 1;
    	lum = lum - caterpieCost;
        document.getElementById('caterpie').innerHTML = caterpie;
        document.getElementById('lum').innerHTML = lum;
    };
    var nextCost = Math.floor(2500 * Math.pow(1.5,caterpie));
    document.getElementById('caterpieCost').innerHTML = nextCost;
};

function buyEkans(){
    var ekansCost = Math.floor(4000 * Math.pow(1.5,ekans));
    if(lum >= ekansCost){
        ekans = ekans + 1;
    	lum = lum - ekansCost;
        document.getElementById('ekans').innerHTML = ekans;
        document.getElementById('lum').innerHTML = lum;
    };
    var nextCost = Math.floor(4000 * Math.pow(1.5,ekans));
    document.getElementById('ekansCost').innerHTML = nextCost;
};

function buyVulpix(){
    var vulpixCost = Math.floor(6000 * Math.pow(1.5,vulpix));
    if(lum >= vulpixCost){
        vulpix = vulpix + 1;
    	lum = lum - vulpixCost;
        document.getElementById('vulpix').innerHTML = vulpix;
        document.getElementById('lum').innerHTML = lum;
    };
    var nextCost = Math.floor(6000 * Math.pow(1.5,vulpix));
    document.getElementById('vulpixCost').innerHTML = nextCost;
};

function buySpearow(){
    var spearowCost = Math.floor(8000 * Math.pow(1.5,spearow));
    if(lum >= spearowCost){
        spearow = spearow + 1;
    	lum = lum - spearowCost;
        document.getElementById('spearow').innerHTML = spearow;
        document.getElementById('lum').innerHTML = lum;
    };
    var nextCost = Math.floor(8000 * Math.pow(1.5,spearow));
    document.getElementById('spearowCost').innerHTML = nextCost;
};

function buySandshrew(){
    var sandshrewCost = Math.floor(2500 * Math.pow(1.5,sandshrew));
    if(oran >= sandshrewCost){
        sandshrew = sandshrew + 1;
    	oran = oran - sandshrewCost;
        document.getElementById('sandshrew').innerHTML = sandshrew;
        document.getElementById('oran').innerHTML = oran;
    };
    var nextCost = Math.floor(2500 * Math.pow(1.5,sandshrew));
    document.getElementById('sandshrewCost').innerHTML = nextCost;
};

function buyOddish(){
    var oddishCost = Math.floor(4000 * Math.pow(1.5,oddish));
    if(oran >= oddishCost){
        oddish = oddish + 1;
    	oran = oran - oddishCost;
        document.getElementById('oddish').innerHTML = oddish;
        document.getElementById('oran').innerHTML = oran;
    };
    var nextCost = Math.floor(4000 * Math.pow(1.5,oddish));
    document.getElementById('oddishCost').innerHTML = nextCost;
};

function buyDiglett(){
    var diglettCost = Math.floor(6000 * Math.pow(1.5,diglett));
    if(oran >= diglettCost){
        diglett = diglett + 1;
    	oran = oran - diglettCost;
        document.getElementById('diglett').innerHTML = diglett;
        document.getElementById('oran').innerHTML = oran;
    };
    var nextCost = Math.floor(6000 * Math.pow(1.5,diglett));
    document.getElementById('diglettCost').innerHTML = nextCost;
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
	lumClick(caterpie * 5);
	lumClick(ekans * 10);
	lumClick(vulpix * 50);
	lumClick(spearow * 75);
		
	sitrusPerSec();
	leppaPerSec();
	lumPerSec();
	oranPerSec();
	
	oranClick(spearow);
	oranClick(sandshrew * 5);
	oranClick(oddish * 10);
	oranClick(diglett * 50);
}, 1000);
