var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like thuis
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack= 12;

var fight = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // If player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // Remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // Remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // Check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // If player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // If yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // Subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // If no (false), ask question again by running fight() again
    else {
      fight();
    }
  }
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of 'playerAttack' from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
    );
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    );
};

// fight();
    // Game States
    // "WIN" - Player robot has defeated all enemy-robots
    //  * Fight all enemy-robots
    //  * Defeat each enemy-robot
    // "LOSE" - Player robot's health is zero or less
var enemy1 = "Roberto";
var enemy2 = "Amy Android";
var enemy3 = "Robo Trumble";

console.log(enemyNames);