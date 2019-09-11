<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
      <v-btn class="ma-2" outlined color="indigo">Outlined Button</v-btn>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">This is what's next</h2>

        <v-card
      max-width="500"
      class="mx-auto"
    >
      <v-toolbar
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Inbox</v-toolbar-title>

        <div class="flex-grow-1"></div>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-item-icon>
            <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
  
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-card>

      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Or I could try this</h2>

        <v-card
      max-width="475"
      class="mx-auto"
    >
      <v-toolbar
        color="teal"
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Settings</v-toolbar-title>
      </v-toolbar>
  
      <v-list two-line subheader>
        <v-subheader>General</v-subheader>
  
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Profile photo</v-list-item-title>
            <v-list-item-subtitle>Change your Google+ profile photo</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
  
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Show your status</v-list-item-title>
            <v-list-item-subtitle>Your status is visible to everyone</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  
      <v-divider></v-divider>
  
      <v-list
        subheader
        two-line
        flat
      >
        <v-subheader>Hangout notifications</v-subheader>
  
        <v-list-item-group
          v-model="settings"
          multiple
        >
          <v-list-item>
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                  v-model="active"
                  color="primary"
                  @click="toggle"
                ></v-checkbox>
              </v-list-item-action>
  
              <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
  
          <v-list-item>
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                  v-model="active"
                  color="primary"
                  @click="toggle"
                ></v-checkbox>
              </v-list-item-action>
  
              <v-list-item-content>
                <v-list-item-title>Sound</v-list-item-title>
                <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
  
          <v-list-item>
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                  v-model="active"
                  color="primary"
                  @click="toggle"
                ></v-checkbox>
              </v-list-item-action>
  
              <v-list-item-content>
                <v-list-item-title>Video sounds</v-list-item-title>
                <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
  
          <v-list-item>
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                  v-model="active"
                  color="primary"
                  @click="toggle"
                ></v-checkbox>
              </v-list-item-action>
  
              <v-list-item-content>
                <v-list-item-title>Invites</v-list-item-title>
                <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">I've never tried this one before. So Cool and easy to customize.</h2>
    </v-layout>
  </v-container>
</template>

<script>
//end of code
export default {

  data: () => ({
    drawer: true,
    mainMenu: {
      dashboard: 'Dashboard',
      people: 'Leads',
      business: 'Companies',
      business_center: 'Deals',
      file_copy: 'Invoices',
      settings: 'Settings',
    },
    stats,
    tasks,
    newLeads,
    newLeadsHeaders,
    newLeadsSearch: '',
  },
    
      items: [
        { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
      settings: [],
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
};
</script>
