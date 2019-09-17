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
    <v-footer absolute padless class="text-center">
      <div class="flex-grow-1"></div>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
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
