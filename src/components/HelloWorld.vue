<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      

      <v-flex mb-4>
      <v-btn class="ma-2" outlined color="indigo">Outlined Button</v-btn>
      </v-flex>

        <v-flex xs12>
        <section class="ma-2" class="row">
        <div class="small-6 columns">
            <h1 class="text-center">YOU</h1>
            <div class="healthbar">
                <div 
                class="healthbar text-center" 
                style="background-color: green; margin: 0; color: white;"
                :style= "{width: playerHealth + '%'}">

                {{playerHealth}}
                
                </div>
            </div>
        </div>
        <div class="small-6 columns">
            <h1 class="text-center">MONSTER</h1>
            <div class="healthbar">
                <div 
                class="healthbar text-center" 
                style="background-color: green; margin: 0; color: white;"
                :style= "{width: monsterHealth + '%'}">
                {{monsterHealth}}
                </div>
            </div>
        </div>
    </section>
    <section class="row controls" v-if="!gameIsRunning">
        <div class="small-12 columns">
            <button id="start-game" @click="startGame">START NEW GAME</button>
        </div>
    </section>
    <section class="row controls" v-else>
        <div class="small-12 columns">
            <button id="attack" @click="attack">ATTACK</button>
            <button id="special-attack" @click="specialAttack">SPECIAL ATTACK</button>
            <button id="heal" @click="heal">HEAL</button>
            <button id="give-up" @click="giveUp">GIVE UP</button>
        </div>
    </section>
    <section class="row log" v=if="turns.length > 0">
        <div class="small-12 columns">
            <ul>
                <li v-for="turn in turns">
                  {{ turn.text }}
                </li>
            </ul>
        </div>
    </section>
    </v-layout>
  </v-container>
</template>

<script>
//possibly just use this here for the script for vue <script src="app.js">
//end of code
export default {

  data: () => ({
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  }),
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      });
      if(this.checkWin()) {
        return;
      }

      this.monsterAttacks();
      //this.playerHealth -= this.calculateDamage(5, 12);
      //this.checkWin();
    },

    specialAttack: function() {
      this.monsterHealth -= this.calculateDamage(10, 20);
      if(this.checkWin()) {
        return;
      }

      this.monsterAttacks ();
    },

    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.monsterAttacks();      
    },

    giveUp: function() {
      this.gameIsRunning = false;
    },
    monsterAttacks: function() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player with ' + damage
      });
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) +1, min);
    },
   
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('Your won! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('Your lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }

};
</script>
