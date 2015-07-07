
var pokemonClickerApp = angular.module('pokemonClickerApp', [])

.controller('PokemonClickerCtrl', function($scope, $interval, $http) {

    // User clicked on the berry
    $scope.berryClick = function() {
        if( $scope.gameData ) {
            $scope.gameData.berries.sitrus.count++;
        }
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

        saveGameData(); // save in case you buy and close the browser
    }

    $scope.resetGame = function() {
        if( window.confirm("Are you sure you want to restart?") ) {
            loadDefaultData();
        }
    }

    function saveGameData() {
        if ($scope.gameData) {
            $scope.gameData.saveTime = new Date().getTime();
            window.localStorage.setItem('pokemonGameData',JSON.stringify($scope.gameData));
        }
    }

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

    function loadDefaultData() {
        $http.get('defaultGameData.json').success(function (data) {
            $scope.gameData = data;
            updateNextCosts();
            saveGameData();
        });
    }

    // load up the game data at the beginning
    // first, try local storage
    if( typeof(Storage) !== "undefined") {
        var strData = window.localStorage.getItem('pokemonGameData');
        if( strData ) {
            $scope.gameData = JSON.parse(strData);
            if( $scope.gameData.saveTime ) {
                var secondsElapsed = Math.floor((new Date().getTime() - $scope.gameData.saveTime) / 1000);
                click(secondsElapsed);
            }
        }
    }
    // if we didn't get anything, then load the default
    if( ! $scope.gameData ) {
        loadDefaultData();
    }

    // click counts
    $interval(function() {
        click(1);
    }, 1000);

    function click(seconds) {
        if ($scope.gameData) {
            for (var berryType in $scope.gameData.berries) {
                $scope.gameData.berries[berryType].count += ($scope.gameData.berries[berryType].perSec * seconds);
            }
        }
    }

    // save game data
    $interval(function() {
        saveGameData();
    }, 60000); // once per minute; we also save after you buy something

})

.filter('capitalize', function() {
    return function(input) {
        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});




