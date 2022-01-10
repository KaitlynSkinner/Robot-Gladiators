var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like thuis
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack= 12;

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
            
            // Remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
      
            // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                
                //?added 3.2.7.. Award player money for winning
                playerMoney = playerMoney + 20;
                
                // Leave while() loop since enemy is dead
                break;
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
                // Leave while() loop if player is dead
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    }
};

// fight(); ..now being replaced by below for loop
for (var i = 0; i < enemyNames.length; i++) {
    //Alert players that they are starting the round
    if (playerHealth > 0) {
    // Let player know what round they are in, remeber that arrays starts at 0 so it needs to have 1 added to it
        window.alert(
        "Welcome to Robot Gladiators! Round "
         + (i + 1));
                                    
        // Pick new enemy to fight on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
                                    
        // Reset enemyHealth before starting new fight
        enemyHealth = 50;
                                    
        // Use debugger to pause script from running and check what's going on at that moment in the code
        debugger;
                                    
        // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
        } else {
        window.alert(
            "You have lost your robot in battle! Game Over!"
        );
    }
    /* ? Deleting the below I believe according to 3.2.8.
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    */
}
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