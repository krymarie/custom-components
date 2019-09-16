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
        <section class="row">
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
            <button id="attack">ATTACK</button>
            <button id="special-attack">SPECIAL ATTACK</button>
            <button id="heal">HEAL</button>
            <button id="give-up">GIVE UP</button>
        </div>
    </section>
    <section class="row log">
        <div class="small-12 columns">
            <ul>
                <li>

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

  data: () {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
     
  },

  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    }
  }

};
</script>
