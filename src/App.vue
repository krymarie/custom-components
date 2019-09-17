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

    <v-content class="ma-auto" width="1260px">
      <HelloWorld/>
    </v-content>
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
