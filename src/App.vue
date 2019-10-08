<template>
  <v-app id="app">
    <!-- <v-app-bar>
      <v-toolbar-title class="headline text-uppercase">
        <span>CUSTOM COMPONENT</span>
        <span class="font-weight-light">KRYSTAL MITCHELL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/krymarie/krystal-mitchell-custom-component/commits/master"
        target="_blank"
      >
        <span class="mr-2">Latest Repo</span>
      </v-btn>
    </v-app-bar> -->

    <v-content text-center> 
      <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
    </div>
    </v-content>
    
    <!-- <v-card height="150"> -->
      <!-- <v-footer
        absolute
        class="font-weight-medium"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Custom Component</strong>
        </v-col>
      </v-footer>
    </v-card>-->
  </v-app> 
</template>

<script>
import User from './components/User.vue';

    export default {
      name: 'App',
        components: {
            appUser: User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>