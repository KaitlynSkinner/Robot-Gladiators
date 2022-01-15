// Function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);

    return value;
};

// Function to confirm if player wants to skip or fight
var fightOrSkip = function() {
    // Ask the player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //Enter the conditional recursive function call here!

    // Validate prompt answer
    //if (promptFight === "" || promptFight === null) {
    //    window.alert ("You need to provide a valid answer! Please try again.");
        // Use return to call it again and stop the rest of this function from running
    //    return fightOrSkip();
    //}

    // If player picks "skip" confirm and then stop the loop
    // toLowercase which converts promptFight to all lowercase - check with less options
    promptFight = promptFight.toLowerCase();
    
    if (promptFight === "skip") {
        // Confirm player wants to skip
        var confirmSkip = window.confirm(
        "Are you sure you'd like to quit?"
        );

    // If yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // Subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);

        // Return true if player wants to leave
        return true;
    }
    // Conditional Recursive Function Call
    // If the 'promptFight' is NOT a valid value, then execute the following statements.
    if (!promptFight) {
        window.alert("You need to provide a valid answer! Please try again.");
    }
}
// Return false otherwise
return false;
};

// Fight function with parameter, which would be enemyName
var fight = function(enemy) {
    // Keep track of who goes first 
    var isPlayerTurn = true;
    
    //Conditional statement to reassign isPlayerTurn to false half of the time
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    //Repeat and execute as long as the enemy-robot is alive
    while(playerInfo.health > 0 && enemy.health > 0) {
            if (isPlayerTurn) {
                // Ask player if they'd like to fight or skip using fightOrSkip
                // Place fight function code block here . . .
                // *Repeat and execute as long as the enemy-robot is alive
                if (fightOrSkip()) {
                    //If true, leave fight by breaking loop
                    break;
                }
           
                // 1) Remove enemy's health by subtracting the amount set in the playerAttack variable
                // 2) Generate random damage value based on player's attack power
                var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            
                enemy.health = Math.max(0, enemy.health - damage);
                console.log(
                    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
                );
                
                // Check enemy's health
                if (enemy.health <= 0) {
                    window.alert(enemy.name + " has died!");
                
                    //?added 3.2.7.. Award player money for winning
                    playerInfo.money = playerInfo.money + 20;
                
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
        // Switch turn order for next round
        isPlayerTurn = (!isPlayerTurn);
    }
};

// Function to set name 
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
        }
        console.log("Your robot's name is " + name);
        return name;
};

//Variables moved from top of page after randomNumber so Objects could access it
var playerInfo = {
    name: getPlayerName(),
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
    // console.log player stats
    console.log(playerInfo);

    //Alert players that they are starting the round
    if (playerInfo.health > 0) {
    // Let player know what round they are in, remeber that arrays starts at 0 so it needs to have 1 added to it
        window.alert(
        "Welcome to Robot Gladiators! Round "
         + (i + 1));
         //debugger;   //this is the beginning of the game                           
   
        // Pick new enemy to fight on the index of the enemyNames array
        var pickedEnemyObj = enemyInfo[i];
                                    
        // Reset enemyHealth before starting new fight
        pickedEnemyObj.health = randomNumber(40, 60);
                                    
        // Use debugger to pause script from running and check what's going on at that moment in the code
        //debugger;
        console.log(pickedEnemyObj);
                                    
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
        }
        // If player is not alive, break out of the loop and let the endGame function run
        } else {
        window.alert(
            "You have lost your robot in battle! Game Over!"
        );
        break;
        }
    }
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
    window.alert("The game has now ended. Let's see how you did!");

    // Check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    // If the highScore value is falsy (for example, null), then assign zero to highScore.
    // If not, retain whatever value is currently stored in highScore.
    if (highScore === null) {
        highScore = 0;
    }
    // If player has more money than te high score, player has new high score!
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }

    // Ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
     
    // If player is still alive, player wins!
    //if (playerInfo.health > 0) {
    //    window.alert("The game has now ended. Let's see how you did!");
    //} else {
    //    window.alert("You've lost your robot in battle.");
    //} 
    // Ask player if they'd like to play again
    //var playAgainConfirm = window.confirm("Would you like to play again?");

    //if (playAgainConfirm) {
        // Restart the game
    //    startGame();
    //} else {
    //    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    //}
};

var shop = function() {
    // Ask the player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE he store? Please enter 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
    
    shopOptionPrompt = parseInt(shopOptionPrompt);
    // Use switch to carry out action
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
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
