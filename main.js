
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
				num: 1000,
				power: 1.5,
				berryType: "enigma"
			},
			gives: {
				enigma: 5
			}
		},
		machop: {
			count: 0,
			cost: {
				num: 4000,
				power: 1.5,
				berryType: "enigma"
			},
			gives: {
				enigma: 10
			}
		}
    }
};

// User clicked on the berry
function berryClick() {
    gameData.berries.sitrus.count ++;
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