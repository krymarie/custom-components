<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>MONSTER PROJECT</span>
        <span class="font-weight-light">KRYSTAL MITCHELL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/krymarie/krystal-mitchell-monster-project/commits/master"
        target="_blank"
      >
        <span class="mr-2">Latest Repo</span>
      </v-btn>
    </v-app-bar>

    <v-content text-center>
      <HelloWorld/>
    </v-content>
    
    <v-card height="150">
      <v-footer
        absolute
        class="font-weight-medium"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
