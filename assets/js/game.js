// Fight function with parameter, which would be enemyName
var fight = function(enemy) {
    //Repeat and execute as long as the enemy-robot is alive
    while(playerInfo.health > 0 && enemy.health > 0) {
            // Place fight function code block here . . .

            // Fight function statements - 
            // ask player if they would like to fight or run
            var promptFight = window.prompt(
                "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
                );

            // If player choses to skip - 
            // confirm and then stop the loop
            if (promptFight === "skip" || promptFight === "SKIP") {
            // Confirm player wants to skip
            var confirmSkip = window.confirm(
                "Are you sure you'd like to quit?"
                );
      
            // If yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // Subtract money from playerMoney for skipping
                playerInfo.money = playerInfo.money - 10;
                console.log("playerInfo.money", playerInfo.money);
                break;
            }

            // ?we are moving or removing the below? 3.2.7. from here..
            // If no (false), ask question again by running fight() again
            //else {
            //    fight();
            //}
            //?..up to here 3.2.7
        }
            // If player choses to fight, then fight
            //if (promptFight === "fight" || promptFight === "FIGHT") {
            
            // 1Remove enemy's health by subtracting the amount set in the playerAttack variable
            // 2Generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
            //}
            // Check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                
                //?added 3.2.7.. Award player money for winning
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                
                // Leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
      
            // Remove player's health by subtracting the amount set in the enemyAttack variable
            var damage = randomNumber(enemy.attack - 3, enemy.attack)
            
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
            
            // Check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                // Leave while() loop if player is dead
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
    }
};

// Function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);

    return value;
};

//Variables moved from top of page after randomNumber so Objects could access it
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money - 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refill player's health by 20 for 7 dollars.");
            this.health += 20;
            this.mney -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
        //The above could also be written as the below in a switch statement (taken from te shop section)
        //if (playerInfo.money >= 7) {
        //    window.alert("Refilling player's health by 20 for 7 dollars.");
        
        // Increase health and decrease money
        //playerInfo.health = playerInfo.health + 20;
        //playerInfo.money = playerInfo.money - 7;
        //} else {
        //window.alert("You dont't have enough money!");
        //}

    }, 
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

//You can also log multiple values at once like thuis
//console.log(playerName, playerAttack, playerHealth);

var enemyInfo = [
{
    name: "Roborto",
    attack: randomNumber(10, 14)
},
{
    name: "Amy Android",
    attack: randomNumber(10, 14)
},
{
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
}
];

console.log(enemyInfo[0].attack);
console.log(enemyInfo[1].attack);
console.log(enemyInfo[2].attack);

// fight(); ..now being replaced by below for loop
// now for loop is being wrapped in a startGame() function
// Function to start a new game
var startGame = function() {
    // Reset player stats
    playerInfo.reset();

for (var i = 0; i < enemyInfo.length; i++) {
    //Alert players that they are starting the round
    if (playerInfo.health > 0) {
    // Let player know what round they are in, remeber that arrays starts at 0 so it needs to have 1 added to it
        window.alert(
        "Welcome to Robot Gladiators! Round "
         + (i + 1));
    }                            
        // Pick new enemy to fight on the index of the enemyNames array
        var pickedEnemyObj = enemyInfo[i];
                                    
        // Reset enemyHealth before starting new fight
        pickedEnemyObj.health = randomNumber(40, 60);
                                    
        // Use debugger to pause script from running and check what's going on at that moment in the code
        //debugger;
                                    
        // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyObj);

        // If player is still alive and we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            // Ask if the player wants to use the store before the next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

            // If yes, take them to the store() function
            if (storeConfirm) {
                shop();
            }
        } else {
        window.alert(
            "You have lost your robot in battle! Game Over!"
        );
        break;
        }
    }
// Start the game when the page loads
//startGame();

// After the loop ends, player is either out of health or enemis to fight, so run the endGame function
endGame();
};
    /*
    var enemy1 = "Roberto"
    var enemy2 = "Amy Adroid";
    var enemy3 = "Robo Trumble";

    //console.log(enemyNames.length);

    //for(var i = 0; i < enemyNames.length; i++) {
    //console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index");
    //}
    // Game States
    // "WIN" - Player robot has defeated all enemy-robots
    //  * Fight all enemy-robots
    //  * Defeat each enemy-robot
    // "LOSE" - Player robot's health is zero or less
    */

// Function to end the entire game
var endGame = function() {
    // If player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("The game has now ended. Let's see how you did!");
    } else {
        window.alert("You've lost your robot in battle.");
    } 
    // Ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // Restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    // Ask the player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE he store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // Use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": 
        // New case above
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        // New case above
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        // New case above
        case "leave":
            window.alert("Leaving the store.");

            // Do nothing, so function will end
            break;
        default: 
        window.alert("You did not pick a valid option. Try again.");

        // Call shop() again to force player to picka  valid option
        shop();
        break;
    }
};

startGame();
