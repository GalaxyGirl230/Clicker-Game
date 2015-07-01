
var gameData = {
    berries: {
        sitrus: {
            count: 0,
            perSec: 0
        },
        leppa: {
            count: 0,
            perSec: 0
        },
        lum: {
            count: 0,
            perSec: 0
        },
        oran: {
            count: 0,
            perSec: 0
        },
        enigma: {
            count : 0,
            perSec: 0
        }
    },
    pokemon: {
        charmander: {
            count: 0,
            cost: {
                num: 10,
                power: 1.1,
                berryType: "sitrus"
            },
            gives: {
                sitrus: 1
            }
        },
        bulbasaur: {
            count: 0,
            cost: {
                num: 50,
                power: 1.3,
                berryType: "sitrus"
            },
            gives: {
                sitrus: 5
            }
        },
        squirtle: {
            count: 0,
            cost: {
                num:100,
                power: 1.5,
                berryType: "sitrus"
            },
            gives: {
                sitrus: 10
            }
        },
        pikachu: {
			count: 0,
			cost: {
				num:500,
				power: 1.5,
				berryType: "sitrus"
			},
			gives: {
				sitrus: 50
			}
		},
        piplup: {
			count: 0,
			cost: {
				num:1000,
				power: 1.5,
				berryType: "sitrus"
			},
			gives: {
				sitrus: 75,
				leppa: 1
			}
		},
        turtwig: {
			count: 0,
			cost: {
				num:1000,
				power: 1.5,
				berryType: "leppa"
			},
			gives: {
				leppa: 5
			}
		},
        weedle: {
			count: 0,
			cost: {
				num:4000,
				power: 1.5,
				berryType: "leppa"
			},
			gives: {
				leppa: 10
			}
		},
        pidgey: {
			count: 0,
			cost: {
				num:6000,
				power: 1.5,
				berryType: "leppa"
			},
			gives: {
				leppa: 50
			}
		},
        rattata: {
			count: 0,
			cost: {
				num: 8000,
				power: 1.5,
				berryType: "leppa"
			},
			gives: {
				leppa: 75,
				lum: 1
			}
		},
        caterpie: {
			count: 0,
			cost: {
				num: 1000,
				power: 1.5,
				berryType: "lum"
			},
			gives: {
				lum: 5
			}
		},
        ekans: {
			count: 0,
			cost: {
				num: 4000,
				power: 1.5,
				berryType: "lum"
			},
			gives: {
				lum: 10
			}
		},
        vulpix: {
			count: 0,
			cost: {
				num: 6000,
				power: 1.5,
				berryType: "lum"
			},
			gives: {
				lum: 50
			}
		},
        spearow: {
			count: 0,
			cost: {
				num: 8000,
				power: 1.5,
				berryType: "lum"
			},
			gives: {
				lum: 75,
				oran: 1
			}
		},
        sandshrew: {
			count: 0,
			cost: {
				num: 1000,
				power: 1.5,
				berryType: "oran"
			},
			gives: {
				oran: 5
			}
		},
        oddish: {
			count: 0,
			cost: {
				num: 4000,
				power: 1.5,
				berryType: "oran"
			},
			gives: {
				oran: 10
			}
		},
        diglett: {
			count: 0,
			cost: {
				num: 6000,
				power: 1.5,
				berryType: "oran"
			},
			gives: {
				oran: 50
			}
		},
        poliwag: {
			count: 0,
			cost: {
				num: 8000,
				power: 1.5,
				berryType: "oran"
			},
			gives: {
				oran: 75,
				enigma: 1
			}
		},
        abra: {
			count: 0,
			cost: {
				num: 4000,
				power: 1.5,
				berryType: "enigma"
			},
			gives: {
				enigma: 5
			}
		}
    }
};

// User clicked on the berry
function berryClick() {
    gameData.berries.sirtus.count ++;
    updateBerriesUI();
}

// buy a pokemon
function buyPokemon(pokemonType){
    var berryType = gameData.pokemon[pokemonType].cost.berryType;  // get the type of berry being spent
    var cost = pokemonCost(pokemonType);                     // get the cost in such berries
    if( gameData.berries[berryType].count >= cost){          // if we have enough
        gameData.pokemon[pokemonType].count ++;                     // increment the pokemon count
        gameData.berries[berryType].count -= cost;           // subtract the berries spent

        document.getElementById(pokemonType + 'Count').innerHTML = gameData.pokemon[pokemonType].count;  //updates the number of pokemon for the user
    }
    var nextCost = pokemonCost(pokemonType);                //works out the cost of the next pokemon
    document.getElementById(pokemonType + 'Cost').innerHTML = nextCost;  //updates the pokemon cost for the user

    updatePerSecondCounts();
    updateBerriesUI();
}

function pokemonCost(pokemonType){
    var num = gameData.pokemon[pokemonType].cost.num;
    var power = gameData.pokemon[pokemonType].cost.power;
    var count = gameData.pokemon[pokemonType].count;
    return Math.floor(num * Math.pow(power, count));
}

// figure out the per-second counts: call this after buying pokemon
function updatePerSecondCounts() {
    var perSecond = {};
    for (var pokemonType in gameData.pokemon) {
        for( var berryType in gameData.pokemon[pokemonType].gives ) {
            if (! perSecond[berryType]) perSecond[berryType] = 0;
            perSecond[berryType] += gameData.pokemon[pokemonType].gives[berryType] * gameData.pokemon[pokemonType].count;
        }
    }

    for (var berryType in perSecond) {
        gameData.berries[berryType].perSec = perSecond[berryType];
    }
}

/*         Old Code
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

*/

window.setInterval(function(){
    for (var berryType in gameData.berries) {
        gameData.berries[berryType].count += gameData.berries[berryType].perSec;
    }

    updateBerriesUI();
}, 1000);

// update the UI
function updateBerriesUI() {
    for (var berryType in gameData.berries) {
        document.getElementById(berryType + "Count").innerHTML = gameData.berries[berryType].count;
        document.getElementById(berryType + "PS").innerHTML = gameData.berries[berryType].perSec;
    }
}