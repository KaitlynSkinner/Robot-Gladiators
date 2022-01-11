var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like thuis
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack= 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// Fight function with parameter, which would be enemyName
var fight = function(enemyName) {
    //Repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
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
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // Subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
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
            // ?why get rid of the below line if it allows us to enter "fight" and then enter
            // without this line we can just press enter and type nothing to "fight" 3.2.7... 
            //if (promptFight === "fight" || promptFight === "FIGHT") {
            
            // 1Remove enemy's health by subtracting the amount set in the playerAttack variable
            // 2Generate random damage value based on player's attack power
            var damage = randomNumber(playerAttack - 3, playerAttack);
            
            enemyHealth = Math.max(0, enemyHealth - damage);
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
      
            // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                
                //?added 3.2.7.. Award player money for winning
                playerMoney = Math.max(0, playerMoney - 10);
                
                // Leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
      
            // Remove player's health by subtracting the amount set in the enemyAttack variable
            var damage = randomNumber(enemyAttack - 3, enemyAttack)
            
            playerHealth = Math.max(0, playerHealth - damage);
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
      
            // Check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                // Leave while() loop if player is dead
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    }
};

// Function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);

    return value;
};

// fight(); ..now being replaced by below for loop
// now for loop is being wrapped in a startGame() function
// Function to start a new game
var startGame = function() {
    // Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
    //Alert players that they are starting the round
    if (playerHealth > 0) {
    // Let player know what round they are in, remeber that arrays starts at 0 so it needs to have 1 added to it
        window.alert(
        "Welcome to Robot Gladiators! Round "
         + (i + 1));
    }                            
        // Pick new enemy to fight on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
                                    
        // Reset enemyHealth before starting new fight
        enemyHealth = randomNumber(40, 60);
                                    
        // Use debugger to pause script from running and check what's going on at that moment in the code
        //debugger;
                                    
        // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);

        // If player is still alive and we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
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
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
            
            // Increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
        } else {
            window.alert("You dont't have enough money!");
        }

            break;
        case "UPGRADE":
        // New case above
        case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Leaving the store.");

            // Increas attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
        } else {
            window.alert("You don't have enough money!");
        }
        
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