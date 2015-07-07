
var pokemonClickerApp = angular.module('pokemonClickerApp', [])

.controller('PokemonClickerCtrl', function($scope, $interval) {

    $scope.gameData = {
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

    updateNextCosts();

    // User clicked on the berry
    $scope.berryClick = function() {
        $scope.gameData.berries.sitrus.count ++;
    }

    $scope.buyPokemon = function(pokemonType){
        var berryType = $scope.gameData.pokemon[pokemonType].cost.berryType;  // get the type of berry being spent
        var cost = $scope.gameData.pokemon[pokemonType].nextCost;
        if( $scope.gameData.berries[berryType].count >= cost){          // if we have enough
            $scope.gameData.pokemon[pokemonType].count ++;                     // increment the pokemon count
            $scope.gameData.berries[berryType].count -= cost;           // subtract the berries spent
        }
        $scope.gameData.pokemon[pokemonType].nextCost = pokemonCost(pokemonType);                //works out the cost of the next pokemon

        updatePerSecondCounts();
    }

    $interval(function(){
        for (var berryType in $scope.gameData.berries) {
            $scope.gameData.berries[berryType].count += $scope.gameData.berries[berryType].perSec;
        }
    }, 1000);

    function pokemonCost(pokemonType){
        var num = $scope.gameData.pokemon[pokemonType].cost.num;
        var power = $scope.gameData.pokemon[pokemonType].cost.power;
        var count = $scope.gameData.pokemon[pokemonType].count;
        return Math.floor(num * Math.pow(power, count));
    }

    // figure out the per-second counts: call this after buying pokemon
    function updatePerSecondCounts() {
        var perSecond = {};
        for (var pokemonType in $scope.gameData.pokemon) {
            for( var berryType in $scope.gameData.pokemon[pokemonType].gives ) {
                if (! perSecond[berryType]) perSecond[berryType] = 0;
                perSecond[berryType] += $scope.gameData.pokemon[pokemonType].gives[berryType] * $scope.gameData.pokemon[pokemonType].count;
            }
        }

        for (var berryType in perSecond) {
            $scope.gameData.berries[berryType].perSec = perSecond[berryType];
        }
    }

    function updateNextCosts() {
        for (var pokemonType in $scope.gameData.pokemon) {
            $scope.gameData.pokemon[pokemonType].nextCost = pokemonCost(pokemonType);
        }
    }



})

.filter('capitalize', function() {
        return function(input) {
            return input.substring(0,1).toUpperCase() + input.substring(1);
        }
    });




